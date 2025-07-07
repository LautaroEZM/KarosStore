import { initMenu } from './menu.js';
import { cargarProductos } from './productos.js';
import { initCarrito } from './carrito.js';

document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  cargarProductos();
  initCarrito();

  // Validación básica formulario contacto
  const form = document.querySelector('form');
  form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.classList.add('was-validated');
    }
  });
});
