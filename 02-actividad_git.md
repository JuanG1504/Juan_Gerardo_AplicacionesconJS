# Actividad git
Índice
1. [Objetivo](#objetivo)
2. [Saberes a reforzar](#saberes-a-reforzar)
3. [Introducción](#introducción)
4. [Materiales](#materiales)
5. [Desarrollo](#desarrollo)

## Objetivo

Aprender el uso de un la herramienta git para llevar un buen control del desarrollo de software  y  su versionamiento.
## Saberes a reforzar

Manejo de herraamientas de apoyo, necesarias para la evaluación de los diferentes módulos de software, accion que apoyará para asegurarnos que el software cumplirá con sus requerimientos eliminando posibles errores.

## Introducción

**Git** es un sistema de control de versiones muy utilizado en el desarrollo de software. Fue creado por Linus Torvalds y es conocido por su eficiencia, flexibilidad y capacidad para gestionar proyectos de cualquier tamaño.

**Github** es un portal creado para alojar el código de las aplicaciones de cualquier desarrollador, y que fue comprada por Microsoft en junio del 2018. La plataforma está creada para que los desarrolladores suban el código de sus aplicaciones y herramientas, y que como usuario no sólo puedas descargarte la aplicación, sino también entrar a su perfil para leer sobre ella o colaborar con su desarrollo.

git y github no son lo mismo, pero github utiliza git para gestionar sus proyectos. Básicamente usted lleva el control de sus versiones de proyecto con git y los respalda en la nube con github.

### instalar

[Instala desde](https://git-scm.com/downloads)

### bash

GNU Bash o simplemente Bash (Bourne-again shell) es una popular interfaz de usuario de línea de comandos, específicamente un shell de Unix; así como un lenguaje de scripting de Git, permite ejecutar comandos de Linux que son muy útiles durante el desarrollo, por ejemplo, el comando “curl”. Bash fue originalmente escrito por Brian Fox para el sistema operativo GNU y está disponible para Windows en varias instalaciones, una de ellas es la de GIT. 

Instalar la consola Bash:

* Opción 1: Bash viene integrada al instalar Git.
* Opción 2: Bash viene también en otros paquetes de software como MySys2 (Es una colección de herramientas y bibliotecas que le brindan un entorno fácil de usar para crear, instalar y ejecutar software nativo de Windows), puede instalar mySys2 desde: https://www.msys2.org/ 
* Opción 3: Habilitar WSL (requiere Windows 10/11): ejecutando: "wsl --install" en Power Shell.

En estas notas usaremos la consola de git (git bash o simpemente bash) instalada con git, pero tambien puede ejecutar los comando usando Power Shell (PS), Si ya teine instalado Git en su equipo; para abrir una ventna de bash dando clic derecho sobre la carpeta de windows donde quiera trabajar y seleccionando 'git bash here'.

Praa abrir una ventanaa de Power Shell, sobre la carpeta que quiere trabajar presione a tecla 'shift' de clic derecho y seeccioen abrir PS. O seleccione la carpeta y en el menu archivo seleccione la opcion abrir PS.

Git tiene 3 areas de trabajo:

* working directory //mi directorio de trabajo
* sataging area //archivos en escena, preparados para ser respaldados (para hacer commit)
* git directory(repositorio) //archivos respaldados o comprometidos (commited), llamaremos respladados.

### Configuración de git

Antes de empezar a trabajar con sus proyectos, debe configurar git para que este enlazado con su cuenta de github/ git lab, puede hacer un enlace global solo una vez después instalar git:

```sh
# configurar su nombre de usuario y mail que tiene en github
git config --global user.name "mi nombre en git hub"
git config --global user.email "miemail@mail"
# listo cargo sus credenciales.
# por defecto git tiene asociado el editor vi, si desea puede configurar el editor para que use code
# configurar editor
git config --global core.editor "code --wait"
# si lo desea muestre la configuración actual en el editor x defecto
git config --global -e

# la siguiente configuracion la necesitas solo si estas en una version menor a 2.28
# ver version de git:
git --version
# verificar configuracion actual de nombre de rama inicial por defecto
git config --global init.defaultBranch
# Si desea que la rama inicial debe ser main y no master hacer:
git config --global init.defaultBranch main
# NOTA: a partir de la versión Git versión 2.28 la rama por defecto es main
```

O si desea puede configurar el enlace a un solo repositorio, si usa la opcion **--local**.

### Editor vi

Por defecto el editor asociado a git es vi (a menos que lo cambie con:```git config --global core.editor "code --wait``` ), por si los necesita estos son los comandos del editor VI:

```sh
# comndos del editor vi
# al entrar al editor vi entra en modo comando, 
# puede moverse con las flechas en el texto y ejecutar comando para:
# editar/buscar/reemplazar 
# NO puede modificar el texto en modo comando, para hacerlo debera ejecutar  el comado
# i o el comando a que lo lleva a modo edicion, 
# para salir de modo edicion preione tecla <esc>
# comandos:  i/a/x. 
# si presiona el comano x por ejemplo, borra la letra en el cursor
# con el comando:
# i - entra a modo edicion para insertar texto en la posicion actual
# a - entra a modo edicion para insertar texto despues de la posicion actual
# esc sale de edicion a modo comando
# En modo comando:
:wq guarda y sale del archivo
:q! sale sin guardar
```

### Archivo .gitignore

Ejemplo de Archivo: .gitignore

```sh
# Ignorar la carpeta de dependencias
node_modules/

# Ignorar archivos de entorno
.env

# Ignorar logs
*.log
npm-debug.log*

# Ignorar cache
.cache/

# Ignorar compilados
dist/
build/
```

### Commit (snapshot o instantanea)

```sh
git status
git add archivo
git add .
git commit -m "texto"
```

### Crear un commit de varias líneas:

Opción 1:
commit sin argumentos, abre el editor para cargar el texto.

```sh
git commit 
```

Opción 2: con un archivo

```sh
# Crear un archivo con el mensaje
cat > commit_message.txt << EOF
Título del commit

Descripción detallada:
- Implementa nueva funcionalidad X
- Corrige el bug Y
- Actualiza documentación

Contexto: Este cambio fue necesario porque...
EOF

# Usar el archivo para el commit
git commit -F commit_message.txt

# Opcional: eliminar el archivo temporal
rm commit_message.txt
```

Opción 3 usando here document:

```sh
git commit -F -<< EOF
Título del commit

Descripción extensa del cambio:
Este commit implementa la funcionalidad solicitada
en el issue #45. Los cambios incluyen:

1. Modificación del archivo X
2. Adición de nuevos tests
3. Actualización de la documentación

Consideraciones: Se necesita revisar el performance.
EOF
```

### Detalles sobre Commit
```sh
git log #muestra los snapshots existentes
git log --oneline # con menos informacion
git log --oneline --graph # con grafica
git log --pretty=oneline #version compacta
#o con información específica
git log --pretty=format:"%h - %an, %ar : %s"
#regresar a un commit especifico
git checkout id-commit
# regresar al ultimo commit
git checkout HEAD

git checkout main #volver al estado actual
# recuperar archivo delutltimo commit
git restore archivo
```


Flag -u en git push

Puede usar el flag -u en `git push -u origin main` este, establece una relación de seguimiento entre tu rama local y la rama remota. Esencialmente, le dice a Git que la rama main en tu repositorio local debe rastrear la rama main en el repositorio remoto origin. Después de ejecutar este comando, podrás usar simplemente `git push` o `git pull` en lugar de especificar la rama y el origen cada vez, porque Git ya sabrá a qué rama y a qué remoto te refieres:

```sh
# Primera vez (configura tracking):
git push -u origin main

# Después, solo necesitas:
git pull
git push

# ¡Git ya sabe qué rama usar!
```

### Conamdos linux

Los siguientes comandos solo fucnionan en la consola bash

```sh
#muestra el path de go
echo $GOPATH
#crea archivo con lineas desde el teclado termina con ctr d
cat > archivo 
#crea archivo con ese texto
echo "# proyectoweb2" >> readme.md 
#crea un archivo vacio, si son varios se separa por espacio
touch [opciones] [nombre archivo(s)] 
# ejemplo
touch redme.md
# crear un archivo de 3 lineas con echo:
echo "línea 1" > archivo.txt
echo "línea 2" >> archivo.txt
echo "línea 3" >> archivo.txt

# crear archivo de verias lineas
cat > archivo.txt << EOF
línea 1
línea 2
línea 3
EOF
```

## Materiales
* lap top
* acceso a internet

## Actividad 1
1. Crear su cuenta en github si aun no lo ha hecho.
2. Instalar git si no lo ha hecho
3. Configuarar git con su cuenta de github si no lo ha hecho
4. Configurar en editor de git a VSCode (previamente debe intalar VSCode si no lo tiene instalado)

### Solución

```sh
# 3 configurar su nombre de usuario y mail que tiene en github
git config --global user.name "mi nombre en git hub"
git config --global user.email "miemail@mail"
# listo cargo sus credenciales.
# por defecto git tiene asociado el editor vi, si desea puede configurar el editor para que use code
# 4 configurar editor
git config --global core.editor "code --wait"

```

## Actividad 2

1. crear una carpeta de trabajo por ejemplo 'c:/trabajo'
2. dentro de su carpeta crear una nueva carpeta llamada md 'c:/trabajo/md'
3. abrir git bash en su carpeta 'c:/trabao/md'
4. con ayuda del profesor ejecute el comando: ```git clone repositorio```

### solución

```sh
# en su carpeta 'c:/trabaajo/md' de clic derecho y elja 'abrir git bash here'
# ejecute:
git clone https://github.com/jflorespampano/actividades-md-2026.git
```

## Actividad 3

1. Crear un nuevo repositorio llamado 'c:/trabajo/mirepo1'
2. Usando echo, ageregue un archivo 'app.c' con una funcion que reciba 2 enteros y devuelva la suma de ambos. 
3. Haga un snapshot (instantanea o commit) agregando la descripcion "funcion suma".
4. Agregue al archivo 'app.c' una funcion que reciba 2 enteros y devuelva la resta
5. Haga un snapshot (instantanea o commit) agregando la siguiente descripcion de 4 lineas:
    contenido funciones artméticas
    funciones cargadas
    suma
    resta
6. Muestre todos sus commit
7. Agregue al archivo 'app.c' una funcion que reciba 2 enteros y devuelva la multiplicación
8. Haga un snapshot (instantanea o commit) agregando la descrcipción "funciones completas"
9. Muestre sus commit

