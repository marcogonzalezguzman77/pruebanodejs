/* const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem ',os.freemem(), ' bytes');
console.log('total mem ',os.totalmem(), ' bytes');
*/

const fs = require('fs');
//este codigo es codigo asincrono
fs.writeFile('./texto.txt', 'linea uno', function (err){
    if (err){
        console.log(err);
    }
    else {
        console.log('Archivo creado');
    }
});     
//function(err) es un callback, una funcion que se ejecuta cuando se ha terminado el proceso 

//esto es para desmostrar que node js trabaja de forma asincrona, es decir, manda a ejecutar funciones
//que realiza el sistema operativo pero continua ejecutando
//las funciones siguientes
console.log('ultima linea de codigo');
//esta es la clave por la que node.js puede
//tener muchas consultas concurrentes
