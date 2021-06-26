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
		.then(({ ok, screen, error }) => {
			if (ok) {
				return screen;
			}
			let msg = `Failed to load ${screenId}`;
			if (error) {
				msg += ` - ${JSON.stringify(error)}`;
			}
			return msg;
		});
};

export const postScreen = (screenId = 'test') => {
	const headers = new Headers({
		'Content-Type': 'application/json',
	});
	const requestUrl = `${url}/screen/${screenId}`;
	const options = {
		headers,
		method: 'POST',
		mode: 'cors',
		cache: 'default',
		body: JSON.stringify({ test: 'hi' }),
	};

	return (
		fetch(requestUrl, options)
			.then((response) => response.json())
			// eslint-disable-next-line no-console
			.then(console.log)
	);
};
