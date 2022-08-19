// PETICIONES
// localhost:8080/index.html

const http = require('http');

const server = http.createServer((request, response) => {
    const status = 200; // OK
    const mimeType = { 'Content-Type' : 'text/html' };
    response.writeHead(status, mimeType);
    response.write('<html> <body> Hola dev </body> </html>');
    response.end();
});

server.listen(8000);
console.log('el servidor fue iniciado...');

