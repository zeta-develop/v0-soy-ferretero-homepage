# Documentación de API - E-Shop SaaS

Esta documentación explica cómo conectar tu tienda en línea (storefront) o aplicación externa con el backend usando tu Clave de API.

## 1. Autenticación

Para realizar peticiones a la API desde tu tienda, debes usar una **Clave de API** generada desde tu panel de administración (Configuración > Claves de API).

### Cabecera de Autorización (Headers)
Todas las peticiones deben incluir la cabecera `Authorization` con el formato `Bearer`:

```http
Authorization: Bearer ek_tu_clave_secreta_aqui
```

> [!IMPORTANT]
> Tu Clave de API comienza con el prefijo `ek_`. Solo se muestra una vez al ser generada. Mantenla segura y úsala en tu backend de frontend o variables de entorno.

---

## 2. URL Base

La URL base por defecto para consumir la API es:
`http://localhost:3000/api/v1` (Deberás actualizar esto por tu dominio web cuando lo subas a producción).

---

## 3. Endpoints (Storefront - Solo Lectura)

> Las siguientes peticiones son de **solo lectura (GET)** y están diseñadas para que el front-end de tu **tienda** pueda estructurar el catálogo usando de forma segura una Clave de API. (No requiren tokens de sesión de usuario).

### Categorías (Categories)

#### Listar Categorías
Obtiene el listado paginado de categorías registradas en tu tienda. Ideal para construir tu menú de navegación.

- **URL**: `/categories`
- **Método**: `GET`
- **Parametros (Query Params)**:
  - `page`: (opcional) Número de página (por defecto: 1)
  - `limit`: (opcional) Resultados por página (por defecto: 10)

**Respuesta de Ejemplo**:
```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Electrónica",
      "parent_id": null,
      "tenant_id": "890h111...",
      "created_at": "2026-03-13T10:00:00Z"
    }
  ],
  "meta": { "page": 1, "limit": 10, "total": 1 }
}
```

---

### Productos (Products)

#### Listar Productos (Catálogo General)
Obtiene la lista de los productos bajo tu tienda. Retorna toda la información base, el ID de categoría y su cantidad de unidad de stock.

- **URL**: `/products`
- **Método**: `GET`
- **Parametros (Query Params)**:
  - `page`: (opcional) Número de página (por defecto: 1)
  - `limit`: (opcional) Resultados por página (por defecto: 10)

**Respuesta de Ejemplo**:
```json
{
  "data": [
    {
      "id": "123e4567-e89b-12d3-a456-426614174000",
      "name": "Smartphone XYZ",
      "sku": "SMART-XYZ",
      "price": 499.99,
      "stock": 50,
      "image_url": "https://es.ejemplo.png",
      "categories": { "name": "Electrónica" }
    }
  ],
  "meta": { "page": 1, "limit": 10, "total": 45 }
}
```

#### Obtener Detalles de un Producto (Producto Individual)
Saca todos los detalles de un producto en específico utilizando su ID. Ideal para tu "Vista de Detalles" del producto al hacerle clic.

- **URL**: `/products/{id}`
- **Método**: `GET`

**Respuesta de Ejemplo**:
```json
{
  "id": "123e4567-e89b-12d3-a456-426614174000",
  "name": "Smartphone XYZ",
  "description": "Un teléfono inteligente de última generación con cámara de 108MP.",
  "sku": "SMART-XYZ",
  "price": 499.99,
  "stock": 50,
  "image_url": "https://es.ejemplo.png",
  "categories": { "name": "Electrónica" }
}
```

---

## 4. Códigos de Error Comunes

La API de Storefronts maneja los estados genéricos de HTTP estándar:

- `200`: Éxito (OK).
- `401`: No Autorizado (La clave de API falta o es inválida).
- `404`: No Encontrado (El recurso solicitado no existe o el producto no te pertenece).
- `500`: Error Interno de Base de Datos.

---

## 5. Ejemplo de Código para Tienda o Storefront (TypeScript)

Podrás integrar una consulta a la API utilizando la función nativa de `fetch()` usando cualquier biblioteca de peticiones HTTP:

```javascript
const API_KEY = 'ek_tu_clave_de_api_aqui_generada_desde_tu_dashboard';
const BASE_URL = 'http://localhost:3000/api/v1';

// Función para obtener productos (para la página de tu Store)
async function fetchProducts(page = 1) {
  const response = await fetch(`${BASE_URL}/products?page=${page}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    const err = await response.json();
    console.error('Error al conectarse:', err.error);
    return;
  }

  const result = await response.json();
  console.log('Mis Productos:', result.data);
  console.log('Opciones de Paginación de UI:', result.meta);
}

// Ejecutar tu consulta para pintar el catálogo
fetchProducts();
```
