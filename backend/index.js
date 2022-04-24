import Neo                 from 'neo.mjs/src/Neo.mjs';
import * as core           from 'neo.mjs/src/core/_export.mjs';
import express             from 'express';
import UserService         from './UserService.mjs';
import { WebSocketServer } from 'ws';

const app = express();

const wsServer = new WebSocketServer({ noServer: true });

wsServer.on('connection', socket => {
    socket.on('message', message => {
        let parsedMessage = JSON.parse(message),
            data          = parsedMessage.data,
            service       = Neo.ns(`MyApp.backend.${data.service}`),
            replyData     = service[data.method](...data.params),
            reply;

        console.log(data);

        if (parsedMessage.mId) {
            reply = {
                mId : parsedMessage.mId,
                data: {
                    data   : replyData,
                    success: true
                }
            };
        } else {
            reply = {
                data   : replyData,
                success: true
            };
        }

        socket.send(JSON.stringify(reply));
    });
});

const server = app.listen(3001);

server.on('upgrade', (request, socket, head) => {
    wsServer.handleUpgrade(request, socket, head, socket => {
        wsServer.emit('connection', socket, request);
    });
});
