# 📘 Documentación de la API REST - Gestión de Stock

Esta API permite gestionar el inventario de **Productos** y la agenda de **Proveedores** para el sistema de control de stock.

## 🌐 Configuración Base

* **Servidor:** `http://localhost:3000`
* **Prefijo de la API:** `/api/v1`

---

## 📦 Recurso: Productos

Gestión del inventario de componentes electrónicos.

### 1. Obtener todos los productos
Devuelve la lista completa de productos disponibles.

* **Método:** `GET`
* **URL:** `/api/v1/productos`
* **Respuesta Exitosa (200 OK):**
    ```json
    [
      {
        "id": 1,
        "codigo": "CPU-001",
        "nombre": "Procesador Intel Core i5",
        "marca": "Intel",
        "stock": 15
      },
      ...
    ]
    ```

### 2. Obtener un producto por ID
Busca un producto específico.

* **Método:** `GET`
* **URL:** `/api/v1/productos/1`

### 3. Crear un nuevo producto
Agrega un ítem al inventario.

* **Método:** `POST`
* **URL:** `/api/v1/productos`
* **Cuerpo (JSON):**
    ```json
    {
      "codigo": "MEM-005",
      "nombre": "Memoria RAM 32GB",
      "marca": "HyperX",
      "stock": 10
    }
    ```

### 4. Actualizar un producto
Modifica los datos de un producto existente.

* **Método:** `PUT`
* **URL:** `/api/v1/productos/1`
* **Cuerpo (JSON):**
    ```json
    {
      "nombre": "Procesador Intel Core i7",
      "stock": 5
    }
    ```

### 5. Eliminar un producto
Borra un producto de la base de datos.

* **Método:** `DELETE`
* **URL:** `/api/v1/productos/1`

---

## 🚚 Recurso: Proveedores

Gestión de la agenda de proveedores de electrónica.

### 1. Obtener todos los proveedores
* **Método:** `GET`
* **URL:** `/api/v1/proveedores`
* **Respuesta Exitosa (200 OK):**
    ```json
    [
      {
        "id": 1,
        "nombre": "TecnoGlobal",
        "telefono": "11-5555-9999",
        "email": "contacto@tecnoglobal.com"
      }
    ]
    ```

### 2. Crear un nuevo proveedor
* **Método:** `POST`
* **URL:** `/api/v1/proveedores`
* **Cuerpo (JSON):**
    ```json
    {
      "nombre": "Electro Mundo",
      "telefono": "11-4444-2222",
      "email": "ventas@electromundo.com"
    }
    ```

### 3. Actualizar un proveedor
* **Método:** `PUT`
* **URL:** `/api/v1/proveedores/1`
* **Cuerpo (JSON):**
    ```json
    {
      "telefono": "11-9999-0000"
    }
    ```

### 4. Eliminar un proveedor
* **Método:** `DELETE`
* **URL:** `/api/v1/proveedores/1`

---

## 🛠️ Tecnologías
* **Node.js & Express:** Servidor Web.
* **PostgreSQL:** Base de Datos.
* **Docker:** Contenedorización (Opcional).