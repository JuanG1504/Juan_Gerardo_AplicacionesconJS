
(Bourne Again Shell)

Git Bash es una aplicación para Windows que proporciona una emulación de terminal para utilizar Git y comandos Unix/Linux desde la línea de comandos. bash trae instalado curl.

## Comandos bash

```sh
# muestra directorio HOME
echo ~
pwd #mustra e directorio actual

mkdir carpeta #crear carpeta
ls #muestra archivos
cat archivo #muestra contenido de un archivo
grep -i "hola" archivo.txt # buscar texto en archivo -i ignora minusculas/mayusculas
grep "error" *.log
```

## Crear archivos

```sh
touch archivo #crea un nuevo archivo vacio
echo "Contenido inicial" > archivo1.txt # cre archivo con el texto
```
```sh
# crear archivo cn varias líneas
cat > mi_archivo.txt << EOF
Línea 1
Línea 2
Línea 3
Puedes escribir cualquier texto aquí.
EOF

# opcion 2
{
echo "Línea 1";
echo "Línea 2";
echo "Línea 3";
} > mi_archivo.txt

# opcion 3
printf "Línea 1\nLínea 2\nLínea 3\n" > mi_archivo.txt

# -f ignora mayusculas/minusculas, -u ignora duplicados, -k2 ordena por 2da columna
```

## Filtrar líneas

```sh
grep -E "[0-9]+" archivo.txt   # Líneas con uno o más dígitos
grep "^inicio" archivo.txt    # Líneas que empiezan por "inicio"
grep "fin$" archivo.txt       # Líneas que terminan con "fin"

# primeras /ultimas lineas
head -n 10 archivo.txt        # Primeras 10 líneas
tail -n 10 archivo.txt        # Últimas 10 líneas

# cn csv
cut -d',' -f1,3 archivo.csv   # Muestra columnas 1 y 3 (separador coma)

# por fecha
array grep "2023-10-25" logfile.txt

# 
awk 'length($0) > 80' archivo.txt   # Líneas de más de 80 caracteres
```
## Ordenar

```sh
sort mi_archivo.txt > ordenado.txt
sort -r mi_archivo.txt > ordeninverso.txt
```
## Ejemplo de archivo ejecutable .sh

Ejecutar archivo .sh
```sh
bash puebaGitRevert.sh
```

Archivo pruebaGitRevert.sh
```sh
# ejecucion: bash puebaGitRevert.sh
# 1. Crear un nuevo directorio y repositorio para el ejemplo
mkdir ejemplo_revert
cd ejemplo_revert
git init
  
# 2. Crear el primer archivo y hacer un commit
echo "Contenido inicial" > archivo1.txt
git add archivo1.txt
git commit -m "Commit 1: Agrega archivo1"
  
# 3. Crear un segundo archivo (este será el commit problemático)
echo "Contenido correcto" > archivo2.txt
git add archivo2.txt
git commit -m "Commit 2: Agrega archivo2"
  
# 4. Modificar el primer archivo para un commit posterior
echo "Una línea más de contenido" >> archivo1.txt
git add archivo1.txt
git commit -m "Commit 3: Modifica archivo1"
```

## Agregar un ruta al PATH para la sesión actual

```sh
# respaldar el path
echo $PATH > path_backup.txt
echo $PATH | tr ':' '\n' > path_backup.txt

# Agregar ruta
# en git bash
export PATH=$PATH:/ruta/nueva
# ejemplo 
export PATH=$PATH:C:/trabajo/sqlite-tools-win32
# Restaurar el path temporalmente
# Desde archivo formateado (una ruta por línea)
export PATH=$(cat path_backup_formateado.txt | tr '\n' ':')

# Desde archivo original
export PATH=$(cat path_backup.txt)

# respaldo rápido en el home directory con fecha
echo $PATH > ~/path_respaldo_$(date +%d%m%Y).txt
echo $PATH | tr ':' '\n' > ~/path_respaldo_enter_$(date +%d%m%Y).txt
```
- `export` solo afecta al proceso actual y sus hijos
- Al cerrar Git Bash, se pierde el cambio
- No modifica los archivos de configuración del sistema

Para un restauración permanente:

```sh
# Para Git Bash - agregar al ~/.bashrc
echo 'export PATH="'$(cat path_backup.txt)'"' >> ~/.bashrc

# O restaurar desde el archivo formateado
echo 'export PATH="'$(cat path_backup_formateado.txt | tr '\n' ':')'"' >> ~/.bashrc
```

## Ejecutar script

```sh
# por si no tiene permisos
chmod +x mi_script.sh

# Desde el directorio actual
./mi_script.sh

# O especificando la ruta completa
/home/usuario/scripts/mi_script.sh

# O usando bash explícitamente (no requiere chmod)
bash mi_script.sh

```
## Ventajas de bash
## Eficiencia y Velocidad

- **Comandos rápidos**: Tareas que requieren múltiples clics en interfaces gráficas se hacen con un comando
- **Menos recursos**: Consume menos memoria y CPU que aplicaciones con interfaz gráfica
- **Ejecución remota**: Puedes administrar sistemas remotos fácilmente vía SSH

## Tuberías

```sh
# Tuberías (pipes) para procesamiento de datos
# uniq -c cuenta cuantas veces aparece cada lineaa duplicada en formma consecutiva
cat archivo.log | grep "error" | sort | uniq -c

# Redirección de entrada/salida
comando > resultado.txt 2> errores.log

# Expansión de archivos
rm *.tmp        # Eliminar todos los .tmp
cp dir{,.bak}   # Crear copia de directorio
```

## **Diagnóstico y Resolución de Problemas**

```sh
# Monitoreo en tiempo real
top, htop, iotop

# Análisis de red
netstat -tulpn, ss, tcpdump

# Diagnóstico de sistema
dmesg, journalctl, strace
```

## **Ventajas para Desarrolladores**

- **Control de versiones**: Git es más potente por línea de comandos
- **Gestión de paquetes**: apt, yum, pip, npm
- **Contenedores**: Docker, Kubernetes se usan principalmente por CLI
- **Processing de texto**: sed, awk, grep para manipular archivos

## Editor vi

### Para Empezar

- Abrir un archivo: `vi nombre_archivo`
- Si el archivo no existe, Vi lo creará cuando guardes.
    

### Movimiento Básico (Modo Normal)

- `h` - mueve el cursor a la izquierda
- `j` - mueve el cursor abajo
- `k` - mueve el cursor arriba
- `l` - mueve el cursor a la derecha
- `0` - ir al principio de la línea
- `$` - ir al final de la línea
- `gg` - ir al principio del archivo
- `G` - ir al final del archivo
- `: número` - ir a la línea número (ej: `:10` va a la línea 10)
    

### Edición (Modo Normal)

- `i` - entrar en modo Insertar antes del cursor
- `a` - entrar en modo Insertar después del cursor (append)
- `o` - insertar una nueva línea debajo y entrar en modo Insertar
- `O` - insertar una nueva línea arriba y entrar en modo Insertar
- `x` - borrar el carácter bajo el cursor
- `dd` - cortar (eliminar) la línea actual
- `yy` - copiar (yank) la línea actual
- `p` - pegar la línea copiada o cortada debajo de la línea actual
- `u` - deshacer (undo)
- `Ctrl + r` - rehacer (redo)
-  ESC salir de edición
    

### Guardar y Salir (Modo Línea de Comandos)

- `:w` - guardar (write)
- `:q` - salir (quit)
- `:wq` - guardar y salir // alternativa :x
- `:q!` - salir sin guardar (force quit)
- `:w nombre_archivo` - guardar como otro archivo
    

### Búsqueda y Reemplazo

- `/texto` - buscar "texto" hacia adelante (pulsar `n` para siguiente, `N` para anterior)
- `?texto` - buscar "texto" hacia atrás
- `:%s/viejo/nuevo/g` - reemplazar todas las ocurrencias de "viejo" por "nuevo" en todo el archivo
    

### Consejos para Principiantes

1. **Aprende a salir**: Es lo más importante. Si te quedas atrapado en Vi, presiona `Esc` para asegurarte de que estás en modo Normal y luego escribe `:q!` para salir sin guardar o `:wq` para guardar y salir.
2. **Practica los modos**: Acostúmbrate a cambiar entre modos. Usa `Esc` para volver al modo Normal y luego `i` para insertar.