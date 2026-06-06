#  Postres Celestiales — Sistema de administración

Este proyecto es un sistema interno de gestión titulado **Postres Celestiales**, desarrollado con **React + Vite** en el frontend y **JSON Server** como backend simulado. Permite administrar postres, ingredientes, clientes, proveedores, empleados y pedidos.

---

## Datos

**Alumno**: Juan Gerardo Hernandez Gobea
**Matricula**: 184382
**Profesor**: Jesús Alejandro Flores Hernández
**Asignatura**: Desarollo de aplicaciones con bibliotecas JS

---

## Descripción

El sistema cuenta con **6 módulos de gestión**, todos con operaciones completas de creación, edición y eliminación (CRUD).

---

## Cómo funciona el formulario y el CRUD

Todos los módulos siguen exactamente la misma lógica de funcionamiento. Entender uno es entender todos.

### Formulario

Cada módulo tiene un formulario en la parte superior de la pantalla. Al entrar a cualquier sección, el formulario aparece en modo **"Agregar"**, listo para registrar un nuevo elemento.

 
### Crear  

Cuando el formulario está en modo "Agregar" y presionas el botón, se envía una petición `POST` al backend con los datos del formulario. Si la operación es exitosa, el nuevo registro aparece al instante en la tabla inferior y el formulario se limpia automáticamente.

### Leer  

Al cargar cualquier módulo, la aplicación hace una petición `GET` al backend para traer todos los registros existentes y mostrarlos en la tabla. Esta consulta también se repite automáticamente después de cada operación de creación, edición o eliminación, para que la tabla siempre refleje el estado actual de los datos.

### Editar  

Cada fila de la tabla tiene un botón **"Editar"**. Al presionarlo, los datos de ese registro se cargan automáticamente en el formulario de la parte superior, la página hace scroll hacia arriba, y el formulario cambia de modo: el título pasa a decir "Modificar", el botón principal dice "Guardar Cambios" y aparece un botón adicional de **"Cancelar"** por si decides no continuar con la edición.

Al guardar, se envía una petición `PATCH` al backend con solo los campos modificados, y la tabla se actualiza de inmediato.

### Eliminar  

Cada fila también tiene un botón **"Eliminar"**. Al presionarlo, aparece un cuadro de confirmación preguntando si estás seguro. Si confirmas, se envía una petición `DELETE` al backend y el registro desaparece de la tabla. Si cancelas, no ocurre nada.
 
---

## Módulos

### Postres
Administra el catálogo de productos de la pastelería. Puedes registrar nuevos postres con su nombre, categoría, precio, tamaño y disponibilidad. La tabla muestra el estado de cada postre con etiquetas visuales.

### Ingredientes
Controla el inventario de insumos. Registra cada ingrediente con su nombre, unidad de medida, cantidad en existencia y proveedor responsable del suministro.

### Clientes
Gestiona la base de datos de clientes con nombre completo, teléfono, correo electrónico y dirección. La información se puede actualizar o eliminar en cualquier momento.

### Pedidos
Módulo central del negocio. Permite registrar pedidos seleccionando el cliente y el postre desde listas desplegables , especificar cantidad, fechas de pedido y entrega, y asignar un estado: **Pendiente**, **En preparación**, **Listo para entrega**, **Entregado** o **Cancelado**. El total se calcula automáticamente según el precio del postre y la cantidad.

### Proveedores
Organiza los contactos de abastecimiento con nombre, teléfono, correo, dirección, persona de contacto y estado.

### Empleados
Gestiona el personal de la pastelería con nombre, puesto, teléfono, sexo y turno.

---

## Requisitos previos

Antes de ejecutar el proyecto necesitas instalar **Node.js**, que incluye también `npm` (el gestor de paquetes).

### Instalar Node.js

1. Ve a la página oficial: [https://nodejs.org](https://nodejs.org)
2. Descarga la versión **LTS**.
3. Ejecuta el instalador.

---

## Cómo descargar el proyecto

El repositorio completo se encuentra en GitHub. El proyecto está dentro de la carpeta **`Postres`**:

🔗 [https://github.com/JuanG1504/Juan_Gerardo_AplicacionesconJS/tree/main/Postres](https://github.com/JuanG1504/Juan_Gerardo_AplicacionesconJS/tree/main/Postres)

### Opción 1 — Clonar el repositorio completo

1. Abre una terminal.
2. Navega a la carpeta donde quieres guardar el proyecto. Por ejemplo:
   ```bash
   cd Documentos
   ```
3. Clona el repositorio:
   ```bash
   git clone https://github.com/JuanG1504/Juan_Gerardo_AplicacionesconJS.git
   ```
4. Entra a la carpeta del proyecto:
   ```bash
   cd Juan_Gerardo_AplicacionesconJS/Postres
   ```

### Opción 2 — Descarga como archivo ZIP

1. Ve al repositorio en GitHub:  
   [https://github.com/JuanG1504/Juan_Gerardo_AplicacionesconJS](https://github.com/JuanG1504/Juan_Gerardo_AplicacionesconJS)
2. Haz clic en el botón verde **`<> Code`**.
3. Selecciona **"Download ZIP"**.
4. Extrae el archivo ZIP en la ubicación que prefieras (clic derecho → Extraer aquí).
5. Abre una terminal y navega a la carpeta del proyecto dentro del ZIP extraído:
   ```bash
   cd Juan_Gerardo_AplicacionesconJS-main/Postres
   ```

---

## Cómo ejecutar el proyecto

El proyecto tiene dos partes que deben ejecutarse al mismo tiempo, cada una en su propia terminal.

### Terminal 1 — Backend (JSON Server)

El backend simula una API REST con los datos almacenados en `datos.json`.

Primero instala **JSON Server de forma global**:

```bash
npm install -g json-server
```

Luego, entra a la carpeta del backend e inicia el servidor:

```bash
# Entra a la carpeta del backend
cd backend

# Inicia el servidor
npm run back
```

El servidor quedará corriendo en: **http://localhost:3000**


### Terminal 2 — Frontend (React + Vite)

Abre una **nueva terminal** (sin cerrar la anterior) y ejecuta:

```bash
# Entra a la carpeta del frontend
cd postres-celestiales

# Instala las dependencias
npm install

# Inicia la aplicación
npm run dev
```

Vite mostrará una dirección como:

```
  ➜  Local:   http://localhost:5173/
```

Abre esa dirección en tu navegador y el sistema estará listo para usarse.

---

## Notas importantes

- **Ambas terminales deben permanecer abiertas** mientras usas el sistema. Si cierras la del backend, el frontend no podrá cargar ni guardar datos.
- El archivo `datos.json` actúa como base de datos. Todos los cambios que realices en el sistema se guardan directamente en ese archivo.
- Si el frontend no carga datos o muestra errores de conexión, verifica que el backend esté corriendo en el puerto `3000`.
