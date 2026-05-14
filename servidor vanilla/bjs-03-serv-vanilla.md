# Actividad servidor vanilla

## Objetivo

crear un  servidor de páginas html

## Requerimientos

1. node
2. acceso a internet
3. editor vscode

## Actividades

1. crear un proyecto llamado 'vite-vanilla-1' usando vite.

solución a 1:

```bash
npm create vite@latest
# en select framework seleccione vanilla
# en select a variant seleccione JavaScript
# en instalar elija yes
# en su navegador, pruebe la aplicación en la ruta que le indica 
# (normalmente:http://localhost:5173/) pero revise el puerto que le da
```

2. Limpie el proyecto de manera que muestre solo el mensaje **hola mundo**

solución a 2:

* abra su carpeta del proyecto 'vite-vanilla-1' con VSCode
* en la carpeta /src/main.js, elimine el código, solo deje:
  
  ```js
  import './style.css'
  
  document.querySelector('#app').innerHTML = `
    <h1>hola mundo</h1>
  `
  ```

* en la carpeta **/public**, borre los archivos: **favicon.svg** y **icons.svg**
* en el archivo **/src/style.css** borre todo su contenido (lo puede hacer usando ctrl+a y presionando tecla de borrar)
* revise la salida de su aplicación en el navegador, debe ver **hola mundo**

3. crear menu que tenga los archivos:
   1. listar.html
   2. alta.html
   3. about.html
   y se pueda ir desde el archivo **index.html** a cualquiera de los otros archivos.

Ayuda: Podemos usar la etiqueta `<a href="liga">letrero</a>` para navegar de una página a otra por ejemplo si desde el archivo **a.html** queremos una liga para ir al archivo **b.html**, en el archivo **a.html** ponemos la liga:

a.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>a</title>
</head>
<body>
    <a href="b.html">ir a la página b</a>
</body>
</html>
```

b.html
```html
<html>
<head>
  <title>b</title>
</head>
<body>
    <h2>estas en el archivo b.html</h2>
    <a href="a.html">regresar a la página a</a>
</body>
</html>
```

Al ejecutar el archivo **a.html** y dar clic en el letrero **ir a la página b** en navegdor cargará la página **b** en lugar de la pagina **a**.

solución a 3:

* en la carpeta /src, creamos lor archivos:

**listar.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>listar</title>
</head>
<body>
    <h2>Listar</h2>
</body>
</html>
```

**alta.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>alta</title>
</head>
<body>
    <h2>Alta</h2>
</body>
</html>
```

**about.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>about</title>
</head>
<body>
    <h2>About</h2>
</body>
</html>
```

Agregamos el menú:en el archivo **index.html** agregue:

**index.html**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>menu</title>
  </head>
  <body>
    <nav>
      <ul>
        <a href="/">Home</a>
        <a href="./src/alta.html">Alta</a>
        <a href="./src/listar.html">Listar</a>
        <a href="./src/about.html">About</a>
      </ul>
    </nav>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>

```



4. Poner estilos básicos al menú

En el archivo **style.css** que recuerde debe estar vacio, agregue los siguientes estilos:

```css
a{
    text-decoration: none;
    color: white;
    background-color: black;
    padding: 10px;
}
a:hover{
    background-color: gray;
}
```

Explicación:


* a{ estilos } en un archivo css, indica que los estilos descritos entre las llaves serán aplicados solo a las etiquetas `<a>`
* text-decoration: none indica que lo elementos no deben llevar subraya.
* color: white indica que el color del texto es blanco.
* background-color: black indica que el color de fondo es negro
* padding: 10px indica que al rededor del texto hay una separacion de 10 pixels con respecto a la caja que lo contiene.
* a:hover{estilos} son los estilos que se aplican cuando el cursos para sobre el elemento.

5. cambie los colores del menú.

por ejemplo ponga un menu con texto blanco y fondo azul.

Ayuda: los colores se pueden expresar de varias formas:

* la primera es con el uso de palabras clave predefinidas como: **black**, **white**, etc. [ver la liga '1 colores' para ver otras palabras clave] ejemplo: 'black'

* la segunda es poner 3 numero hexadecimales (2 digitos hexa por cada uno) que indican la cantidad de color en rojo, verde y azul (RGV), por ejemplo negro es: '#000000', azul es: '#0000ff'

* Para mas informacion sobre colores vea [2 explicación de colores por Manz]



6. ¿como podria hacer que el menú se vea en todas las páginas?



## Ligas

[1 colores]([&lt;color&gt; - CSS | MDN](https://developer.mozilla.org/es/docs/Web/CSS/Reference/Values/color_value)

[2 explicación de colores por Manz]([Códigos de colores - CSS en español](https://lenguajecss.com/css/colores/codigos-color/)
