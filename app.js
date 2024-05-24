const {crearArchivo} = require('./misarchivos/multiplicar'); //importo
const argv = require('./yargsindependientes/yargs.js'); 
const colors = require('colors');


   console.clear(); 

crearArchivo (argv.base, argv.ListarSiOk, argv.hastaAca)
    .then (nombreCualquierArchivo => console.log( nombreCualquierArchivo.rainbow,' CREADO'))
    .catch (err => console.log( err));


