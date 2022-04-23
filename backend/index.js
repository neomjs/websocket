import express             from "express";
import { WebSocketServer } from 'ws';

const app = express();

const wsServer = new WebSocketServer({ noServer: true });

wsServer.on('connection', socket => {
    socket.on('message', message => {
        const parsedMessage = JSON.parse(message);

        console.log(parsedMessage);

        const reply = {success: true};

        socket.send(JSON.stringify(reply));
    });
});

const server = app.listen(3001);

server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, socket => {
        wsServer.emit('connection', socket, request);
    });
});
