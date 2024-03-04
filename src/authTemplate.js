export async function tr_organization() {
	return " "; // replace with organization id
}

export async function tr_dataset() {
	return " "; // replace with dataset id 
}

export async function authorization() {
	return " "; // replace with API key
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
	
	// https://blog.devgenius.io/understanding-tokens-and-tokenization-in-large-language-models-1058cd24b944#b3b9
	return (await chunk_token_limit()) * 3 / 4;
}