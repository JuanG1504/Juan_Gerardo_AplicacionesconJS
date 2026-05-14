# El modelo de caja

Todo elemento en html tiene una caja alrededor, en general, hay dos tipos de cajas: **cajas en bloque** y **cajas en línea**. Estas características se refieren al modo como se comporta la caja en términos de flujo de página y en relación con otras cajas de la página:

Si una caja se define como un **bloque**, se comportará de las maneras siguientes:

- La caja fuerza un salto de línea al llegar al final de la línea.
- La caja se extenderá en la dirección de la línea para llenar todo el espacio disponible que 

haya en su contenedor. En la mayoría de los casos, esto significa que la caja será tan ancha como su contenedor, y llenará el 100% del espacio disponible.

- Se respetan las propiedades width y height.
- El relleno, el margen y el borde mantienen a los otros elementos alejados de la caja.

A menos que decidamos cambiar el tipo de visualización a en **línea**, elementos como los encabezados (por ejemplo, `<h1>`) y todos los elementos `<p>` usan por defecto `block` como tipo de visualización externa.

Si una caja tiene una visualización externa de tipo `inline`, entonces:

- La caja no fuerza ningún salto de línea al llegar al final de la línea.
- Las propiedades width y height no se aplican.
- Se aplican relleno, margen y bordes verticales, pero no mantienen alejadas otras cajas en línea.
- Se aplican relleno, margen y bordes horizontales, y mantienen alejadas otras cajas en línea.

El elemento `<a>`, que se utiliza para los enlaces, y los elementos `<span>`, `<em>` y `<strong>` son ejemplos de elementos que se muestran en línea por defecto.

El tipo de caja que se aplica a un elemento está definido por los valores de propiedad **display** que puede ser`block` o `inline`, y se relaciona con el valor **externo** (*outer*) de visualización (`display`).

Elementos como `<span>, <a>, <del>`, se acomodan en  forma de texto, es decir en una línea uno al lado del otro.

Elementos como `<div>, <h1>..<h6>, <blockquote>, <p>`, se muestra en bloque, es decir se muestran en líneas independientes.

Visualización **interna** y **externa**: Como se mencionó anteriormente, las cajas en CSS tienen un tipo de visualización *externa*, que define si se trata de una caja en bloque o en línea.

Sin embargo, las cajas también tienen un tipo de visualización *interna*, que determina cómo se disponen los elementos dentro de esa caja. De forma predeterminada, los elementos dentro de una caja se presentan en **Normal_Flow**, lo que significa que se comportan como otros elementos de tipo en bloque o en línea (como se explicó anteriormente).

Sin embargo, podemos cambiar el tipo de visualización interna utilizando valores de `display`, como `flex`. Si en un elemento establecemos `display: flex;`, el tipo de visualización externa es de tipo bloque (`block`), pero el tipo de visualización interna cambia a flexible (`flex`). Cualquier elemento que sea hijo directo de esta caja pasará a comportarse como un elemento de tipo flex, de acuerdo con las reglas que se establecen en la especificación de **Flexbox**.

## Partes de una caja

En una caja de tipo bloque en CSS tenemos los elementos siguientes:

- El **contenido de la caja** (o *content box*): El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como width y height.
- El **relleno de la caja** (o *padding box*): El relleno es espacio en blanco alrededor del contenido; es posible controlar su tamaño usando la propiedad padding y otras propiedades relacionadas.
- El **borde de la caja** (o *border box*): El borde de la caja envuelve el contenido y el de relleno. Es posible controlar su tamaño y estilo utilizando la propiedad border y otras propiedades relacionadas.
- El **margen de la caja** (o *margin box*): El margen es la capa más externa. Envuelve el contenido, el relleno y el borde como espacio en blanco entre la caja y otros elementos. Es posible controlar su tamaño usando la propiedad margin y otras propiedades relacionadas.



Diagrama del modelo de caja:

![Diagrama del modelo de cajas](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model/box-model.png)



## Diagrama del modelo de cajas

En el modelo de cajas estándar, cuando estableces los atributos `width` y `height` para una caja, defines el ancho y el alto del *contenido de la caja*. Cualquier área de relleno y borde se añade a ese ancho y alto para obtener el tamaño total que ocupa la caja. Esto se muestra en la imagen que encontrarás a continuación.

Si suponemos que la caja tiene el CSS siguiente, que establece los valores para las propiedades `width`, `height`, `margin`, `border`, y `padding`:

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

El espacio que ocupa nuestra caja usando el modelo de cajas estándar será en realidad de 410 px (350 + 25 + 25 + 5 + 5); y su altura, de 210 px (150 + 25 + 25 + 5 + 5), porque el área de relleno y el borde se añaden al ancho que se utiliza para el contenido de la caja.

### El modelo de cajas CSS alternativo

Podrías pensar que es  incómodo tener que sumar el borde y el área de relleno para obtener el tamaño real de la caja, ¡y tienes razón! Por este motivo, CSS introdujo un modelo de caja alternativo algún tiempo después del modelo de cajas estándar. Con este modelo, cualquier ancho es el ancho de la caja visible en la página, por lo tanto, el ancho del área de contenido es ese ancho menos el ancho para el relleno y el borde. El mismo CSS que hemos usado antes daría entonces el resultado siguiente (ancho = 350 px, altura = 150 px).

Por defecto, los navegadores usan el modelo de cajas estándar. Si deseas activar el modelo de cajas alternativo para un elemento, hazlo configurando `box-sizing: border-box`. Con ello, le dices al navegador que tome como el borde de la caja el área definida por cualquier tamaño que establezcas.



```css
.box {
  box-sizing: border-box;
} 
```

Si quieres que todos tus elementos usen el modelo de cajas alternativo (opción común entre los desarrolladores) debes establecer la propiedad `box-sizing` en el elemento `<html>`. Luego debes configurar todos los demás elementos para que hereden ese valor, como se ve en el fragmento de código siguiente.

```css
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

### Ejemplos

Si aplicamos el estilo:

***display: inline;***
muestra los elementos en linea:

***display: block;***
muestra los elementos en bloque

***display: inline-block;***
muestra los elementos en linea respetando los margenes.

Ejercicio:

En su [editor en líena](https://codi.link/) pruebe lo siguiente:

HTML:

```html
<div class="caja">div uno</div>
<div class="caja">div dos</div>
<span class="caja">span uno</span>
<span class="caja">span dos</span>
<span class="caja">span tres</span>
```

CSS:

```css
.caja {
background-color:cyan;
border: 1px solid black;
width: 100px;
height: 100px;
padding: 5px;
margin: 50px 10px;
/* display: inline; */
/* display: block; */
display: inline-block;
}
```

Pruebe comentando y descomentando de manera que tenga activa solo uno de los 3 atributos siguientes:

/* display: inline; */
*/* display: block; */
display: inline-block

Vea la diferencia entre uar uno de los 3 atributos de despiegue.

## El uso de display: inline-block

Hay un valor especial de `display` que proporciona un punto medio entre `inline` y `block`. Esto es útil para situaciones en las que no deseas que un elemento fuerce un salto de línea, pero sí deseas que se respeten las propiedades `width` y `height` para evitar superposiciones como la que se ve arriba.

Un elemento con `display: inline-block` conforma un subconjunto de los elementos en bloque que ya conocemos:

- Se respetan las propiedades de ancho y alto.
- El relleno, el margen y el borde mantienen los otros elementos alejados de la caja.

Sin embargo, no se fuerza un salto de línea, y solo se hace más grande que su contenido si añades las propiedades `width` y `height` explícitamente.

## Flex

**Flex** (*también llamado flexbox*) es un sistema de **elementos flexibles** que llega con la idea de olvidar mecanismos anticuados y acostumbrarnos a una mecánica más potente, limpia y personalizable, en la que los elementos HTML se adaptan y colocan automáticamente y es mucho más fácil personalizar los diseños de una página web.

Ve un excelente resumen de **flex** en la página de manz [resumen de flexbox]([Guía de Introducción a Flex - CSS en español](https://lenguajecss.com/css/flex/que-es-flex/)

## Resumen de Manz

Elementos en flex

* **Contenedor**: Es el elemento padre que tendrá en su interior cada uno de los ítems flexibles. Observa que al contrario que muchas otras estructuras CSS, por norma general, en Flex establecemos las propiedades al elemento padre.
  * Eje principal: Los contenedores flexibles tendrán una orientación principal específica. Por defecto, el eje principal del contenedor flex es en horizontal (en fila).
  * Eje secundario: De la misma forma, los contenedores flexibles tendrán una orientación secundaria, perpendicular a la principal. Si la principal es en horizontal, la secundaria será en vertical (y viceversa).
* **ítem**: Cada uno de los hijos que tendrá el contenedor en su interior.

Suponga el siguiente código:

```html
<div class="container"> <!-- será el contenedor Flex -->
  <div class="item item-1">1</div> <!-- serán los items -->
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
</div>
```

Para activar el modo flex, utilizaremos sobre el elemento contenedor la propiedad display, y especificaremos el valor flex o inline-flex (dependiendo de como queramos que se comporte el contenedor):


|Valor display	|Descripción|
|---------------|-----------|
|inline-flex	  |Contenedor en línea, similar a inline-block (ocupa solo el contenido).|
|flex	|Contenedor en bloque, similar a block (ocupa todo el ancho del padre).|

Aplicando flex al contenedor:

```css
.container{
  display:flex;
}
```

Para probar mejor el funcionamiento de flex, haga,os que la caja de ls items sea visible y un poco mas grande que su contenido. En el sirio *codilink* pruebe el siguiente código html y css.

```html
<div class="container"> <!-- será el contenedor Flex -->
  <div class="item item-1">1</div> <!-- serán los items -->
  <div class="item item-2">2</div>
  <div class="item item-3">3</div>
</div>
```

```css
.container {
  display: flex;
 
  background: darkgrey;
}

.item {
  background: indigo;
  color:white;
  border:3px solid;
  padding: 15px 50px;
}
```
Por defecto la dirección de flex es row.

## Direccion de los ejes


|Propiedad	|Valor	|Significado|
|-----------|-------|-----------|
|flex-direction|	row \| row-reverse \| column \|column-reverse|	Cambia la orientación del eje principal.|

En codilink usando los códigos html y css anteriores haga: en el código css pruebe alternando cada una de los estilos css siguientes agregandolo a .container{} 

* flex-direction: column-reverse;
* flex-direction: row-reverse;
* flex-direction: column;
* flex-direction: row; /*valor x defecto*/

>[Nota] solo puede poner una sentencia flex-direction para un contenedor.

## Centrar con flex

¿Como alinear horizontal o verticalmente con flex?, para esto veremos las siguientes propiedades:

* Algunas propiedades actuan en el eje principal 1️⃣
* Otras propiedades actuan en el eje secundario 2️⃣

|Propiedad	|Valor	|Actúa en eje|
|-----------|-------|------------|
|justify-content	|start \| end \| center \| space-between \| space-around \| space-evenly	|1️⃣|
|align-items	|start \| end \| center \| stretch \| baseline	|2️⃣|
|align-content	|start \| end \| center \| space-between \| space-around \| space-evenly \| stretch	|2️⃣|

De esta pequeña lista, hay que centrarse en la primera y la segunda propiedad, ya que son las principales. La última propiedad, align-content solo tiene efecto si tenemos un contenedor flex multilinea.

>[Nota] Es posible que a veces hayas encontrado valores como flex-start o flex-end, en lugar de start o end. Antiguamente, las palabras claves de estas propiedades tenían el prefijo flex-, pero aunque funcionen, se recomienda usar la versión sin el prefijo.

## Alineación de elementos

Antes de comenzar con la alineación de elementos, un pequeño resumen:

* justify-content: Se usa para alinear ítems del eje principal (por defecto, el horizontal).
* align-items: Usada para alinear los ítems del eje secundario (por defecto, el vertical).
* align-content: Se usa para alinear el contenido del eje secundario cuando usamos flex-wrap.


### justifi content

La primera propiedad, justify-content, sirve para colocar los ítems de un contenedor mediante una disposición concreta a lo largo del eje principal (por defecto, en horizontal). Los valores que puede tomar esta propiedad son los siguientes:

|Valor	|Descripción|
|-------|-----------|
|start	|Agrupa los ítems al inicio del eje principal.|
|end	|Agrupa los ítems al final del eje principal.|
|center	|Agrupa los ítems al centro del eje principal.|
|space-between	|Distribuye los ítems dejando espacio entre ellos.|
|space-around	|Distribuye los ítems dejando espacio alrededor de ellos.|
|space-evenly	|Distribuye como space-around, pero con un espacio exactamente igual alrededor de ellos.|


### Atajo alineaciones

Existe una propiedad de atajo con la que se pueden establecer los valores de las propiedades align-content y justify-content de una sola vez. Dicha propiedad es **place-content** y funciona de la siguiente forma:

```css
.container {
  display: flex;

  /* 2 parámetros */
  place-content: start end;
  /* Equivalente a... */
  align-content: start;
  justify-content: end;

  /* 1 parámetro */
  place-content: start;
  /* Equivalente a... */
  align-content: start;
  justify-content: start;
}
```

### Propiedad order

Por último, y quizás una de las propiedades más interesantes, es order. Se trata de una propiedad mediante la cual podemos modificar y establecer un orden de los elementos mediante números. Por defecto, todos los elementos hijos de un contenedor flex tienen establecido un order por defecto al valor 0, aunque no se especifique de forma explícita. Si indicamos una propiedad order con un valor numérico diferente, irá recolocando los ítems según dicho número, colocando antes los elementos con un número order más pequeño (incluso valores negativos) y después los elementos con números más altos.

```css
  .item-3{
    order:0;
  }
```

Ejercicios:

1. Usando flex y los estilos necesarios haga una disposición de una página html que tenga un menú superior, debajo 2 areas contiguas y debejo de estas áreas un área footer.

|menu|
|----|
|area1 \| area 2|
|footer|


## Centrar con flex

* [Introducción a flex con Manz](https://lenguajecss.com/css/flex/que-es-flex/)

* [Alinear con flex con Manz](https://lenguajecss.com/css/flex/alinear-centrar-css/)

* [felx en Mozilla](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/flex)