
//CommonJS
//const dos = require("./dos")
//const dos = require("./dos").foo

//ES6 Module
//import dos from "./dos"
//import { foo } from "./dos"

/**
 * Cuando hacemos un require de un modulo, node busca ese nombre con extensiones : .js , .json y .node
 * Si no lo encuentra, puede subir hasta la carpeta node_modules local del proyecto(si es que hubiera alguno) ó la global del SO(si es que hubiera alguna)
*/