// Javascript/load-product.js
// Carga el producto desde data/products.json según ?id=... y rellena la plantilla
(async function () {
  function q(name) { return new URLSearchParams(location.search).get(name); }
  const id = q('id');

  try {
    const res = await fetch('data/products.json');
    if (!res.ok) throw new Error('products.json no encontrado');
    const products = await res.json();

    // CORRECCIÓN: Usamos == para comparar string con number si aplica
    const p = products.find(x => x.id == id) || products[0];
    if (!p) return console.error('Producto no encontrado');

    // helpers
    const byId = i => document.getElementById(i);

    if (byId('product-title')) byId('product-title').textContent = p.title || '';
    if (byId('product-sku')) byId('product-sku').textContent = p.sku || '';
    if (byId('product-price')) byId('product-price').textContent = p.price || '';
    if (byId('product-short')) byId('product-short').textContent = p.short || p.description || '';
    if (byId('product-shipping')) byId('product-shipping').textContent = p.shipping || '3-5 días hábiles';
    if (byId('product-stock')) byId('product-stock').textContent = p.stock || 'Disponible';

    // set dataset for add-to-cart reference
    const pageEl = byId('product-page');
    if (pageEl) pageEl.dataset.productId = p.id;

    // features
    const feat = byId('product-features');
    if (feat) {
      feat.innerHTML = '';
      (p.features || []).forEach(f => {
        const li = document.createElement('li');
        li.textContent = '• ' + f;
        feat.appendChild(li);
      });
    }

    // main image
    const mainImg = byId('product-image');
    if (mainImg) {
      mainImg.src = (p.images && p.images[0]) ? p.images[0] : (p.img || 'img/placeholder.png');
    }

    // breadcrumb
    const bc = byId('breadcrumb-category');
    if (bc) bc.textContent = p.category || 'Categoría';
    const bct = byId('breadcrumb-title');
    if (bct) bct.textContent = p.title || '';

    // related products
    const related = byId('related-products');
    if (related) {
      related.innerHTML = '';
      (p.related || []).map(rid => products.find(x => x.id == rid)).filter(Boolean).forEach(r => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
          <div class="card h-100">
            <img src="${(r.images && r.images[0]) || r.img || 'img/placeholder.png'}" class="card-img-top-fixed" alt="${r.title}">
            <div class="card-body">
              <h6 class="card-title mb-1">${r.title}</h6>
              <div class="text-muted small">${r.price || ''}</div>
              <a href="DetalleProducto.html?id=${r.id}" class="stretched-link"></a>
            </div>
          </div>`;
        related.appendChild(col);
      });
    }

    // add to cart (usa Cart global desde Javascript/carrito.js)
    const addBtn = document.getElementById('add-to-cart');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        if (typeof Cart === 'undefined') {
          console.error('El archivo Javascript/carrito.js no está cargado en el HTML.');
          return;
        }

        const qtyInput = document.getElementById('cantidad');
        const qty = Math.max(1, parseInt(qtyInput ? qtyInput.value : '1', 10));

        Cart.addItem({
          id: p.id,
          title: p.title,
          sku: p.sku || '',
          price: p.price || '',
          img: (p.images && p.images[0]) || p.img || 'img/placeholder.png'
        }, qty);

        // Feedback visual en el botón
        const orig = addBtn.innerHTML;
        addBtn.innerHTML = '¡Añadido! ✔';
        addBtn.disabled = true;
        setTimeout(() => {
          addBtn.innerHTML = orig;
          addBtn.disabled = false;
        }, 900);

        if (window.updateCartBadge) window.updateCartBadge();
      });
    }

  } catch (err) {
    console.error('Error cargando producto:', err);
  }
})();