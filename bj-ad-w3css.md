# w3css

W3.CSS es un framework CSS moderno, ligero y fácil de usar. Fue desarrollado por el equipo de W3Schools. Su objetivo es proporcionar una alternativa más simple a otros frameworks como Bootstrap, manteniendo la capacidad de crear sitios web responsivos y amigables para dispositivos móvile

## Con CDN

Para usar **w3css** puede usar un CDN. Es la forma más rápida y no requiere descargar nada. Solo debe incluir una línea de código en la sección `<head>` de tu archivo HTML:

Puede encontrar la cadena CDN para w3css en: [w3css](https://www.w3schools.com/w3css/defaulT.asp), tambien se muestra abajo

Cadena CDN. En el head de su html agregue:

```html
<link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
```

W3.CSS te permite construir interfaces rápidamente utilizando clases predefinidas. 

Aqui tienes un [tutorial sde w3css](https://www.w3schools.com/w3css/defaulT.asp) 

A continuación un ejemplo de código con algunos de los componentes más útiles:

Código de Ejemplo Básico
Este ejemplo muestra cómo crear una estructura básica de página con un encabezado, un contenedor y un pie de página, todo utilizando clases de W3.CSS

### Ejemplos

1. Mostrar imágen en contenedor
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
</head>
<body>
    <div class="w3-container w3-teal">
    <h1>Mi Encabezado</h1>
    </div>

    <img src="https://picsum.photos/id/237/200/300" alt="Car">

    <div class="w3-container w3-teal">
    <p>Un automóvil es un vehículo de motor autopropulsado con ruedas utilizado para el transporte.</p>
    </div>

    <div class="w3-container w3-teal">
    <p>Mi Pie de Página</p>
    </div>
</body>
</html>
```

deberá ver la imágen de un perro con dos franjas verdes arriba y abajo para el encabezado y el pie de página.

2. Mostrar menú

```html
<!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>
    <div class="w3-bar w3-black">
    <a href="#" class="w3-bar-item w3-button">Home</a>
    <a href="#" class="w3-bar-item w3-button">Link 1</a>
    <a href="#" class="w3-bar-item w3-button">Link 2</a>
    <a href="#" class="w3-bar-item w3-button">Link 3</a>
    </div>
    <div class="w3-container">
        <p>menu de navegación</p>
    </div>
</body>
</html>
```

3. Dividir el área de la ventana en renglones y columnas
```html
<!DOCTYPE html>
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<body>
  
<div class="w3-row">
    <div class="w3-col l3 m6 s4 w3-green w3-center">
    |<p>l3 m6 s4</p>
    </div>
    <div class="w3-col l7 m3 s4 w3-dark-grey w3-center">
        <p>l7 m3 s4</p>
    </div>
    <div class="w3-col l2 m3 s4 w3-red w3-center">
        <p>l2 m3 s4</p>
    </div>
</div>
  
</body>
</html>

```

4. formulario con css

El siguiente formulario usa la biblioteca w3css, tambien usa iconos cuyo uso puede aprender en [font awesome](https://www.w3schools.com/icons/fontawesome_icons_intro.asp), para usar íconos, se carga la biblioteca **font awesome** y los iconos se ponen:

1. asi:   `<i class="w3-xxlarge fa fa-user"></i>`
2. o asi: `<span class="w3-xxlarge fa fa-user"></span>`

```html
<!DOCTYPE html>
<html>
    <head>
        <title>W3.CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    </head>
<body>

  <form action="#" class="w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin">
    <h2 class="w3-center">Contact Us</h2>
        
    <div class="w3-row w3-section">
      <div class="w3-col" style="width:50px">
        <i class="w3-xxlarge fa fa-user"></i>
      </div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="first" type="text" placeholder="First Name">
      </div>
    </div>

    <div class="w3-row w3-section">
      <div class="w3-col" style="width:50px">
        <i class="w3-xxlarge fa fa-user"></i>
      </div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="last" type="text" placeholder="Last Name">
      </div>
    </div>

    <div class="w3-row w3-section">
      <div class="w3-col" style="width:50px">
        <i class="w3-xxlarge fa fa-envelope-o"></i>
      </div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="email" type="text" placeholder="Email">
      </div>
    </div>

    <div class="w3-row w3-section">
      <div class="w3-col" style="width:50px">
        <i class="w3-xxlarge fa fa-phone"></i>
      </div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="phone" type="text" placeholder="Phone">
      </div>
    </div>

    <div class="w3-row w3-section">
      <div class="w3-col" style="width:50px">
        <i class="w3-xxlarge fa fa-pencil"></i>
      </div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="message" type="text" placeholder="Message">
      </div>
    </div>

    <button class="w3-button w3-block w3-section w3-blue w3-ripple w3-padding">Send</button>

  </form>

</body>
</html> 
```
## Con node

Más  adelante usaremos w3css con node.

```bash
npm install w3-css

```

Impórtelo en su aplicación (`src/index.js` or `src/App.js`)

```jsx
import 'w3-css/w3.css';

function MyCard() {
  return (
    <div className="w3-card-4 w3-margin w3-white">
      <div className="w3-container w3-green">
        <h2>Hello from W3.CSS!</h2>
      </div>
      <div className="w3-container">
        <p>This card is styled using W3.CSS classes in a React component.</p>
      </div>
    </div>
  );
}
```


# Ligas

[el lorem ipsum de las fotos](https://picsum.photos/)