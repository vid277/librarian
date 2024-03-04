export async function tr_organization() {
	return "249a87fe-c91f-4b50-9bf0-78dd259b2e30";
}

export async function tr_dataset() {
	return "5d725540-39b6-4f78-9f90-9b6ac68593a9";
}

export async function authorization() {
	return "tr-Met3eaQlEYyLtLEX5PnkiP6Khr4SCXHk";
}

export async function auth_headers() {
	return {
		"TR-Organization": await tr_organization(),
		"TR-Dataset": await tr_dataset(),
		Authorization: await authorization(),
	};
}


export async function chunk_token_limit() {
	return 8192;
}

export async function chunk_word_limit() {
	//https://blog.devgenius.io/understanding-tokens-and-tokenization-in-large-language-models-1058cd24b944#b3b9
	return (await chunk_token_limit()) * 3 / 4;
}