// Javascript/carrito.js
const Cart = {
  // Convierte precios en formato texto ("$29.990") a valor numérico (29990)
  parsePrice(priceStr) {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    const clean = priceStr.toString().replace(/[^0-9,-]/g, '').replace(',', '.');
    return parseFloat(clean) || 0;
  },

  getCart() {
    return JSON.parse(localStorage.getItem('gv_cart') || '[]');
  },

  saveCart(cart) {
    localStorage.setItem('gv_cart', JSON.stringify(cart));
    if (window.updateCartBadge) window.updateCartBadge();
  },

  addItem(product, qty = 1) {
    const cart = this.getCart();
    const existingIndex = cart.findIndex(item => item.id === product.id);
    const priceNum = this.parsePrice(product.price);

    if (existingIndex > -1) {
      cart[existingIndex].qty += qty;
    } else {
      cart.push({
        id: product.id,
        title: product.title,
        sku: product.sku || '',
        price: product.price,
        priceNum: priceNum,
        img: product.img || 'img/placeholder.png',
        qty: qty
      });
    }

    this.saveCart(cart);
    this.showToastNotification(product.title, product.img);
  },

  removeItem(id) {
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== id);
    this.saveCart(cart);
  },

  updateQty(id, qty) {
    const cart = this.getCart();
    const item = cart.find(i => i.id === id);
    if (item) {
      item.qty = qty;
      this.saveCart(cart);
    }
  },

  clear() {
    localStorage.removeItem('gv_cart');
    if (window.updateCartBadge) window.updateCartBadge();
  },

  getTotal() {
    const cart = this.getCart();
    return cart.reduce((sum, item) => {
      const p = item.priceNum || this.parsePrice(item.price);
      return sum + (p * item.qty);
    }, 0);
  },

  // Alerta flotante cuando se añade un producto
  showToastNotification(title, img) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
      container.style.zIndex = '1100';
      document.body.appendChild(container);
    }

    const toastId = 'toast-' + Date.now();
    const toastHTML = `
      <div id="${toastId}" class="toast align-items-center text-bg-dark border-0 show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-2">
            <img src="${img || 'img/placeholder.png'}" style="width: 32px; height: 32px; object-fit: cover; border-radius: 4px;">
            <span><strong>${title}</strong> añadido al carrito correctamente.</span>
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
      </div>
    `;

    container.insertAdjacentHTML('beforeend', toastHTML);

    setTimeout(() => {
      const toastEl = document.getElementById(toastId);
      if (toastEl) toastEl.remove();
    }, 3000);
  },

  // LÓGICA DE PAGO CON SWEETALERT2
  processPayment(redirectUrl = 'Game_Vibe_Store.html') {
    const total = this.getTotal();

    // Si SweetAlert2 no está cargado, usa alert normal
    if (typeof Swal === 'undefined') {
      if (total <= 0) return alert('El carrito está vacío.');
      alert('Redirigiendo a la pasarela de pago...');
      this.clear();
      window.location.href = redirectUrl;
      return;
    }

    if (total <= 0) {
      Swal.fire({
        icon: 'warning',
        title: 'Carrito vacío',
        text: 'Añade productos antes de procesar el pago.',
        confirmButtonColor: '#0d6efd'
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: '¡Espere un momento!',
      text: 'Redirigiendo a la pasarela de pago...',
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      this.clear();
      window.location.href = redirectUrl;
    });
  }
};