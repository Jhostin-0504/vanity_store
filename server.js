const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const logger = require("morgan");
const cors = require("cors");

/* instanciar rutas*/
 const users = require('./routes/usersRoutes');

const port = process.env.PORT || 3007;
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.disable("x-powered-by");


app.set("port",port);

/*llamando rutas*/
 users(app);

server.listen(3007,"192.168.20.26"||"localhost", function(){

        console.log("aplicacion de nodejs " + port + "inicada...")

});

/*app.get('/',(req,res)=>{
    res.send('ruta raiz del backend');
});*/


// control de errores
app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);

});

 module.exports = {
     app: app,
     server: server

 }
// 200 respuesta existosa -  404 la url no existe  - 500 erro interno del codigo  


