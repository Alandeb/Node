const http = require("http")
//import http from "http"

//El callback de createServer se ejecuta POR CADA solicitud al servidor. Este toma dos parámetros y los dos son Streams : El primero es un stream de lectura y simboliza el request hecho al server y el segundo es un stream de escritura y nos sirve para escribir la respuesta que le damos al cliente
let server = http.createServer((req,res)=>{

    console.log(`${req.method} ${req.url}`)
    res.writeHead(200, { "Content-Type" : "text/html" } )
    res.write("<h1>Titulo</h1>")
    res.write("<p>Hola Mundo</p>")
    //setTimeout(()=>{
    res.end()
    //},5000)

})

server.listen(8080,()=>{ console.log("Corriendo en 8080!") })
