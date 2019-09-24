let arr = [1,2,3,4]

let foo = function(){
    console.log(arr)
}

//module : Es una variable local que viene con informacion sobre el modulo en donde estamos. Una de sus propiedades es .exports 

//CommonJS
//module.exports = foo 
//module.exports.foo = foo

//ES6 Modules
//export default foo
//export foo
