# VSCODE
Índice
1. [Objetivo](#objetivo)
2. [Saberes a reforzar](#saberes-a-reforzar)
3. [Introducción](#introducción)
4. [Materiales](#materiales)
5. [Desarrollo](#desarrollo)

## Objetivo

Aprender a usar el editor VSCode para escribir sus proyectos de sofware.

## Saberes a reforzar

Aprender las herramientas necesarias para el desarrollo de software.

## Introducción

Visual Studio Code (a menudo abreviado como VS Code) es un editor de código fuente gratuito, de código abierto y multiplataforma desarrollado por Microsoft. Fue lanzado en 2015 y, desde entonces, ha evolucionado constantemente hasta convertirse en el entorno de desarrollo preferido por la mayoría. Según la encuesta para desarrolladores de Stack Overflow de 2023, alrededor del 73% de los desarrolladores lo utilizan.

### Resumen de atajos de teclado

#### Atajos

| Atajos                        | acción                                                            |
| ----------------------------- | ----------------------------------------------------------------- |
| ctrl+ñ                        | abre terminal                                                     |
| ctrl+b                        | oculta/muestra ventana de archivos                                |
| alt+flecha abajo/arriba       | - mueve linea                                                     |
| shift+alt+flecha abajo/arriba | - duplica linea                                                   |
| ctrl+'                        | - outdent                                                         |
| ctrl+L                        | - seleccionar toda la linea                                       |
| ctrl + f/h                    | encuntra reemplaza                                                |
| f12                           | ir a definición                                                   |
| ctrl +/-                      | zoom                                                              |
| ctrl f                        | buscar                                                            |
| ctrl                          | reemplazar                                                        |
| ctrl + T                      | encuentra una funcion clase o variable en todos los archivos      |
| ctrl + P                      | encuentra un archivo específico en el directorio corriente        |
| ctrl + }                      | comenta                                                           |
| tab/ctrl '                    | identa/des                                                        |
| shift-alt-f                   | formatear texto seleccionado/todo el archivo, con linter/prottier |


### Editar varias ocurrencias:

| Teclas                         | selección múltiple               |
| ------------------------------ | -------------------------------- |
| alt + clic                     | duplica cursor                   |
| seleccionar palabra y Ctrl + D | seleccción múltiple              |
| ctrl+shift+L                   | selecciona todas las ocurrencias |
| shift+Alt mientras arrastra    | Selecciones discontinuas         |

### Renombrar variable:

Cambia el nombre de una variable/función en todo su ámbito.

1. Selecciona una variable y presiona F2.
2. Escribe el nuevo nombre y pulsa Enter.

ctl+f buscar

### Complemento turbo console (Anas Chakroun)

Insertar un console.log() rápidamente

* Selecciona la variable que quieres loguear.
* Presiona Ctrl + Alt + L (Windows/Linux) o Cmd + Alt + L (Mac).

Automáticamente se agregará un console.log() con la variable.
Comentar/Descomentar todos los console.log

* Ctrl + Alt + K (Windows/Linux) o Cmd + Alt + K (Mac): Comenta todos los console.log.
* Ctrl + Alt + U (Windows/Linux) o Cmd + Alt + U (Mac): Descomenta todos los console.log.

Eliminar todos los console.log

* Ctrl + Alt + D (Windows/Linux) o Cmd + Alt + D (Mac): Borra todos los console.log del archivo actual.

## emet

Emmet es un plugin para editores de código que te permite escribir HTML y CSS mucho más rápido usando abreviaciones que luego "expanden" en código completo . Por ejemplo, escribes div>ul>li*3 y con un tabulador se convierte en:

```html
<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

## Materiales
* lap top
* acceso a internet

## Actividades

## Actividad 1: instalar plataforma

[Instalar code desde](https://code.visualstudio.com/)

## Actividad 2

Realizar lo siguiente:

1. crear el archivo 'ejemplo.html' en code.
2. ponga en la ventana de edición el archivo que acaba de crear.
3. escriba el caracter '!' y a continuación presione la tecla 'tab'
4. lo que acaba de hacer debe poner en su archivo un código html básico.
5. coloquese en la linea que esta entre el body y el /body
6. escriba lo siguiente: ul>li*4 a continuacion presione la tecla 'tab'
7. escriba lo siguiente: ul>li{item $}*4
8. en la primera lista coloque el cursor entre el primer ```<li>aqui</li>>```
9. presionando la tecla 'alt' y haga clic entre ```<li>aqui</li>``` de las siguientes 3 lineas
10. escriba 'opcion a' y presione la tecla 'esc'
