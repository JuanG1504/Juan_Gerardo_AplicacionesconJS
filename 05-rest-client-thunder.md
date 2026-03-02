# Rest client (creador de la extensión es Huachao Mao)

## Objetivo
crear consultas http desde el cliente Rest

## Instroducción
Es una extensión para VS Code, creada por Huachao Mao , que te permite enviar solicitudes HTTP y ver las respuestas directamente en el editor . Básicamente, transforma a VS Code en un cliente API como Postman o Insomnia, pero con la ventaja de estar integrado en tu entorno de desarrollo principal

### Instalarlo

Agregue a sus complementos  de VsCode, el complemento {Rest Client} del autor: Huachao Mao

1. Abre Visual Studio Code.
2. Ve a la vista de Extensiones.
3. Busca "REST Client" de Huachao Mao.
4. Haz clic en Instalar. 

### Ejemplo

Crea un archivo con extension .http
```http
# archivo: consultas.http
GET https://jsonplaceholder.typicode.com/posts HTTP/1.1
  
###
  
POST https://jsonplaceholder.typicode.com/posts HTTP/1.1
content-type: application/json
  
{
    "id":"23",
    "nombre":"ana perez",
    "correo":"ana@mail",
    "edad":32
}
```
Al pasar el ratón por la sentencia get o post le aparece una opción para lanzar la consulta.

## Materiales

1. lap top
2. VSCode
3. Acceso a internet

## Desarrollo

Realiza 3 consultas e inserta 2 regisstros el data fake: "https://jsonplaceholder.typicode.com"

## Solución

En su carpeta de trabajo cree el archivo: "consultas.http" con el siguiente contenido:

```sh
GET https://jsonplaceholder.typicode.com/posts HTTP/1.1

###

POST https://jsonplaceholder.typicode.com/posts HTTP/1.1
content-type: application/json

{
    "id":"23",
    "nombre":"ana perez",
    "correo":"ana@mail",
    "edad":32
}
```

# Thunder Lightweight Rest API Client Extension for VS Code

## Objetivo
crear consultas http desde el cliente Thunder

## Introducción

[sitio](https://docs.thunderclient.com/)
[video](https://www.youtube.com/watch?v=NKZ0ahNbmak)

Instalar complemento thunder en VSCode

## Materiales

1. lap top
2. VSCode
3. Acceso a internet

## Desarrollo

Realiza 3 consultas e inserta 2 regisstros el data fake: "https://jsonplaceholder.typicode.com"

