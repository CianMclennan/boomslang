import settings from 'src/settings.js';
const { editor_port: port, editor_domain: domain } = settings;
const url = `http://${domain}:${port}`;

export const fetchScreen = (screenId) => {
	const headers = new Headers();
	const requestUrl = `${url}/api/screens/${screenId}`;
	const request = new Request(requestUrl, {
		headers,
		method: 'GET',
		mode: 'cors',
		cache: 'default',
	});

	return fetch(request).then((response) => {
		const { status, ok } = response;
		if (status === 200 && ok) {
			return response.json();
		}
		return Promise.reject(response);
	});
};

export const postScreen = (screenId = 'test', content) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
	});
	const requestUrl = `${url}/screen/${screenId}`;
	const options = {
		headers,
		method: 'POST',
		mode: 'cors',
		cache: 'default',
		body: JSON.stringify(content),
	};

	return (
		fetch(requestUrl, options)
			.then((response) => response.json())
			// eslint-disable-next-line no-console
			.then(console.log)
	);
};
