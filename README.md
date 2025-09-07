# GameVibe - Tienda Online de Juegos

## Descripción
GameVibe es una tienda online de juegos de mesa y electrónicos que ofrece productos destacados, noticias y contacto con los usuarios. El proyecto está construido utilizando **HTML**, **CSS**, **JavaScript** y **Bootstrap 5** para un diseño responsivo y moderno....

---

## Estructura del Proyecto

```
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
│   ├── formularioContacto.js
│   ├── load-product.js
│   ├── login-registro.js
│   └── render-consoles.js
│
├── admin.html
├── Blogs.html
├── carrito.html
├── categorias.html
├── Coleccionables.html
├── Consolas.html
├── Contacto.html
├── DetalleProducto.html
├── Game_Vibe_Store.html
├── JuegosdeMesa.html
├── Login.html
├── Perifericos.html
├── registro.html
└── SobreNosotros.html
```

---

## Funcionalidades Clave

### 1. Gestión Dinámica de Productos
Para facilitar el mantenimiento, todo el catálogo de la tienda se gestiona desde `data/products.json`.
-   **Carga Asíncrona**: El script `Javascript/load-product.js` utiliza la función `fetch` para leer los datos del JSON de forma asíncrona.
-   **Renderizado por Categoría**: El script `Javascript/render-consoles.js` es un ejemplo de cómo se filtran y renderizan dinámicamente los productos en el DOM para las páginas de categorías, creando las tarjetas de producto sin necesidad de escribir HTML repetitivo.

### 2. Formularios con Validación
La lógica de los formularios de usuario se centraliza en `Javascript/login-registro.js`, ofreciendo un feedback instantáneo al usuario.

-   **Formulario de Registro y Login**: Se gestionan las validaciones para los campos de los archivos `Login.html` y `registro.html`.
-   **Formulario de Contacto**:
    -   El script `Javascript/formularioContacto.js` maneja los **selects anidados** de Región y Comuna, actualizando las opciones de Comuna en función de la Región seleccionada por el usuario.

### 3. Componentes Reutilizables
-   El `Navbar` y el `Footer` son componentes modulares cargados en todas las páginas mediante JavaScript. Esto permite hacer cambios en la navegación o en el pie de página modificando un solo archivo (`components/navbar.html` y `components/footer.html`).

---

## Tecnologías Utilizadas
-   **HTML5**
-   **CSS3**
-   **JavaScript**
-   **Bootstrap 5**
-   **JSON**: Como base de datos estática para el catálogo de productos.

---

## Cómo Ejecutar el Proyecto

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/JaimeLoff/TIENDA_GAMER_VIBE.git
    ```

2.  Navegar a la carpeta:
    ```bash
    cd TIENDA_GAMER_VIBE
    ```

3.  Abrir cualquier archivo `.html` en tu navegador web.

---

## Próximas Mejoras
-   **Funcionalidad Completa del Carrito**: Implementar la lógica en `carrito.html` para añadir, eliminar y actualizar la cantidad de productos, calculando el subtotal y total.
-   **Integración con Backend**: Conectar el frontend a un servidor para gestionar usuarios, persistir datos en una base de datos y procesar pagos.
-   **Filtros y Búsqueda de Productos**: Añadir una barra de búsqueda y filtros dinámicos en las páginas de categorías para mejorar la experiencia de navegación.
-   **Optimización de Rendimiento**: Implementar "lazy loading" para las imágenes de los productos para acelerar los tiempos de carga inicial.