import { MongoClient } from 'mongodb';
import express from 'express';
import fs from 'fs';
import path from 'path';
import settings from '../src/settings.js';
import ws from 'express-ws';

const app = express();
const { editor_port: port } = settings;

const dbURL = 'mongodb://localhost:27017';
const dbName = 'boomslang';
ws(app);

let serveStatic = false;
const staticFiles = path.join(__dirname, '../dist');
if (fs.existsSync(staticFiles)) {
	app.use(express.static(staticFiles));
	serveStatic = true;
}
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.get('/', (req, res) => {
	if (serveStatic) {
		res.sendFile('index.html');
	}
	res.send('Boomslang Server');
});

app.get('/screen/:id', (req, res) => {
	MongoClient.connect(dbURL, (error, client) => {
		const {
			params: { id: screenId },
		} = req;

		if (error) {
			res.send({ ok: false, error });
			return;
		}

		const db = client.db(dbName);

		const collection = db.collection('screens');
		collection.find({ screen_id: screenId }).toArray((error, screens) => {
			if (error || !screens.length) {
				res.send({ ok: false, error });
				return;
			}
			console.log('screens:', screens.length);
			const [screen] = screens;
			res.send({ ok: true, screen });
		});
		client.close();
	});
});

app.ws('/', (socket) => {
	socket.on('message', function (msg) {
		if (msg === 'heartbeat') {
			return socket.send(msg);
		}
		console.log(JSON.parse(msg));
	});
});

app.listen(port, () => console.log(`listening on port ${port}`));
