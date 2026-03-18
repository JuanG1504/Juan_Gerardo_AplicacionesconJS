# Terminales

## Explorador de archivos de Windows

* Si no ves el menú del explorador de archivos, presiona tecla alt y aparece el menú temporalmente

* Tecla ctrl + f1 muestra el menú ampliado del explorador de archivos

## Lanzar cmd

Desde el Explorador de Archivos:
- Navega a la carpeta deseada
- Haz clic en la **barra de direcciones** y escribe `cmd`
- Presiona `Enter`

## Path

Puedes agregar temporalmente una ruta a PATH para la sesión actual usando los siguientes comandos.

```sh
# en cmd
set PATH=%PATH%;C:\ruta\nueva

# en power shell
# mostrar PATH
$env:PATH
# agregr entrada temporal
$env:PATH += ";C:\trabajo\sqlite\sqlite-tools\sqlite-tools-win32"

# en git bash
export PATH=$PATH:/ruta/nueva
```

Agregar de forma permanente

```sh
# power shell
# Para el usuario actual
[Environment]::SetEnvironmentVariable("PATH", [Environment]::GetEnvironmentVariable("PATH", "User") + ";C:\ruta\nueva", "User")

# Para todos los usuarios (requiere admin)
[Environment]::SetEnvironmentVariable("PATH", [Environment]::GetEnvironmentVariable("PATH", "Machine") + ";C:\ruta\nueva", "Machine")

```
## Hyper terminal

Emulador de terminal multiplataforma creado por Guillermo Rauch, es un proyecto de código abierto construido sobre JS, HTML y CSS.

Sitio web: https://hyper.is/ 

## Windows power shell

Abrir PS

* Presiona wimows+x y selecciona windows power shell
* Presiona windows+r y escribe wt
* Abre el explorador de archivos y en el menú archivo selecciona abrir PS aqui

## Windows terminal

Aplicación moderna de terminal que reemplaza la Consola de Windows tradicional. Host unificado para múltiples shells (PowerShell, CMD, WSL, Azure Cloud Shell) en pestañas y paneles

Abrir
* Windows+r, escribe wt
* clic derecho/ abrir en terminal

## Referencias

[Power shell](https://blog.victorsilva.com.uy/powershell-customizar-prompt/)
