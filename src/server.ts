import "reflect-metadata"
import app from './app'
import {appDataSource} from './db'

async function main (){
    await appDataSource.initialize();
    console.log('database connected')
    app.listen(3000);
    console.log('server is listening on port',3000);
}

main();


// 200 respuesta existosa -  404 la url no existe  - 500 erro interno del codigo  


