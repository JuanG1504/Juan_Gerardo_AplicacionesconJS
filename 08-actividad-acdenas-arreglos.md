# Cadenas y arreglos

Índice:

1. [Redondeo](#redondeo)
2. [Cadenas](#cadenas)
3. [Arreglos](#arreglos)
    3.1. [inmutabilidad](#inmutabilidad-de-arreglos)
    3.2. [map](#map)
    3.3. [filter](#filter)
    3.4. [reduce](#reduce)
    3.5. [foreach](#foreach)
4. [Actividades](#actividades)
    5.1. [Actividad 1](#actividad-1)
    5.2. [Actividad 2](#actividad-2)
    5.3. [Actividad 3](#actividad-3)
    5.3. [Actividad 4](#actividad-4)
6. [Math.round()](#mathround)
7. [toFixed()](#tofixed)

Actividad para el manejo de cadenas y arreglos, puede probar en node, en un scrcipt o en: [JS playground](https://www.jsplayground.dev/)

** Objetivo:** Solucionar problemas de procesamiento de datos usando las sentencias del lenguaje JS para manipular arreglos y cadenas.

# Introducción

## Redondeo

Para redondear un número puedes usar las funciones roun del objeto Math y el método toFixed()

### **Math.round()**

El objeto Math en JavaScript es un objeto incorporado (no un paquete) que proporciona constantes y funciones matemáticas estáticas.

* Propósito: Redondea un número al entero más cercano.
* Tipo de retorno: number.
* Regla de redondeo: Redondea hacia arriba si la parte decimal es ≥ 0.5, de lo contrario hacia abajo (estándar “round half up”).
* No acepta parámetros para decimales.
Ejemplos:
```js
console.log(Math.round(4.3));   // 4 (número)
console.log(Math.round(4.5));   // 5
console.log(Math.round(4.7));   // 5
```

### **toFixed()**

toFixed() es un método del objeto Number en JavaScript, lo que significa que cualquier valor numérico (primitivo) puede usarlo.

* Propósito: Formatea un número con un número específico de decimales, redondeando al valor más cercano según la cantidad de decimales indicada.
* Tipo de retorno: string.
* Acepta un parámetro: la cantidad de dígitos después del punto decimal (por defecto 0).
* Regla de redondeo: Similar a Math.round, pero con precisión decimal; sin embargo, puede presentar pequeñas imprecisiones debido a la representación interna de punto flotante.
Ejemplos:
```js
let num = 4.567;
console.log(num.toFixed(2));   // "4.57" (string)
console.log(num.toFixed(0));   // "5" (string)
```


## Cadenas

Funciones (métodos) más importantes para trabajar con cadenas (strings) en JavaScript

```js
let texto = "Hola mundo";
console.log(texto.length); // 10
console.log(texto.charAt(0)); // "H"
console.log(texto.indexOf("mundo")); // 5

//ultima posicion de subcadena
let frase = "hola hola";
console.log(frase.lastIndexOf("hola")); // 5

// Verifica si la cadena termina con esa subcadena.
console.log(texto.endsWith("mundo")); // true

//.slice(inicio, fin) – Extrae una porción desde inicio hasta fin (sin incluir fin). Acepta índices negativos (desde el final).
let texto = "JavaScript";
console.log(texto.slice(0, 4));   // "Java"
console.log(texto.slice(-6));     // "Script"

//.substring(inicio, fin) – Similar a slice, pero no acepta índices negativos (los trata como 0).
console.log(texto.substring(4, 10)); // "Script"

//Transformación de mayúsculas/minúsculas
console.log("hola".toUpperCase()); // "HOLA"

console.log("HOLA".toLowerCase()); // "hola"

//Eliminación de espacios
let conEspacios = "   hola   ";
console.log(conEspacios.trim()); // "hola"

//.trimStart() / .trimEnd() – Eliminan solo al inicio o solo al final (ES2019).
console.log(conEspacios.trimStart()); // "hola   "
console.log(conEspacios.trimEnd());   // "   hola"

//.split(separador) – Divide la cadena en un arreglo según el separador.
let csv = "manzana,pera,naranja";
let frutas = csv.split(",");
console.log(frutas); // ["manzana", "pera", "naranja"]

//Unión con join() (método de arreglos, complementario):
const frutas=[manzana", "pera", "naranja"]
let resultado = frutas.join(" - ");
console.log(resultado); // "manzana - pera - naranja"

//.replace(buscar, reemplazar) – Reemplaza la primera ocurrencia. Puede usar una expresión regular.
let saludo = "Hola mundo mundo";
console.log(saludo.replace("mundo", "amigo")); // "Hola amigo mundo"

//.replaceAll(buscar, reemplazar) – Reemplaza todas las ocurrencias (ES2021).
console.log(saludo.replaceAll("mundo", "amigo")); // "Hola amigo amigo"

//.repeat(veces) – Repite la cadena el número de veces indicado.
let eco = "¡Hola! ".repeat(3);
console.log(eco); // "¡Hola! ¡Hola! ¡Hola! "

//.padStart(longitud, relleno) – Rellena al inicio hasta alcanzar la longitud deseada.
let numero = "42";
console.log(numero.padStart(5, "0")); // "00042"

//.padEnd(longitud, relleno) – Rellena al final.
console.log(numero.padEnd(5, "0")); // "42000"

//.concat(cadena2, cadena3, ...) – Une cadenas. También se puede usar el operador + o template literals.
let saludo = "Hola".concat(" ", "mundo");
console.log(saludo); // "Hola mundo"

//cadenas literaales  permite interpolar variables y crear cadenas multilínea de forma más legible:
let nombre = "Ana";
let edad = 30;
let mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`;
console.log(mensaje); // "Hola, me llamo Ana y tengo 30 años."
```

## arreglos

Un arreglo es una estructura de datos que permite almacenar una colección ordenada de valores. Puede contener cualquier tipo de dato: números, strings, booleanos, objetos, otros arreglos, etc.

### declarando arreglos

```js
// Usando el constructor Array
let arr1 = new Array(1, 2, 3);

// Usando la notación literal (recomendada)
let arr2 = [1, 2, 3];
```

### acceso a elementos

```js
let frutas = ['manzana', 'banana', 'cereza'];
console.log(frutas[0]); // 'manzana'
// modificar elementos
frutas[0]='pera'
```

### Insertar/eliminar datos push pop

```js
let arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4] agrega al final
arr.pop();   // [1, 2, 3] elimina el último y lo devuelve.
arr.unshift(0); // [0, 1, 2, 3] agrega al principio
arr.shift(); // [1, 2, 3] elimina el primero y lo devuelve.
```

### longitud

Propiedad length

```js
let arr = [1, 2, 3];
console.log(arr.length); // 3
```

### inmutabilidad de arreglos

```js
//inmutabilidad con operador spread
const array=[1,2,3,4,5]
//agregar el elemento 34
const array2=[...array,34]
array[0]=45
console.log(array) //[ 45, 2, 3, 4, 5 ]
console.log(array2) //[ 1, 2, 3, 4, 5 ]
```
### map

Sintaxis
```js
let nuevoArray = array.map(function(elemento, indice, arreglo) {
  // Procesar el elemento y devolver un nuevo valor
});
```

Ejemplo

```js
//map
const arreglo=[2,5,3,7,8,9]
//map --> para cada dato en el arreglo devuelve dato*2
const nvoArreglo=arreglo.map((dato)=>{
    return dato*2
})
//o
const nvoArreglo=arreglo.map(dato=> dato*2)
//nvoArreglo es un nuevo arreglo donde su i-esimo elemento = i-esimo elemento de arreglo * 2
```
Ejemplo
```js
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function(element){
      return `<li>${element.firstName} ${element.lastName}</li>`;
  })
   const salida=userFullnames.join('\n')
  console.log(userFullnames);
  console.log(salida)
```
Ejemplo:

```js
let users = [
  {firstName: "Susan", lastName: "Steward", edad: 34},
  {firstName: "Daniel", lastName: "Longbottom", edad: 27},
  {firstName: "Jacob", lastName: "Black", edad: 18}
];

// Obtener array con lastname y edad
let lastNamesAndAges = users.map(user => ({
  lastName: user.lastName,
  edad: user.edad
}));

console.log(lastNamesAndAges);
// Resultado: 
// [
//   {lastName: "Steward", edad: 34},
//   {lastName: "Longbottom", edad: 27},
//   {lastName: "Black", edad: 18}
// ]
```
### Filter

Sintaxis
```js
const nuevoArray = array.filter(callback(elemento, indice, array) {
    // return condición (true para mantener, false para descartar)
});
```
Ejemplo
```js
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];
  
  var entradasInvalidas = 0;
  // Si el elemento tiene un atributo id, y su valor correspondiente es un numero
  // Y no es el valor NaN, entonces es una entrada válida
  function filtrarPorID(obj) {
    if ("id" in obj && typeof obj.id === "number" && !isNaN(obj.id)) {
      return true;
    } else {
      entradasInvalidas++;
      return false;
    }
  }
  
  var arrPorID = arr.filter(filtrarPorID);
  
  console.log("Array Filtrado\n", arrPorID);
  // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
  
  console.log("Número de Entradas Invalidas = ", entradasInvalidas);
  // 4
  
```
Ejemplo 2 filter:

```js
let users = [
  {firstName: "Susan", lastName: "Steward", edad:34},
  {firstName: "Daniel", lastName: "Longbottom", edad:27},
  {firstName: "Jacob", lastName: "Black", edad:18}
];

let usuariosMenores20 = users.filter(user => user.edad < 20);

console.log(usuariosMenores20);
```
### reduce

El método reduce recorre cada elemento de un arreglo y acumula un valor final a partir de una función que defines. Su nombre viene de "reducir" un arreglo a un único valor (aunque ese valor puede ser un número, un string, un objeto, otro arreglo, etc.).

Sintaxis
```js
array.reduce((acumulador, elementoActual, índice, arregloOriginal) => {
  // lógica que actualiza el acumulador
  return nuevoAcumulador;
} [, valorInicial]);
```
* acumulador: es el valor que se va actualizando en cada iteración. Al final, será el valor devuelto por reduce.
* elementoActual: el elemento del arreglo que se está procesando.
* índice (opcional): la posición del elemento actual.
* arregloOriginal (opcional): el arreglo sobre el que se llama a reduce.
* valorInicial (opcional): valor con el que se inicia el acumulador. Si no se proporciona, reduce usará el primer elemento del arreglo como acumulador inicial y empezará a iterar desde el segundo elemento.

Ejemplo
```js
const numeros = [5, 10, 15];
const suma = numeros.reduce((acum, actual) => acum + actual, 0);
console.log(suma); // 30
```

Ejemplo

```js
const array = [1, 2, 3, 4];
const valorInicial = 10;
const suma = array.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, valorInicial); // Resultado: 20
```
### forEach

Sintaxis
```js
array.forEach(function(elemento, indice, array) {
  // código a ejecutar por cada elemento
});
```
Ejemplo
```js
const frutas = ['manzana', 'banana', 'naranja'];

frutas.forEach(function(fruta) {
  console.log(fruta);
});
// Salida:
// manzana
// banana
// naranja
```
## Actividades

### Actividad 1

Para el siguiente arreglo:

```js
const array=[
    {id:1,name:'juan'},
    {id:2,name:'pedro'},
    {id:3,name:'maria'},
    {id:4,name:'luis'},
    {id:5,name:'ana'}
]
```

Realice lo siguiente:

 1. crear un nuevo arreglo con los nombres en mayusculas.
 2. crear un nuevo arreglo con los nombres que contienen la letra 'a'

 ### Solución A1:

 ```js
//1. crear un nuevo arreglo con los nombres en mayusculas
const nombresMayusculas=array.map(item=>item.name.toUpperCase())
console.log(nombresMayusculas)

//2. crear un nuevo arreglo con los nombres que contienen la letra 'a'
const nombresConA=array.filter(item=>item.name.includes('a')).map(item=>item.name)
console.log(nombresConA)
 ```

### Actividad 2

Para un arreglo de alumnos con las calificaciones de sus materias que llevo en el semetre, obtenga una lista de alumnos con sus respectivos promedios del semestre. Si desea redondear los decimales puede usar la funcion Math.roun() o toFixed()

Arreglo de alumnos:

```js
const array=[
    {id:1,name:'juan', matematicas:80, ingles:90, fisica:70},
    {id:2,name:'pedro', matematicas:85, ingles:88, fisica:75},
    {id:3,name:'maria', matematicas:90, ingles:92, fisica:85},
    {id:4,name:'luis', matematicas:75, ingles:80, fisica:80},
    {id:5,name:'ana', matematicas:88, ingles:95, fisica:88}
]
```

### Solución A2:

```js
const array=[
    {id:1,name:'juan', matematicas:80, ingles:90, fisica:70},
    {id:2,name:'pedro', matematicas:85, ingles:88, fisica:75},
    {id:3,name:'maria', matematicas:90, ingles:92, fisica:85},
    {id:4,name:'luis', matematicas:75, ingles:80, fisica:80},
    {id:5,name:'ana', matematicas:88, ingles:95, fisica:88}
]

//crear un nuevo arreglo con los nombres y promedios
const promedios=array.map(estudiante=>{
    const promedio=Math.round((estudiante.matematicas+estudiante.ingles+estudiante.fisica)/3)
    return {name:estudiante.name, promedio:promedio}
})
console.log(promedios)
```

### Actividad 3:

A partir de un arreglo con los datos y calificaciones de un conjunto de alumnos:

```js
const array=[
    {id:1,name:'juan', matematicas:80, ingles:90, fisica:70},
    {id:2,name:'pedro', matematicas:85, ingles:88, fisica:75},
    {id:3,name:'maria', matematicas:90, ingles:92, fisica:85},
    {id:4,name:'luis', matematicas:75, ingles:80, fisica:80},
    {id:5,name:'ana', matematicas:88, ingles:95, fisica:88}
]
```

Construya una cadena que contenga una lista no ordenada en html:

### Solución A3:

```js
const array=[
    {id:1,name:'juan', matematicas:80, ingles:90, fisica:70},
    {id:2,name:'pedro', matematicas:85, ingles:88, fisica:75},
    {id:3,name:'maria', matematicas:90, ingles:92, fisica:85},
    {id:4,name:'luis', matematicas:75, ingles:80, fisica:80},
    {id:5,name:'ana', matematicas:88, ingles:95, fisica:88}
]

function generarListaHTML(datos) {
    const items = datos.map(est => {
        const promedio = (est.matematicas + est.ingles + est.fisica) / 3;
        return `<li>
            Matemáticas: ${est.matematicas} 
            Inglés: ${est.ingles} 
            Física: ${est.fisica}
            Promedio: ${promedio.toFixed(2)}
        </li>`;
    }).join('');

    return `<ul>
        ${items}
    </ul>`;
}

const listaHTML = generarListaHTML(array)
console.log(listaHTML)
```

### Actividad 4

Para los siguientes datos:


```js
const array=[
    {id:1,name:'juan', matematicas:80, ingles:90, fisica:70},
    {id:2,name:'pedro', matematicas:85, ingles:88, fisica:75},
    {id:3,name:'maria', matematicas:90, ingles:92, fisica:85},
    {id:4,name:'luis', matematicas:75, ingles:80, fisica:80},
    {id:5,name:'ana', matematicas:88, ingles:95, fisica:88}
]
```
Muestra en html una lista con el nombre en mayusculas del alumno y su promedio

### Solución A4:

Coloque el siguiente código en un archivo: "index.html" y ábralo con su navegador.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>
    <script>
        const array=[
            {id:1,name:'juan', matematicas:80, ingles:90, fisica:70},
            {id:2,name:'pedro', matematicas:85, ingles:88, fisica:75},
            {id:3,name:'maria', matematicas:90, ingles:92, fisica:85},
            {id:4,name:'luis', matematicas:75, ingles:80, fisica:80},
            {id:5,name:'ana', matematicas:88, ingles:95, fisica:88}
        ]

        function generarListaHTML(datos) {
            const items = datos.map(est => {
                const promedio = (est.matematicas + est.ingles + est.fisica) / 3;
                return `<li>
                    ${est.name.toUpperCase()}, Promedio: ${promedio.toFixed(2)}
                </li>`;
            }).join('');

            return `<ul>
                ${items}
            </ul>`;
        }

        window.onload = function() {
            const listaHTML = generarListaHTML(array);
            document.writeln(listaHTML);
        };
    </script>
</body>
</html>
```
