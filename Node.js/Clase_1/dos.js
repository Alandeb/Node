let arr = [1,2,3,4] // un array

let foo = function(){
    console.log(arr)  // hay que sacarlo de la variable local
}

// module: es una variable local que viene con informacion sobhre el modulo en donde estamos. 
//Una de sus propiedades es .exports para sacar la funcion foo

//esto es commonJS
module.exports.foo = foo // saco la funcion foo voy hasta el uno.js y llamo a este modulo
//module.exports = foo // tambien se puede hacer asi 

//ES6 modules pero todo de penhde de que que version de node pero esta es la manera comun 
// export default foo
//export let foo = hasta se puede declarar aca 