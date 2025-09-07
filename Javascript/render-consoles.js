// Carga data/products.json y renderiza los productos según la categoría especificada en el contenedor
(async function () {
  try {
    const res = await fetch('data/products.json');
    if (!res.ok) throw new Error('products.json no encontrado');
    const products = await res.json();

    const container = document.getElementById('consoles-grid') || document.getElementById('products-grid');
    if (!container) return;

    const category = (container.dataset.category || 'Consolas').toLowerCase();
    const items = products.filter(p => (p.category || '').toLowerCase() === category);
    if (items.length === 0) {
      container.innerHTML = '<p class="text-muted">No se encontraron productos.</p>';
      return;
    }

    // Render sólo con "Ver"
    container.innerHTML = items.map(p => `
      <div class="col">
        <div class="card h-100">
          <img src="${p.images && p.images[0] ? p.images[0] : 'img/placeholder.png'}" class="card-img-top-fixed" alt="${p.title}">
          <div class="card-body d-flex flex-column">
            <h6 class="card-title mb-1">${p.title}</h6>
            <p class="card-text text-muted small mb-2">${p.short || ''}</p>
            <div class="mt-auto d-flex justify-content-between align-items-center">
              <span class="fw-bold">${p.price || ''}</span>
              <a href="DetalleProducto.html?id=${encodeURIComponent(p.id)}" class="btn btn-sm btn-outline-secondary btn-view" data-id="${p.id}">Ver</a>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Delegación: loguear el objeto en consola al hacer click en "Ver" (luego navega a DetalleProducto)
    container.addEventListener('click', function (e) {
      const a = e.target.closest('.btn-view');
      if (!a) return;
      const id = a.dataset.id;
      const product = products.find(x => x.id === id);
      console.log('Producto seleccionado:', product);
      // no preventDefault -> permite la navegación al detalle
    });

  } catch (err) {
    console.error(err);
    const container = document.getElementById('consoles-grid') || document.getElementById('products-grid');
    if (container) container.innerHTML = '<p class="text-danger">Error cargando productos.</p>';
  }
})();