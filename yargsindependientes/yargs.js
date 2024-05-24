const argv = require('yargs')
                .option ('b', {    // esa 'b' va a singificar todo lo de abajo: alias, tipo, etc
                    alias: 'base',
                    type:'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                    } )
                    .option ('h', {    
                        alias: 'hastaAca',
                        type:'number',
                        default: 10,
                        describe: 'Es el numero limite de la tabla'
                        } )
                .option ('l', {    // esa 'l' va a singificar listar
                    alias: 'ListarSiOk',
                    type:'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la table en consola'
                    } )
                .check((argv, options)=>{
                    if(isNaN(argv.base)){    //si no es 1 nro
                            throw 'La BASE tiene q ser 1 NUMERO'
                    }
                    return true; //si no hay error, retornar true
                })                 
                .argv;

module.exports = argv;