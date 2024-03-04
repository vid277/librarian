import { chunk_word_limit } from "./auth.js";

export async function subselect_text(dom_node) {
	const my_chunk_word_limit = await chunk_word_limit();
	const chunker = new PageChunker(my_chunk_word_limit);
	chunker.handle_node(dom_node);
}

export class PageChunker {
	constructor(chunk_word_limit) {
		this.stack = [];
		this.chunks = [];
		this.current_chunk = "";
		this.chunk_word_limit = chunk_word_limit;

		this.blacklisted_tags = ["SCRIPT", "STYLE", "LINK"];
		this.content_tags = ["P", "SPAN", "H1", "H2", "H3", "H4", "H5", "H6", "H7", "STRONG", "EM", "B", "I"];
	}

	handle_node(dom_node) {
		if (this.blacklisted_tags.indexOf(dom_node.tagName) > -1) return;
	}

	finalize() {

	}
}