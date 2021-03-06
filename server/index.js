import fs from 'fs';
import path from 'path';
import ws from 'express-ws';
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3001;

const dbURL = 'mongodb://localhost:27017';
const dbName = 'boomslang';
ws(app);

MongoClient.connect(dbURL, function (err, client) {
    console.log('Connected successfully to server');

    const db = client.db(dbName);

    const collection = db.collection('screens');
    collection.insertOne({
        title: 'test',
        body: 'wowo',
        poop: 0999,
    });
    client.close();
});

let serveStatic = false;
const staticFiles = path.join(__dirname, '../dist');
if (fs.existsSync(staticFiles)) {
    app.use(express.static(staticFiles));
    serveStatic = true;
}

app.get('/', (req, res) => {
    if (serveStatic) {
        res.sendFile('index.html');
    }
    res.send('Boomslang Server');
});

app.ws('/', (socket, req) => {
    socket.on('message', function (msg) {
        if (msg === 'heartbeat') {
            return socket.send(msg);
        }
        console.log(JSON.parse(msg));
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));
