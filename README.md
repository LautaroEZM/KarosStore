# 🛒 Karos Store - Proyecto Web de E-Commerce Responsive

Este proyecto es una **tienda online de ropa moderna** que muestra productos en tarjetas responsivas usando Flexbox y Bootstrap. Incluye navegación sticky, carrito de compras dinámico, formulario funcional con Formspree, sección de reseñas y diseño completamente adaptable a dispositivos móviles.

---

## 🚀 Tecnologías usadas

- **HTML5**: Estructura semántica completa (header, nav, main, section, footer).
- **CSS3**: Modularizado por secciones, con estilos oscuros, transiciones y responsividad.
- **Bootstrap 5**: Estilos rápidos, botones, sistema de columnas.
- **Flexbox y Grid**: Organización visual de productos y reseñas.
- **JavaScript**: Modularizado en archivos independientes para funcionalidades específicas.
- **Fetch API**: Consumo de productos desde una API REST.
- **localStorage**: Persistencia del carrito de compras.
- **Formspree**: Manejo del formulario de contacto sin backend.
- **Media Queries**: Diseño responsive real.
- **Git & GitHub**: Control de versiones y hosting.

---

## ✨ Características principales

### 🛍️ Productos dinámicos
- Cargados desde `https://fakestoreapi.com/products?limit=8`
- Cards visuales con fondo blanco, imagen centrada, título truncado a dos líneas
- Botón "Agregar al carrito" funcional

### 🧺 Carrito de compras
- Botón flotante visible en toda la web
- Menú lateral derecho animado (responsive)
- Se actualiza en tiempo real y guarda el estado con `localStorage`
- Opciones: eliminar productos, vaciar carrito, simular compra

### 📱 Responsive total
- Layout fluido en todos los dispositivos
- Menú hamburguesa para móvil
- Carrito adaptado a pantallas pequeñas
- Diseño visualmente consistente con media queries

### 📨 Formulario de contacto
- Funcional a través de **Formspree**
- Campos requeridos con validación visual
- Envío seguro y sin backend propio

### ⭐ Reseñas
- Sección visual con estilo Grid
- Contenido actualmente estático (puede mejorarse con conexión real)

### ♿ Accesibilidad y SEO
- Etiquetas ARIA, roles, `tabindex` y atributos `alt` en imágenes
- `meta tags` en `<head>` para mejorar búsqueda y visibilidad

---

## 🌐 Hosting del proyecto

El sitio está desplegado con GitHub Pages y accesible aquí:

🔗 [https://lautaroezm.github.io/KarosStore/](https://lautaroezm.github.io/KarosStore/)

---

## 🧪 Cómo correrlo localmente

1. Cloná o descargá el repositorio.
2. Abrilo en Visual Studio Code.
3. Instalá y usá la extensión **Live Server** para evitar errores de CORS.
4. Hacé clic derecho en `index.html` y elegí **"Open with Live Server"**.

> ⚠️ Si abrís el HTML directamente con doble clic (file://), no funcionarán los scripts debido a restricciones de seguridad del navegador.

---

## 🧑‍💻 Autor

**Lautaro**  
Desarrollador web junior | Apasionado por la política, el diseño y el código.  
📍 Argentina

---

## 📄 Licencia

Proyecto realizado con fines educativos.  
Podés usarlo para aprender, modificarlo y adaptarlo libremente.
