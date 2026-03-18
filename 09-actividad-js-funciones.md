# funciones

## introducción

```js
//función
function suma(a,b){
    return a+b
}

//función flecha anónima
const resta=(a,b)=>{
    return a-b
}

//función flecha anónima reducida
const resta=(a,b)=>{ a-b }

//función tradicional anónima
const multiplica=function(a,b){
    return a*b
}

//funcion [lambda]
console.log((a,b)=>{
    return a*b
})
//función [lambda]
console.log(function(a,b){
    return a*b
})

```
### Parámetros

```js
function tablaMultiplicar(tabla, hasta) {
  for (let i = 0; i <= hasta; i++) {
    console.log(tabla, "x", i, "=", tabla * i);
  }
}

// Ejecución
tablaMultiplicar(5, 3); // "tabla" valdrá 5 y "hasta" valdrá 3

// Parámetros x default
function saludo(nombre = "Visitante", mensaje = "Hola") {
  console.log(mensaje + ", " + nombre);
}

saludo(); // "Hola, Visitante"
saludo("Ana"); // "Hola, Ana"
saludo("Carlos", "Bienvenido"); // "Bienvenido, Carlos"

```

### Parámetros rest

```js
//Parámetros rest
function sumar(...numeros) {
  return numeros.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

console.log(sumar(1, 2)); // 3
console.log(sumar(5, 10, 15)); // 30
```

### Desestructurar parámetros

```js
// Sin desestructuración
function mostrarUsuario(usuario) {
  console.log(usuario.nombre);
  console.log(usuario.edad);
  console.log(usuario.ciudad);
}

// CON desestructuración
function mostrarUsuario({ nombre, edad, ciudad }) {
  console.log(nombre);
  console.log(edad);
  console.log(ciudad);
}

// Uso
const usuario = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid"
};

mostrarUsuario(usuario);
// Output: Ana, 30, Madrid
```
