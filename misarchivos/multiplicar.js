const fs = require('fs'); //tengo en fs es lo q necesito para grabar en un archivo
const colors = require('colors');

const crearArchivo = async(base = 5, ListarSiOk = false, hastaAca = 10) => { 
    try {
        let salida = '';

        for (let i=1 ; i<=hastaAca ; i++ ) {
            salida =  salida + (`${base} x ${i} = ${base * i}\n`); //salto de linea \n            
        }

        if(ListarSiOk) {  //si ListarSiOk es true imprimo
            console.log('==================='.green);
            console.log(`tabla del ${base}`.blue);
            console.log('==================='.green);
            console.log (salida);
        }
                
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);  
            
            return`tabla-${base}.txt CREADO`;
    }catch(err){
        throw err;    }                          
}
module.exports = {    crearArchivo: crearArchivo}
