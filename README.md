# GameVibe - Tienda Online de Juegos

## Descripción

GameVibe es una tienda online de juegos de mesa, consolas, periféricos y coleccionables. El proyecto ofrece una experiencia interactiva para visualizar productos, gestionar un carrito de compras dinámico con persistencia local, validar accesos de usuario y simular pasarelas de pago.

Está desarrollado con **HTML5**, **CSS3**, **JavaScript (ES6)**, **Bootstrap 5** y **SweetAlert2** para lograr una interfaz moderna, limpia e intuitiva.

---

## Estructura del Proyecto

```text
TIENDA_GAME_VIBE/
│
├── components/
│   ├── footer.html
│   └── navbar.html
│
├── css/
│   └── style.css
│
├── data/
│   └── products.json
│
├── img/
│   └── (Imágenes, banners y logos del proyecto)
│
├── Javascript/
│   ├── carrito.js            # Lógica global del carrito, almacenamiento local y checkout con SweetAlert2
│   ├── formularioContacto.js # Selección dinámica de regiones y comunas
│   ├── load-product.js       # Carga y renderizado dinámico del detalle del producto
│   ├── login-registro.js     # Validaciones y autenticación (Usuario y Admin)
│   └── render-consoles.js    # Filtrado y renderizado por categorías
│
├── admin.html
├── Blogs.html
├── carrito.html              # Vista y gestión de ítems del carrito
├── categorias.html
├── Coleccionables.html
├── Consolas.html
├── Contacto.html
├── DetalleProducto.html      # Vista detallada de un producto específico
├── Game_Vibe_Store.html      # Tienda / Página principal
├── JuegosdeMesa.html
├── Login.html
├── Perifericos.html
├── registro.html
└── SobreNosotros.html
```

---

## Funcionalidades Clave

### 1. Gestión Dinámica de Productos y Detalles

- **Catálogo Centralizado**: Todos los datos se leen de forma asíncrona desde `data/products.json`.
- **Vista de Detalle (`load-product.js`)**: Lee el parámetro `?id=` de la URL para cargar el producto exacto, renderizando imagen principal, SKU, precio, características, productos relacionados y vinculando la cantidad al carrito.
- **Renderizado por Categorías (`render-consoles.js`)**: Filtra y genera las tarjetas en el DOM dinámicamente según la categoría activa.

### 2. Carrito de Compras Completo (`carrito.js`)

- **Persistencia en LocalStorage**: Mantiene los ítems guardados en la sesión del navegador (`gv_cart`).
- **Alertas Flotantes (Toast)**: Notificaciones visuales temporales al agregar productos exitosamente.
- **Gestión de Cantidades e Ítems**: Permite modificar la cantidad de unidades o eliminar productos directamente en `carrito.html`, calculando subtotales y el total en tiempo real (formato CLP).
- **Procesamiento de Pago (Checkout)**: Integración con **SweetAlert2** para simular la confirmación de pago con mensaje de procesamiento, redirección automática a la tienda y limpieza del carrito.

### 3. Autenticación y Formularios

- **Validación con SweetAlert2 (`login-registro.js`)**: Manejo dinámico de errores en Login y Registro con retroalimentación visual amigable.
- **Acceso Administrativo**: Detección de credenciales de administrador (`admin@gamevibe.com`) para redirigir a la vista `admin.html`.
- **Selects Anidados (`formularioContacto.js`)**: Menú desplegable dinámico de Región y Comuna para formularios de contacto o entrega.

### 4. Componentes Reutilizables

- Reutilización de `Navbar` y `Footer` en todo el sitio mediante peticiones `fetch`, manteniendo el código limpio y libre de duplicaciones.

---

## Tecnologías Utilizadas

- **HTML5** & **CSS3**
- **JavaScript (ES6)**
- **Bootstrap 5.3** (Estructura responsiva y componentes UI)
- **SweetAlert2** (Alertas modales interactivas)
- **JSON / LocalStorage** (Persistencia y mock de datos)

---

## Cómo Ejecutar el Proyecto

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/JaimeLoff/TIENDA_GAMER_VIBE.git
   ```

2. Navegar a la carpeta:

   ```bash
   cd TIENDA_GAMER_VIBE
   ```

3. Abrir `Game_Vibe_Store.html` (o cualquier otro archivo `.html`) en tu navegador web usando un servidor local, como **Live Server** de VS Code, para asegurar el correcto funcionamiento de las peticiones `fetch`.

---

## Próximas Mejoras

- **Integración con Backend (API REST/Node.js/Python)**: Conectar la aplicación a una base de datos real para la gestión persistente de usuarios, órdenes y productos.
- **Integración con Pasarela de Pago Real**: Conectar con pasarelas reales como Webpay Plus, MercadoPago o PayPal.
- **Filtros Avanzados y Buscador**: Incorporar una barra de búsqueda interactiva y filtros por rango de precio o fabricante en tiempo real.
- **Panel de Administración Dinámico (`admin.html`)**: Permitir la creación, edición y eliminación (CRUD) de productos desde la vista del administrador.
