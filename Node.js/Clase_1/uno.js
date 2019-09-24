//Commonjs
// si es una libreria va a estar react por ej o jquery en el require
const dos = require("./dos") // {foo : fn()}
console.log(dos.foo())//module.exports.foo = foo 
//const dos = require("./dos").foo // fn()
//console.log(dos())

//ES6
//import dos from "./dos"
//import { foo } from "./dos"
/**
 * Cuando hacemos un require del modulo node busca ese nombre con extenciones: .js ,.json y .node
 * si no lo encontra , puede subir hasta la carpeta node_modules local del proyecto 
 * (si es que hubiera alguno ) o la global del SO (si es que hubiera alguna)
 * Es posible hacer require entre los 2 archivos
 * que nombre de identificacion usaremos para el require y const para definirlo no es necesario 
 * ya que js no tiene variables const se puede reemplazar , se puede usar let 
 */