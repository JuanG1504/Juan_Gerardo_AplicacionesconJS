//inmutabilidad con operador spread
const array=[1,2,3,4,5]
//agregar el elemento 34
const array2=[...array,34]
array[0]=45
console.log(array) //[ 45, 2, 3, 4, 5 ]
console.log(array2) //[ 1, 2, 3, 4, 5 ]
//map
const arreglo=[2,5,3,7,8,9]
//map --> para cada dato en el arreglo devuelve dato*2

const nvoArreglo=arreglo.map(dato=> dato*2)
console.log("Nuevo arreglo:",nvoArreglo)