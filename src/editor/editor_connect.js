import WebSocket from 'websocket-heartbeat-js';

const MAX_ATTEMPTS = 2;

/**
 *
 * @param {URL} url
 * @param {String} id
 */
const editorConnect = (url, id) => {
	const ws = new WebSocket({ url });
	const sendString = ws.send;
	let attempts = 0;
	ws.send = (data) => {
		const msg = {
			id,
			data,
		};
		sendString(JSON.stringify(msg));
	};
	ws.onopen = () => console.log('connect success');

	ws.onmessage = function ({ data }) {
		if (data === 'heartbeat') return;
		console.log(`onmessage: ${data}`);
	};

	ws.onreconnect = function () {
		attempts++;
		if (attempts > MAX_ATTEMPTS) {
			console.log('closing...');
			ws.close();
			return;
		}
		console.log('reconnecting...');
	};
	return ws;
};

export default editorConnect;
