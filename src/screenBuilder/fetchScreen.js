import settings from 'src/settings.js';
const { editor_port: port, editor_domain: domain } = settings;
const url = `http://${domain}:${port}`;

export const fetchScreen = (screenId) => {
	const headers = new Headers();
	const requestUrl = `${url}/screen/${screenId}`;
	const request = new Request(requestUrl, {
		headers,
		method: 'GET',
		mode: 'cors',
		cache: 'default',
	});

	return fetch(request)
		.then((response) => response.json())
		.then(({ ok, screen }) => {
			if (ok) {
				return screen;
			}
		});
};
