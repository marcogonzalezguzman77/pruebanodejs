
const http = require('http');

//crear un servidor, pero recuerda que es asincrono
//hay que esperar que se cree el servidor
//y cuando se crea se ejecuta la funcion interna function()

//el servidor recibe informacion req
//responde con res

/*
http.createServer(function (req, res){
    res.writeHead(200, { 'Content-type': 'text/plain'});
    res.write('Hola Mundo');
    res.end();
}).listen(3000);
*/

const colors = require('colors');

const handleServer = function (req, res){
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.write('<h1> Hola Mundo </h1>');
    /*res.writeHead(200, { 'Content-type': 'text/plain'});
    res.write('Hola Mundo');*/
    res.end();
}

//http.createServer(handleServer).listen(3000);

const server = http.createServer(handleServer);

server.listen(3000, function (){
    console.log('Servidor en el puerto 3000'.red);
})