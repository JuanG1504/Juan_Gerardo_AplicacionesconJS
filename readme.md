#  Postres Celestiales — Sistema de Administración

Este proyecto es un sistema interno de gestión titulado **Postres Celestiales**, desarrollado con **React + Vite** en el frontend y **JSON Server** como backend simulado. Permite administrar postres, ingredientes, clientes, proveedores, empleados y pedidos.

---

## Datos

**Alumno**: Juan Gerardo Hernandez Gobea
**Matricula**: 184382
**Profesor**: 
**Asignatura**: Desarollo de aplicaciones con JS


##  Descripcion

El sistema cuenta con **6 módulos de gestión**, todos con operaciones completas de creación, edición y eliminación (CRUD):

###  Postres
Administra el catálogo de productos de la pastelería. Puedes registrar nuevos postres con su nombre, categoría (pastel, cupcake, cheesecake, etc.), precio, tamaño (individual, mediano, grande) y disponibilidad. La tabla muestra el estado de cada postre con etiquetas visuales.

### Ingredientes
Controla el inventario de insumos. Registra cada ingrediente con su nombre, unidad de medida (kg, g, L, ml, piezas), cantidad en existencia y proveedor responsable del suministro.

### Clientes
Gestiona la base de datos de clientes con nombre completo, teléfono, correo electrónico y dirección. La información se puede actualizar o eliminar en cualquier momento.

### Pedidos
Módulo central del negocio. Permite registrar pedidos seleccionando el cliente y el postre desde listas desplegables (cargadas dinámicamente desde la base de datos), especificar cantidad, fechas de pedido y entrega, y asignar un estado: **Pendiente**, **En preparación**, **Listo para entrega**, **Entregado** o **Cancelado**. El total se calcula automáticamente según el precio del postre y la cantidad.

### Proveedores
Organiza los contactos de abastecimiento con nombre, teléfono, correo, dirección, persona de contacto y estado (Activo / Inactivo).

### Empleados
Gestiona el personal de la pastelería con nombre, puesto, teléfono, sexo y turno (Matutino, Vespertino o Nocturno).

---

## Requisitos previos

Antes de ejecutar el proyecto necesitas instalar **Node.js**, que incluye también `npm` (el gestor de paquetes).

### Instalar Node.js

1. Ve a la página oficial: [https://nodejs.org](https://nodejs.org)
2. Descarga la versión **LTS**.
3. Ejecuta el instalador.

---

## Cómo descargar el proyecto


### Opción 1 — GitHub  

1. Abre una terminal.
2. Navega a la carpeta donde quieres guardar el proyecto. Por ejemplo:
   ```bash
   cd Documentos
   ```
3. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-postres.git
   ```
4. Entra a la carpeta descargada:
   ```bash
   cd proyecto-postres
   ```

### Opción 2 — Descarga como archivo ZIP

1. Ve al repositorio en GitHub.
2. Haz clic en el botón verde **`<> Code`**.
3. Selecciona **"Download ZIP"**.
4. Extrae el archivo ZIP en la ubicación que prefieras (clic derecho → Extraer aquí).
5. Abre una terminal y navega a la carpeta extraída:
   ```bash
   cd proyecto-postres
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

---



 
