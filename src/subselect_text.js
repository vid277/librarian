import { chunk_word_limit } from "./auth.js";

export async function subselect_text_into_chunks(dom_node) {
	const my_chunk_word_limit = await chunk_word_limit();
	const chunker = new PageChunker(my_chunk_word_limit);
	chunker.enqueue_node(dom_node);
	return new Promise((resolve, reject) => {
		function work() {
			try {
				if (chunker.process()) setTimeout(work);
				else {
					chunker.finalize();
					resolve(chunker.chunks);
				}
			} catch (e) {
				reject(e);
			}
		}
		work();
	});
}

export class PageChunker {
	constructor(chunk_word_limit) {
		this.stack = [];
		this.chunks = [];
		this.current_chunk = "";
		this.chunk_word_limit = chunk_word_limit;

		this.blacklisted_tags = ["script", "style", "link"];
		this.content_tags = ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "strong", "em", "b", "i", "title", "ul", "ol", "a"];
	}

	enqueue_node(dom_node, opts = {}) {
		if (dom_node == null) return;
		if (this.blacklisted_tags.indexOf(dom_node.tagName) > -1) return;
		this.stack.push({
			dom_node,
			delegated_should_handle_content: false,
			should_handle_content: this.content_tags.indexOf(dom_node.tagName) > -1,
			has_processed_content: false,
			has_processed_children: false,
			...opts
		});
	}

	//Returns whether more processing is needed
	process() {
		if (this.stack.length === 0) return false;
		const entry = this.stack.pop();
		const dom_node = entry.dom_node;

		const should_handle_content = entry.should_handle_content || entry.delegated_should_handle_content;
		if (should_handle_content && !entry.has_processed_content && typeof dom_node.nodeValue === "string" && dom_node.nodeValue.length > 0) {
			this.current_chunk += dom_node.nodeValue + "\n";
			entry.has_processed_content = true;
		}
		
		if (!entry.has_processed_children && Array.isArray(dom_node.childNodes)) {
			for (let i = dom_node.childNodes.length - 1; i >= 0; i--) {
				this.enqueue_node(dom_node.childNodes[i], { delegated_should_handle_content: should_handle_content });
			}
			entry.has_processed_children = true;
		}

		return true;
	}

	finish_chunk() {
		let words = this.current_chunk.split(/\s+/);
		if (words.length > 0 && words[words.length - 1].length === 0) words.pop();
		if (words.length > 0 && words[0].length === 0) words.shift();

		while (words.length > 0) {
			const slice_until = Math.min(words.length, this.chunk_word_limit);
			const chunk_slice = words.slice(0, slice_until);
			words = words.slice(slice_until);
			this.chunks.push(chunk_slice.join(" "));
		}
	}

	finalize() {
		this.finish_chunk();
	}
}