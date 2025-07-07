const botonCarrito = document.getElementById('boton-carrito');
const carritoLateral = document.getElementById('carrito-lateral');
const cerrarCarritoBtn = document.getElementById('cerrar-carrito');
const carritoContenido = document.getElementById('carrito-contenido');
const contadorCarrito = document.getElementById('contador-carrito');
const totalCarrito = document.getElementById('total-carrito');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const comprarCarritoBtn = document.getElementById('comprar-carrito');
const overlayCarrito = document.getElementById('overlay-carrito');

let carrito = [];

function guardarCarrito() {
  localStorage.setItem('karosCarrito', JSON.stringify(carrito));
}

function cargarCarrito() {
  const data = localStorage.getItem('karosCarrito');
  carrito = data ? JSON.parse(data) : [];
}

function actualizarContador() {
  const totalItems = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  contadorCarrito.textContent = totalItems;
  contadorCarrito.style.display = totalItems > 0 ? 'inline-block' : 'none';
}

function calcularTotal() {
  const total = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  totalCarrito.textContent = `$${total.toFixed(2)}`;
}

function renderizarCarrito() {
  carritoContenido.innerHTML = '';

  if (carrito.length === 0) {
    carritoContenido.innerHTML = '<p>Tu carrito está vacío.</p>';
    totalCarrito.textContent = '$0.00';
    return;
  }

  carrito.forEach(prod => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto-carrito');

    productoDiv.innerHTML = `
      <img src="${prod.imagen}" alt="${prod.nombre}" />
      <div class="producto-carrito-info">
        <h5>${prod.nombre}</h5>
        <p class="precio">Precio: $${prod.precio.toFixed(2)}</p>
        <p class="subtotal">Subtotal: $${(prod.precio * prod.cantidad).toFixed(2)}</p>
      </div>
      <div class="producto-carrito-cantidad">
        <button class="btn-disminuir" aria-label="Disminuir cantidad de ${prod.nombre}">−</button>
        <input type="number" min="1" max="99" value="${prod.cantidad}" aria-label="Cantidad de ${prod.nombre}" />
        <button class="btn-aumentar" aria-label="Aumentar cantidad de ${prod.nombre}">+</button>
        <button class="btn-eliminar" aria-label="Eliminar ${prod.nombre} del carrito">×</button>
      </div>
    `;

    carritoContenido.appendChild(productoDiv);

    // Event listeners para botones y input
    const btnDisminuir = productoDiv.querySelector('.btn-disminuir');
    const btnAumentar = productoDiv.querySelector('.btn-aumentar');
    const btnEliminar = productoDiv.querySelector('.btn-eliminar');
    const inputCantidad = productoDiv.querySelector('input[type="number"]');

    btnDisminuir.addEventListener('click', () => {
      if (prod.cantidad > 1) {
        prod.cantidad--;
        guardarCarrito();
        renderizarCarrito();
        actualizarContador();
        calcularTotal();
      }
    });

    btnAumentar.addEventListener('click', () => {
      if (prod.cantidad < 99) {
        prod.cantidad++;
        guardarCarrito();
        renderizarCarrito();
        actualizarContador();
        calcularTotal();
      }
    });

    inputCantidad.addEventListener('change', (e) => {
      let val = parseInt(e.target.value);
      if (isNaN(val) || val < 1) val = 1;
      if (val > 99) val = 99;
      prod.cantidad = val;
      e.target.value = val;
      guardarCarrito();
      renderizarCarrito();
      actualizarContador();
      calcularTotal();
    });

    btnEliminar.addEventListener('click', () => {
      carrito = carrito.filter(p => p.id !== prod.id);
      guardarCarrito();
      renderizarCarrito();
      actualizarContador();
      calcularTotal();
    });
  });
}

function abrirCarrito() {
  carritoLateral.classList.add('active');
  carritoLateral.setAttribute('aria-hidden', 'false');
  overlayCarrito.classList.add('active');
  botonCarrito.setAttribute('aria-expanded', 'true');
  carritoLateral.focus();
}

function cerrarCarrito() {
  carritoLateral.classList.remove('active');
  carritoLateral.setAttribute('aria-hidden', 'true');
  overlayCarrito.classList.remove('active');
  botonCarrito.setAttribute('aria-expanded', 'false');
  botonCarrito.focus();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  renderizarCarrito();
  actualizarContador();
  calcularTotal();
}

function simularCompra() {
  if (carrito.length === 0) {
    alert('El carrito está vacío. Agrega productos para simular la compra.');
    return;
  }
  alert('¡Gracias por tu compra! (Simulación)');
  vaciarCarrito();
}

export function initCarrito() {
  cargarCarrito();
  actualizarContador();
  calcularTotal();
  renderizarCarrito();

  botonCarrito.addEventListener('click', abrirCarrito);
  cerrarCarritoBtn.addEventListener('click', cerrarCarrito);
  overlayCarrito.addEventListener('click', cerrarCarrito);
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
  comprarCarritoBtn.addEventListener('click', simularCompra);

  // Agregar productos desde botones "Agregar al carrito"
  document.addEventListener('click', e => {
    if (e.target.classList.contains('add-carrito')) {
      const idProducto = Number(e.target.dataset.id);
      agregarProducto(idProducto);
    }
  });

  // Cerrar carrito con Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && carritoLateral.classList.contains('active')) {
      cerrarCarrito();
    }
  });
}

function agregarProducto(id) {
  // Pedimos productos para simular (podrías usar la API o almacenar productos en memoria)
  fetch('https://fakestoreapi.com/products/' + id)
    .then(res => res.json())
    .then(prod => {
      const productoEnCarrito = carrito.find(p => p.id === prod.id);
      if (productoEnCarrito) {
        if (productoEnCarrito.cantidad < 99) {
          productoEnCarrito.cantidad++;
        }
      } else {
        carrito.push({
          id: prod.id,
          nombre: prod.title,
          precio: prod.price,
          cantidad: 1,
          imagen: prod.image,
        });
      }
      guardarCarrito();
      renderizarCarrito();
      actualizarContador();
      calcularTotal();
      abrirCarrito();
    })
    .catch(err => {
      console.error('Error agregando producto:', err);
      alert('Error al agregar producto. Intenta nuevamente.');
    });
}
