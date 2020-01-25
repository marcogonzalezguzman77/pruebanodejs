const fs = require('fs');
//este codigo es codigo asincrono
fs.readFile('./texto.txt', function (err, data){
    if (err){
        console.log(err);
    }
    else {
        console.log(data.toString());
    }
});     

console.log ('modulo asincrono');
