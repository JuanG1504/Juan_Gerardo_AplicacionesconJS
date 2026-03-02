
# Actividad curl
Índice
1. [Objetivo](#objetivo)
2. [Saberes a reforzar](#saberes-a-reforzar)
3. [Introducción](#introducción)
4. [Materiales](#materiales)
5. [Desarrollo](#desarrollo)

## Objetivo

Aprender el uso de un cliente url para realizar consultas y poder probar el buen funcionamiento de una api.

## Saberes a reforzar

Manejo de herraamientas de apoyo, necesarias para la evaluación de los diferentes módulos de software, accion que permitirá asegurarnos que el software cumplirá con sus requerimientos eliminando posibles errores.

## Introducción

Curl (del inglés Client for URL) es una herramienta de línea de comandos que permite transferir datos desde o hacia un servidor, usando uno de los protocolos soportados (HTTP, HTTPS, FTP, SFTP, SCP, IMAP, POP3, entre muchos otros). En el contexto de Bash, curl es un comando que se ejecuta directamente en la terminal para interactuar con servicios web y APIs.

### Formato general:
```sh
curl -X POST/GET/PATCH/DELETE [url]
-H "Content-Type: [content  type]"
-d '[request data]'
-v/-i
```
Las opciones y sus sinonimos:

-X sinónimo --request
-H sinónimo --header
-d sinónimo --data
La opción -v no muestra las cabeceras, la enviada por el cliente y la que devuelve el servidor.
La opción -i nos da la información resumida
La opción -I devuelve solo los encabezados de la petición

La opción -H indica el tipo de codificación de datos. 
Codificaciones en http
```text
Content-Type: application/json
Content-Type: application/x-www-form-urlencoded
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

### JSONPlaceholder

JSONPlaceholder es una API REST falsa (fake) y gratuita, diseñada específicamente para ser utilizada como un "banco de pruebas" . Piensa en ella como un lugar seguro y sin complicaciones donde puedes practicar y experimentar con peticiones HTTP (como las que hicimos con curl), probar librerías de frontend, o construir prototipos rápidos sin necesidad de configurar un backend real.

Fue creada por Typicode y es tan popular que actualmente sirve alrededor de ~3 mil millones de peticiones cada mes . Es, sin duda, el estándar de facto para este tipo de necesidades.

### Características Principales
Lo que hace a JSONPlaceholder tan útil son sus características, pensadas para que te centres en lo que importa:

Sin registro y cero configuración: Puedes empezar a usarla inmediatamente, no necesitas claves API ni cuentas.

Soporta todos los métodos HTTP: Puedes hacer peticiones GET, POST, PUT, PATCH y DELETE, lo que te permite practicar operaciones CRUD completas .

Recursos con relaciones: Los datos no son aleatorios, tienen relaciones lógicas. Por ejemplo, los "posts" pertenecen a un "usuario" y tienen "comentarios" . Esto lo hace mucho más realista para practicar.

Habilitado para CORS: Puedes usarlo directamente desde aplicaciones web en dominios diferentes sin problemas de seguridad .

### Recursos Disponibles (Los Datos de Prueba)
La API ofrece 6 tipos de recursos principales con los que puedes interactuar. Todos contienen datos de ejemplo que imitan contenido real :

Recurso	Cantidad	Descripción
/posts	100	Publicaciones de blog (similar a un foro o red social).
/comments	500	Comentarios asociados a las publicaciones.
/albums	100	Álbumes de fotos.
/photos	5000	Fotos individuales que pertenecen a un álbum.
/todos	200	Listas de tareas (como un gestor de pendientes).
/users	10	Perfiles de usuario.

## Materiales
* lap top
* software
* curl
* consola bash
* consola cmd

## Desarrollo

## Actividad 1: 

Realice una consulta al fata fake usando Get 
a. en su navegador
b. usando curl

Solución a: En una ventana de su navegador ponga esto en la barra de direcciones:
'https://jsonplaceholder.typicode.com/posts'

Solución b: En una ventana bash pruebe las sentencias:
```sh
curl -X GET https://jsonplaceholder.typicode.com/posts
#por default si no se pone -X GET se asume que es un get por tato lo anterio es igual que:
curl https://jsonplaceholder.typicode.com/posts
```

## Actividad 2: 

Insertar un post en el data fake usando crl

Solución: en su consola bash ecriba:
```sh
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mi nuevo post",
    "body": "Este es el contenido del post que estoy insertando.",
    "userId": 1
  }'
```

La barra invertida (\\) es un carácter de escape en la terminal bash (y otros shells). Cuando se coloca al final de una línea (justo antes de presionar Enter), le indica al shell que el comando continúa en la siguiente línea. Es decir, permite partir un comando muy largo en varias líneas para hacerlo más legible, sin que el shell interprete cada línea como un comando independiente.

En windows usando cmd las lineas se dividen usondo ^, y escapar comillas
```sh
curl -X POST https://jsonplaceholder.typicode.com/posts ^
-H "Content-Type: Application/json" ^
-d "{\"title\":\"23\",\"body\":\"cuerpo de...\",\"userId\":32}"
```
## Actividad 3: Post enviando codificación json
```sh
curl -X POST https://jsonplaceholder.typicode.com/posts -H "Content-Type: Application/json" -d '{"title":"23","body":"cuerop de...","userId":32}'
```
