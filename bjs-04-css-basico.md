# Actividad css

Para mejorar la vista de nuestras aplicaciones **html**, usamos hojas de estilo *css (Cascading Style Sheets, en español Hojas de Estilo en Cascada)**. **CSS** es el lenguaje de estilos utilizado para describir la presentación de documentos HTML y XML.

# Cascada, Herencia y Especificidad

#### La Cascada en CSS

La cascada es un concepto fundamental en CSS que determina cómo se aplican los estilos cuando múltiples reglas afectan a un mismo elemento. El término "cascada" se refiere al proceso por el cual el navegador decide qué estilos aplicar cuando hay conflictos entre diferentes reglas CSS.

#### Cómo funciona la cascada

 La cascada en las hojas de estilo significa que el orden de las reglas importa en CSS: cuando dos reglas tienen la misma especificidad, se aplica la que aparece en último lugar en el CSS.

El navegador sigue este orden de prioridad para resolver conflictos:

Importancia: Estilos con ***!important*** tienen mayor peso  
Especificidad: Selectores más específicos tienen mayor peso  
Orden de aparición: La última regla declarada gana si todo lo demás es igual

Factores que afectan la cascada

- Orden de las hojas de estilo:
- Las reglas que aparecen más tarde anulan las anteriores
- Especificidad del selector

#### Valores del peso de las reglas:

- Estilos en línea (1000)
- IDs (100)
- Clases, atributos y pseudoclases (10)
- Elementos y pseudoelementos (1)
- !important: Anula todas las reglas normales (se debe usar con precaución)

La especificidad es el modo que tiene el navegador de decidir qué regla se aplica si diversas reglas tienen selectores diferentes pero podrían aplicarse a un mismo elemento. Básicamente, la especificidad mide cuán específica es la selección de un selector:

- Un selector de elemento es menos específico (selecciona todos los elementos de aquel tipo que aparecen en la página) por lo que presenta una puntuación más baja en especificidad.
- Un selector de clase es más específico (selecciona solo los elementos de una página que tienen un valor de atributo class dado), y por tanto recibe una puntuación mayor.
- Un selector con ID es más específico que el de clase

#### Herencia

La herencia también debe entenderse en este contexto: algunos valores de las propiedades CSS que se han establecido para los elementos padre los heredan los elementos hijo, pero otros no.

Por ejemplo, si para un elemento se establece el color (color) y el tipo de letra (font-family), cada elemento que se encuentre dentro de él también se mostrará de ese color y con ese tipo de letra, a menos que les se haya aplicado un color y un tipo de letra diferentes directamente.


## Sintaxis CSS

Un regla o conjunto de reglas  CSS consiste en un selector y un bloque de declaraciones:

![CSS selector](http://www.w3schools.com/css/selector.gif)

La regla anterior indica que los elementos HTML del tipo h1 tienen su propiedad color en azul y su tamaño de fuente en 12.

El selector indica el elemento HTML al que se desea dar estilo.

El bloque de declaraciones contiene una o mas declaraciones de estilo separadas por punto y coma.

## Almacenamiento de reglas

Las reglas pueden almacenaarse en el mismo archivo en el head

```html
<style>
    /*lista de reglas*/
</style>
```

O en  un archivo independiente con extensión por ejemplo 'style.css' y se cargan así dentro del head del html:

```html
<link rel="stylesheet" href="style.css">
```

## Selectores

### Elemento selector.

Este selecciona los elementos basados en su nombre de elemento.

Ejercicio:

En la página de [codepen](https://codepen.io/florenblas/pen/YZZvEQ) pruebe lo siguiente:

```css
p { /*se aplica a las etiquetas p*/
    text-align: center;
    color: red;
}
```
```html
<p>hola mundo</p>
```

Cambie el color por lo siguiente:

1. color:#0000ff;
2. color: rgb(0,169,210);


Como ve hay 3 formas de indicar color, se explica mas adelante.

### Aplicar estilos con Selector id

Este método usa el atributo id de los elementos HTML para aplicar la regla, el id de un elemento HTML debe ser único dentro de la página. 

En **codepen** pruebe la siguiente regla, que se aplica al elemento con id="para1":

```css
#para1 {
    text-align: center;
    color: red;
}
```
```html
<p id="para1"> hola mundo </p>
<p> a este no se aplica </p>
```

### Aplicar estilo por Selector de clase

Este selector selecciona elementos con un específico atributo de clase, varios elementos pueden tener la misma clase.

En **codepen** pruebe el siguiente selector, solo los elementos <p> con clase "center" serán centrados:

```css
.center {
    text-align: center;
    color: red;
}
```

```html
<h1 class="center">el estilo afecta a este</h1>
<p class="center">y tambien a este.</p>
<p>hola mundo</p>
```

### Selectores avanzados

```css
*{
    /*aplica color de texto rojo a todo el documento*/
    color:red;
}

div p{
    /*Selecciona unicamente los parrafos 
    que se encuentren dentro de un div*/
    color:red;
}

div li a{
   /*Selecciona todos los enlaces dentro de etiquetas li 
   que se encuentren dentro de algun div.*/
   color:red;
}


div>a{
    /*selecciona todos los hijos de a*/
}

div+p{
    /*elecciona solo elparrafo que esta
    exactamente despues de un div*/
}

div~p{
    /*aplica el estilo al primer parrafo despues de un <div> 
    aunque no este exactamente despues*/
}
```

### Colores

Los colores en CSS pueden ser especificados por:

- un nombre de color válido como "red", "blue", "white"
- un valor rgb como "rgb(255,0,0)" espera 3 valores de 0 a 255 que indican la cantidad de rojo,verde y azul que deseamos
- un valor hexadecimal como "#ff0000" espera 3 valores hexadecimales de 00 a ff que indican rojo/verde/azul

ejemplos:

```css
color:red
color:#fa2300
color:rgb(255,0,0)
```

### Fondos

```css
background-color:red;
background-image: url('ruta/de/la/imagen.jpg');
```

### Bordes

Pruebe los bordes en **codepen**. Tambien puede probar en [probar css en línea](https://codi.link/)

Pruebe lo siguiente:

En CSS ponga:

```css
p.one {
  border: 5px solid;
}

p.two {
  border: medium solid;
}

p.three {
  border: 2px dotted;
}

p.four {
  border: thick dotted;
}

p.five {
  border: 15px double;
}

p.six {
  border: thick double;
}

```

En HTML ponga:

```html
<p class="one">uno.</p>
<p class="two">dos </p>
<p class="three">tres</p>
<p class="four">cuatro</p>
<p class="five">cinco</p>
<p class="six">seis</p>

```

### Margenes

Usados para separar elementos

Pruebe lo siguiente:

En html:

```html
<p>la propiedad margin permite poner 1 a 4 margenes para el elemento
el orden en que aparecen es: top, rigth,bottom y left
</p>

<h1>titulo 1</h1>
<h2>titulo 2</h2>
```

En css:

```css
h1 {
  margin: 50px 50px 50px 50px;
}

h2 {
  margin: 0 0 0 90px;
}
```

Pruebe los conceptos anteriores.

## ligas

[probar css en linea](https://codi.link/%7C%7C)  
[[calculador de especificidad] ]([https://specificity.keegan.st/](https://specificity.keegan.st/))
[https://lenguajecss.com/]()  
[web.dev aprender css](https://web.dev/learn/css?hl=es)  
[css mozilla](https://developer.mozilla.org/es/docs/Web/CSS)  
[z-index](https://web.dev/learn/css/z-index?hl=es)  
[retors css](https://www.frontendmentor.io/)
