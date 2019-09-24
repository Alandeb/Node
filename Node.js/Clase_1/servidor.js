//import http from "http";
const http = require("http") // creando un servidor hay que importar el modulo http esta en la documentacion de node

//el callback (lo que esta dentro del parentecis) de createServer se ejecuta
// POR CADA solicitud al servidor. Este toma dos parametros y los dos son streams: el primero 
// es un stream de lectura y simboliza el request hecho al server y el segundo es un stream de
// escritura y nos sirve para escribir la respuesta que le damos al cliente  
// `req` es de escritura  y  `res` es de lectura 
//  Siempre se usan eso 2 parametros (req,res)
let server = http.createServer((req,res)=>{

    console.log(`${req.method} ${req.url}`)// o lo derivo al bucle de eventos o lo ejecuto en el momento
    res.writeHead(200, {"content-Type" : "text/html"})
    res.write("<h1>Titulos</h1>")
    res.write("<p>Hola Mundo</p>")
    //setTimeout(()=>{
    res.end()// se termina por que si no se queda esperando y nunca deriva al user 
    //})
})

server.listen(8080,() => {console.log(" corriendo en 8080! ")})// el lambda de acasolo muestra un mensaje
// el listen corre el server

//el server escribo localhost:8080 en la web para correr ver  como va en cmd sale algo asi:

/**
 *  corriendo en 8080!
    GET /
    GET /favicon.ico
 */