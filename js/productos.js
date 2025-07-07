const API_URL = 'https://fakestoreapi.com/products?limit=8'; 

const contenedorProductos = document.getElementById('productos-container');

export async function cargarProductos() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Error al cargar productos');

    const productos = await res.json();

    contenedorProductos.innerHTML = '';

    productos.forEach(prod => {
      const card = document.createElement('article');
      card.classList.add('card');
      card.setAttribute('tabindex', '0');

      card.innerHTML = `
        <div class="img-wrapper">
          <img src="${prod.image}" alt="${prod.title}" />
        </div>
        <h5 class="card-title" title="${prod.title}">
          ${prod.title.length > 50 ? prod.title.slice(0, 50) + '...' : prod.title}
        </h5>
        <p class="price">$${prod.price.toFixed(2)}</p>
        <button class="btn btn-outline-dark mt-3 add-carrito" data-id="${prod.id}">
          Agregar al carrito
        </button>
      `;

      contenedorProductos.appendChild(card);
    });
  } catch (error) {
    contenedorProductos.innerHTML = `<p class="text-center text-danger">Error cargando productos.</p>`;
    console.error(error);
  }
}
