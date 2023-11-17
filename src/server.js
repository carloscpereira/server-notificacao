//const express = require('express');
//const http = require('http');
const WebSocket = require('ws');
const server = new WebSocket.Server({
    port: 5656
});
let sockets = [];
//console.log('esastfsadofu aqui')
server.on('connection', function(socket) {
    // /console.log(socket);
    // Adicionamos cada nova conexão/socket ao array `sockets`
    sockets.push(socket);
    // Quando você receber uma mensagem, enviamos ela para todos os sockets
    socket.on('message', function(msg) {
        console.log(msg)
        sockets.forEach(s => s.send(msg));
    });
    // Quando a conexão de um socket é fechada/disconectada, removemos o socket do array
    socket.on('close', function() {
        sockets = sockets.filter(s => s !== socket);
    });
});