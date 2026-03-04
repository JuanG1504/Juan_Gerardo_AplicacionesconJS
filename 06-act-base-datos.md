# construcción de base de datos

# objetivo
Construir una base de datos para el sistema del curso

# saberes a reforzar

# Introducción

El procesamiento de la información requiere de almacenes de datos confiables y organizados de tal manera que nos provean información consistente, en un sistema de cómputo no nos interesa que la información sea correcta, pues esto depende del capturista, si almaceno un dato X sea incorrecto o no cada que consulte los bancos de datos debemos darle el mismo valor X, eso es consistencia sin embargo un objetivo tan sencillo requiere de cierto grado de complejidad, esta complejidad es manejada por la organización que le hayamos dato a nuestra base de datos.

## DBMS

Un sistema manejador de bases de datos (DBMS) es un sistema de software que permiten crear y administrar la base de datos, permiten la creación y modificación de la base, administración del espacio, consultas, administración de usuarios y permisos, procedimientos almacenados y manejo de restricciones a la base. Existen diferentes manejadores de base de datos con más o menos prestaciones, están Oracle, Informix, SQL Server, MySql, y tenemos también un conjunto de manejadores ligeros con pocas prestaciones, pero con pocos requerimientos de software como Acces y SqLite, también podemos dividir a los manejadores en libres y con pago de licencia, entre los libres tenemos MySql, JavaDB (antes Derby) y SQLite.
Para estas notas usaremos MySql, SQlite, MongoDB, Posgres.

## Modelo ER

El modelo entidad relación es una herramienta que permite representar de manera simplificada los componentes que participan en un proceso de negocio y el modo en el que estos se relacionan entre sí.
El modelo entidad relación tiene tres elementos principales:
Entidades: El modelo contará con una entidad por cada uno de los componentes del proceso de negocio. Así, en un negocio de venta de suscripciones a revistas, podemos tener entidades “Cliente”, “Dirección”, “Factura”, “Producto”, o “Incidencias”, entre otras.
Atributos: Los atributos, componente fundamental de cada modelo entidad-relación, nos permiten describir las propiedades que tiene cada entidad. “Nombre”, “Primer Apellido”, “Segundo Apellido”,” Fecha de nacimiento”, “Género” o “Segmento de valor” serán atributos de la entidad “Cliente”.
Relaciones: Con las relaciones se establecen vínculos entre parejas de entidades. Cada “Cliente” tendrá una “Dirección” de envío en la que recibirá la suscripción, podrá estar suscrito a uno o varios “Productos”, y recibirá una “Factura” con la periodicidad acordada.
El diagrama entidad relación es la expresión gráfica del modelo entidad relación. En él las entidades se representan utilizando rectángulos, los atributos por medio de círculos o elipses y las relaciones como líneas que conectan las entidades que tienen algún tipo de vínculo. También es muy común el formato de diagrama en el que los atributos de una entidad aparecen listados en filas dentro del rectángulo que representa a esa entidad.

Además, es común que, en el modelo entidad-relación, los conectores que indican que dos entidades A y B están relacionadas entre sí tengan una apariencia gráfica diferente dependiendo del tipo de relación que exista entre ellas.

## Modelo relacional

Una relación es una regla que asocia elementos de un conjunto en otro, es un subconjunto del producto cartesiano de dos o más conjuntos. Por ejemplo sea el conjunto de géneros femenino y masculino A={f,m},  y el conjunto de personas B={Ana, Bety, Carlos, Enrique}, el producto cartesiano AxB es:

{ (f,Ana), (f,Bety), (f,Carlos), (f,Enrique),(m,Ana), (m,Bety), (m,Carlos), (m,Enrique) }

Estas son todas las combinaciones de los elementos de A y de B, Sin embargo, supongamos que queremos identificar las mujeres, debemos aplicar la regla que dice R=”Elemento de B que es de sexo femenino”, el conjunto resultante es:
{(f,Ana), (f,Bety)}
Y son las 2 únicas parejas que cumplen la regla 
Tenemos una regla de asociación, observe que el conjunto generado por la regla es efectivamente un subconjunto del producto cartesiano. La regla es una relación y decimos que del conjunto A y B representamos la relación R como: {(f,Ana), (f,Bety)}.

Las relaciones se muestran en forma de tabla:

### Determinante. 

Si el valor de campo X de la relación está asociado a un solo valor Y en la relación (o sea para un valor x del campo X, se encuentra un único valor y del campo Y), decimos que X determina a Y, o qué Y es funcionalmente dependiente de X.

X->Y

Por ejemplo sea X el campo rfc  y Y el campo Nombre en la relación empleados, para un valor X (o sea para un rfc), se puede encontrar uno y solo un nombre. Ejemplo si yo tengo el rfc=” DITR750310” ¿cuantos nombres encuentro con ese rfc? respuesta= uno solo, el nombre del registro 1 en la tabla anterior tiene ese rfc. En cambio, el campo nombre no determina a rfc, pues si yo tengo el nombre “Rosa Díaz Tun”, cuantos rfc encuentro que tengan ese nombre respuesta= dos rfc tienen ese nombre por lo que el campo nombre no es un determinante del campo rfc.

Un campo es llave, si determina a todos los demás campos en la tabla, es decir si todos los demás campos son funcionalmente dependientes de él.

### Clave o llave primria

Una llave primaria (o clave primaria) es un campo o conjunto de campos que determina de manera única a todos los demás atributos (campos) en la tupla (renglón) de la relación. Pueden existir varias claves candidatas a ser clave primaria, en este caso se elige una como clave primaria y las demás son clave candidata. Por ejemplo, si la tabla Alumno tiene los atributos (rfc, matricula, nombre, carrera) tenemos 2 claves candidatas pues (rfc y matricula) son irrepetibles para cada alumno y por lo tanto pueden ser ambas una llave, el diseñador debe elegir una de ellas para ser llave primaria y la otra se convierte en llave candidata.

### Llave foranea

Una clave o llave foránea es un campo que hace referencia a otro campo que es llave en otra relación.

### Formas normales

1. Primera forma normal. Todos los atributos o campos deben ser atómicos.
2. Una tabla esta es segunda forma normal 2NF, si está en primera forma normal y todos los atributos no claves (no llave), dependen totalmente de la llave primaria.
3. Una tabla está en forma normal de Boyce Codd BCNF si está en 2NF y además todo determinante es una clave candidata.

## Materiales

* lap top
* acceso a internet

## Actividades

Diseñar base de datos

Objetivo: crear la estructura de una base de datos relacional.

## Actividades:

* Identifique (o proponga) una necesidad informática que requiera de una base de datos relacional
* Describa el sistema al que serviría esa base de datos (narrativa del sistema)
* Diseñe la base de datos en el modelo E-R
* Diseñe las sentencias SQL para crear la BD

### Entregables

Un archivo en mark dawn llamado así 'sumatricula-tareabd1.md', el archivo debe contener

* Índice
* Objetivo del sistema
* Narrativa del sistema
* Modelo E-R en un grafico Mermaid
* Sentencias SQL encerradas entre ```sql ```
* Criterios de evaluación
* Debe estar en mark down
* Debe contener el grafico mermaid con el modelo ER
* El sistema de tener de 6 a 10 tablas de BD
* Las tablas de BD deben cumplir con al menos las formas normales 1nf, 2nf, 3nf
