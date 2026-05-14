# Agregar Fetch al servidor vanilla

## Objetivo:

Agregar fetch() al servidor vanilla para poner datos en la página **lista.html**.

## Programar fetch()

Para obtener datos fake con **fetch()**; desde la api **jsonplaceholder** crearemos una función con un **fetch()**:

Crea el archivo `prueba.js` con el siguiente código y pruebalo, deberás ver una lista de usuarios en la consola.

```js
//obtener datos desde la URL
function getData(URL) {
  return fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar usuarios');
      return response.json();
    }); 
}

const URL= 'https://jsonplaceholder.typicode.com/users';

// Prueba de la función 
function testFetchUsers() {
  getData(URL)
    .then(users => {
      console.log('Usuarios obtenidos sin async/await:', users);
    })
    .catch(error => {
      console.error('Error en testFetchUsers:', error);
    });
}

// Ejecutamos la prueba
testFetchUsers();
```

Lo anterior, es un fetch donde el único código que puede causarte confusión es:

1. throw

```js
if (!response.ok) throw new Error('Error al cargar usuarios');
```

Cuando un **fetch()** trae la respuesta, recuerada que los datos vienen envueltos en una "*caja*" cuyo contenido esta descrito en el protocolo **HTTP** esta caja trae entre otras cosas, un atributo `ok` que indica si los datos se obtubieron con exito, ademas trae los datos que luego desempaquetaremos con **json()**. Por tanto  antes de desempaquetar los datos debemos asegurarnos que todo fue bien y si hay datos, esto lo podemos hacer preguntando por el resultado del atributo `ok` que trae `true` si los datos se obtubieron con éxito, `false` en caso contrario; con un `if` preguntamos si la respuesta no fue correcta `if(!response.ok)` en cuyo caso con la sentencia `throw new Error('mensaje')` lanzamos un error. Vea mas sobre errores en [throw]((https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/throw)).



2. json()

Si la sentencia descrita anteriormente lanzo un error la funcion aborta y no se ejecuta la sentencia:

```js
return response.json();
```

Si no hubo error devolvemos `response.json()` recuerda que esto en una promesa que desempaqueta los datos y los convierte al formato json.



Al probar la función con: llamamos a la función `getData(URL)`  que devuelve la promesa `response.json()` por tanto al ser una promesa espera una funcion como parámetro que se ejecutará al resolverse la promesa, y esa funcion parametro la enviamos con `.then()`:

```js
getData(URL)
    .then(users => {
      console.log('Usuarios obtenidos sin async/await:', users);
    })
    .catch(error => {
      console.error('Error en testFetchUsers:', error);
    });
```

el parámetro users contiene los datos en formato json() que genero `response.json()`

y entonces el código:

```js
users => {
      console.log('Usuarios obtenidos sin async/await:', users);
    }
```

Es la función que ejecuta la promesa `response.json()` 



Ahora que entendemos y probamos el código, pongamos la funcion **getData()** en un modulo independiente, para esto, crea una carpeta: `src\services` (o sea crea services dentro de la carpeta src) en tu proyecto vanilla, en esa nueva carpeta pon el archivo:



archivo: `userService.js`

```js
//obtener datos de la URL
export function getData(URL) {
  return fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar usuarios');
      return response.json();
    }); 
}
```



> Nota: observe que quitamos el código donde probamos el funcionamiento de **getData()**



## Crear tabla

Creamos una función para crear una tabla usando los datos que devuelve `userService.js` :

para esto creamos un archivo en la carpeta `src` llamado `lista.js`

```js
import { getData } from './services/userService.js'
import './style.css'

const URL= 'https://jsonplaceholder.typicode.com/users';
getData(URL)
    .then(users => {
        let dataTable = users.map(item=>`
            <tr>
                <td>${item.id}*</td>
                <td>${item.name}</td>
                <td>${item.username}</td>
                <td>${item.email}</td>
            </tr>
        `).join('')
        
        let s=`
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>user name</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                ${dataTable}
            </tbody>
        </table>
        `
        document.querySelector('#list').innerHTML = s
    })
    .catch(error => {
        console.error('Error en testFetchUsers:', error);
    }); 

```

como ves esta función devueleve un texto html con la tabla de datos.

Explicación del código:

`users.map()` devuelve un arreglo con una lista de cadenas con renglones de tabla `<tr>...</tr>`

y la funcion `.join('')` toma una arreglo y lo convierte en una cadena donde cada elemento del arrglo lo sepra con lo que se indica en `''` en este caso vacio, tambien podria poner un espacio entre los apostrofes .

 

## Mostrando tabla con datos en **lista.html**

En su archivo `lista.html` necesitamos poner la tabla con los datos obtenidos desde `getData()`:

Modifique el archivo `lista.html` como se muestra a continuación

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Lista</h2>
    <div id="list"></div>
    <script type="module" src="/src/lista.js"></script>
</body>
</html>

```

## Ejercicios:

1. Modifique el código anterior de manera que en la lista se muestre ademas la ciudad de residencia y el nombre de la compañia del usuario.

2. Agregue una página `HTML` que muestre la lista de post del **placeholder**.

## Ligas




