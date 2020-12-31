const express = require('express');
const app = express();
const ws = require('express-ws');
const path = require('path');
const fs = require('fs');
const port = 3001;

ws(app);

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
