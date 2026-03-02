# Actividad http
Índice
1. [Objetivo](#objetivo)
2. [Saberes a reforzar](#saberes-a-reforzar)
3. [Introducción](#introducción)
4. [Materiales](#materiales)
5. [Desarrollo](#desarrollo)

## Objetivo

Describir lo elementos principales el protocolo http

## Saberes a reforzar

Esta práctica refueraza el manejo del protocolo http necesario para la comunicación entre el front end y en back end en sus aplicaciones.

## Introducción

El Protocolo HTTP (Hypertext Transfer Protocol) es la base de la comunicación de datos en la web. Es un protocolo de capa de aplicación que sigue un modelo cliente-servidor y está diseñado para ser simple, extensible y sin estado.

Aquí tienes un resumen conciso de sus aspectos fundamentales:

### funcionamiento

Petición (Request): El cliente (generalmente un navegador o una herramienta como curl) envía un mensaje al servidor. Este mensaje incluye:

Método: La acción que desea realizar (GET, POST, etc.).
URL: La dirección del recurso.
Cabeceras (Headers): Información adicional (tipo de contenido, autenticación, etc.).
Cuerpo (Body) (opcional): Datos enviados al servidor (ej. un formulario o JSON).
Respuesta (Response): El servidor procesa la petición y devuelve un mensaje al cliente que contiene:
Código de estado (Status Code): Un número de tres dígitos que indica el resultado (ej. 200 OK, 404 Not Found).
Cabeceras: Metadatos de la respuesta.
Cuerpo: El contenido solicitado (HTML, JSON, imagen, etc.).

### Métodos HTTP más comunes

|Método	|Descripción |
|-------|------------|
|GET	|Solicita un recurso (solo lectura, no debe modificar datos).|
|POST	|Envía datos al servidor para crear un nuevo recurso (ej. formulario).|
|PUT	|Actualiza un recurso existente (o lo crea si no existe).|
|PATCH	|Aplica modificaciones parciales a un recurso.|
|DELETE	|Elimina un recurso específico.|


### Códigos de estado más importantes

|Código	|Categoría	|Significado (ejemplos)|
|-------|------------|----------------------|
|1xx	|Informativo	|La solicitud fue recibida, continuando el proceso.|
|2xx	|Éxito	|200 OK (todo bien), 201 Created (recurso creado).|
|3xx	|Redirección	|301 Moved Permanently (el recurso cambió de URL).|
|4xx	|Error del cliente	|404 Not Found (recurso no existe), 400 Bad Request.|
|5xx	|Error del servidor	|500 Internal Server Error (fallo en el servidor).|

### Características principales

* Sin estado (Stateless): Cada petición es independiente; el servidor no recuerda interacciones anteriores. Para mantener sesiones se usan cookies o tokens.
* Legible por humanos: Los mensajes son textuales, lo que facilita la depuración.
* Extensible: Se pueden añadir nuevas cabeceras, métodos o códigos de estado.
* Seguro con HTTPS: La versión segura (HTTP sobre TLS) cifra la comunicación, protegiendo la confidencialidad e integridad de los datos.

### Versiones principales

* HTTP/1.1 (1997): La versión más longeva y extendida. Introduce conexiones persistentes.
* HTTP/2 (2015): Mejora el rendimiento con multiplexación, compresión de cabeceras y server push.
* HTTP/3 (2022): Basado en QUIC (sobre UDP en lugar de TCP), reduce la latencia y mejora la conexión en redes inestables.

## Materiales
* lap top
* software para representar mark down

## Actividades

1. investigue cuales son las ventajas/desventajas de que http sea un protocolo sin estado
2. investigue 5 códigos de estado para cada categória y muestre su significado
3. investigue las diferencias entre http y https

Escriba todo en un documento mark down y entregue al profesor.

## Solución
