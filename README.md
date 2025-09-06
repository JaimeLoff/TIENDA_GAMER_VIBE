# GameVibe - Tienda Online de Juegos

## Descripción
GameVibe es una tienda online de juegos de mesa y electrónicos que ofrece productos destacados, noticias y contacto con los usuarios. El proyecto está construido utilizando **HTML**, **CSS**, **JavaScript** y **Bootstrap 5** para un diseño responsivo y moderno.

---

## Estructura del Proyecto

```
TIENDA_GAMER_VIBE/
│
├── components/
│   ├── footer.html
│   └── navbar.html
│
├── css/
│   └── [estilos CSS, si los agregas]
│
├── img/
│   └── [imágenes usadas en el proyecto]
│
├── Javascript/
│   └── formularioContacto.js
│
├── Blogs.html
├── contacto.html
├── Game_Vibe_Store.html
├── login.html
└── SobreNosotros.html
```

---

## Funcionalidades

### Navbar
- Incluye enlaces a: `Sobre Nosotros`, `Categorías`, `Blogs` y `Contacto`.
- Botones para iniciar sesión y registrar usuario.
- Se carga dinámicamente desde `components/navbar.html`.

### Footer
- Información de derechos de autor.
- Iconos de métodos de pago.
- Se carga dinámicamente desde `components/footer.html`.

### Contacto
- Formulario con campos de:
  - Nombre completo
  - Correo electrónico
  - Contraseña y confirmación
  - Teléfono (+56 Chile)
  - Región y comuna (dinámico con JavaScript)
  - Mensaje
- Validación básica mediante `required`.
- Manejo de comunas por región en `Javascript/formularioContacto.js`.

### Páginas Principales
- **Game_Vibe_Store.html**: Página principal con banner, productos destacados y carrusel.
- **Blogs.html**: Noticias y casos destacados del mundo gamer.
- **SobreNosotros.html**: Información sobre la tienda y su misión.
- **login.html**: Formulario de inicio de sesión.
- **contacto.html**: Formulario de contacto.

---

## Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript
- Bootstrap 5

---

## Cómo Ejecutar el Proyecto
1. Clonar el repositorio:
```bash
git clone [URL-del-repositorio]
```
2. Abrir cualquier archivo `.html` directamente en el navegador.
3. Asegurarse de mantener la estructura de carpetas `components`, `img` y `Javascript`.

---

## Próximas Mejoras
- **Funcionalidad de carrito de compras**: Permitir a los usuarios seleccionar productos, agregarlos a un carrito y finalizar la compra.  
- **Integración con backend**: Implementar PHP o Node.js para procesar formularios y manejar usuarios registrados.  
- **Validación y seguridad avanzada**: Encriptación de contraseñas, validación de formularios más robusta y protección contra ataques comunes.  
- **Sistema de comentarios y reviews**: Permitir a los usuarios dejar reseñas en productos y artículos del blog.  
- **Filtro y búsqueda de productos**: Agregar funcionalidad de búsqueda y filtros por categoría, precio o popularidad.  
- **Optimización móvil y accesibilidad**: Mejoras adicionales para usuarios con dispositivos móviles y accesibilidad web.  
- **Animaciones y mejoras visuales**: Más interactividad y animaciones usando CSS y JavaScript para mejorar la experiencia de usuario.
