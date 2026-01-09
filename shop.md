---
layout: default
title: Shop
permalink: /shop/
---

<main class="shop-page">
  <div class="section-heading">
    <h2>All sarees</h2>
  </div>

  <div class="products" id="product-grid">
    {% for p in site.data.products %}
      <article class="product" data-handle="{{ p.handle }}">
        <div class="product-thumb" data-handle="{{ p.handle }}">
          <div class="product-image">
            <span class="product-tag">{{ p.badge }}</span>
            {% if p.image_url %}
              <img src="{{ p.image_url | relative_url }}" alt="{{ p.name }}" />
            {% else %}
              <div class="image-placeholder">{{ p.name }}</div>
            {% endif %}
          </div>
          <h3 class="product-name">{{ p.name }}</h3>
              <p class="product-meta">{{ p.type }} • {{ p.color }}</p>
          <div class="product-bottom">
                <div class="price">
                  ₹{{ p.price }}
                  {% if p.compare_at_price %}
                    <span>₹{{ p.compare_at_price }}</span>
                  {% endif %}
                </div>
                <button class="btn-outline add-to-cart"
                        data-name="{{ p.name }}"
                        data-price="{{ p.price }}">
                  Add
                </button>
              </div>
        </div>
      </article>
    {% endfor %}
  </div>

  <!-- Detail Modal -->
  <div class="product-modal" id="product-modal">
    <div class="modal-overlay" id="modal-overlay"></div>
    <div class="modal-content">
      <button class="modal-close" id="modal-close">×</button>
      <div id="modal-body"></div>
    </div>
  </div>
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const grid = document.getElementById('product-grid');
  const modal = document.getElementById('product-modal');
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');
  
  // Click product → show modal
  grid.addEventListener('click', function(e) {
    const thumb = e.target.closest('.product-thumb');
    if (thumb) {
      const handle = thumb.dataset.handle;
      const product = {{ site.data.products | jsonify }};
      const p = product.find(item => item.handle === handle);
      if (p) {
        showProduct(p);
      }
    }
  });
  
  // Close modal
  function closeModal() {
    modal.style.display = 'none';
  }
  
  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  
  function showProduct(p) {
    modalBody.innerHTML = `
      <div class="detail-image">
        <img src="${p.image_url || '/assets/images/placeholder.png'}" alt="${p.name}">
      </div>
      <div class="detail-info">
        <h2>${p.name}</h2>
        <p>${p.type} • ${p.color}</p>
        <div class="detail-price">₹${p.price}</div>
        ${p.description ? `<div class="detail-desc">${p.description}</div>` : ''}
        <button class="add-cart">Add to Cart</button>
      </div>
    `;
    modal.style.display = 'flex';
  }
});
document.addEventListener('DOMContentLoaded', function() {
  const thumbs = document.querySelectorAll('.product-thumb');
  const modal = document.getElementById('product-modal');
  
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const handle = this.dataset.handle;
      const productData = {{ site.data.products | jsonify }};
      const product = productData.find(p => p.handle === handle);
      if (product) {
        // Fill modal with product data
        document.querySelector('#modal-name').textContent = product.name;
        document.querySelector('#modal-price').textContent = `₹${product.price}`;
        document.querySelector('#modal-desc').textContent = product.description || '';
        modal.style.display = 'flex';
      }
    });
  });
});
</script>

<style>
  /* Product Modal - Fullscreen Overlay */
.product-modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(4px);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: 1;
}

.modal-content {
  background: #ffffff;
  border-radius: 20px;
  max-width: 90vw;
  max-height: 90vh;
  width: 600px;
  height: 80vh;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.3);
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from { transform: scale(0.8) translateY(20px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 20px;
  background: none;
  border: none;
  font-size: 28px;
  color: #7b6b5a;
  cursor: pointer;
  z-index: 3;
  padding: 4px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(74, 11, 26, 0.1);
  color: var(--primary);
}

.modal-body {
  flex: 1;
  overflow-y: auto;
  padding: 0;
  display: flex;
  flex-direction: column;
}

/* Detail Layout */
.detail-main {
  display: flex;
  flex: 1;
  min-height: 0;
}

.detail-image {
  flex: 1;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fdf9f5;
}

.detail-image img {
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
}

.detail-info {
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-left: 1px solid rgba(0, 0, 0, 0.06);
}

.detail-badge {
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.detail-name {
  font-size: 28px;
  color: var(--primary);
  margin-bottom: 8px;
  line-height: 1.2;
}

.detail-meta {
  font-size: 15px;
  color: #6b5a4a;
  margin-bottom: 16px;
}

.detail-price {
  font-size: 24px;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 24px;
}

.detail-price span {
  font-size: 18px;
  color: #7b6b5a;
  text-decoration: line-through;
  margin-left: 12px;
}

.detail-desc {
  font-size: 14px;
  color: #6b5a4a;
  line-height: 1.6;
  margin-bottom: 24px;
}

.add-cart {
  background: var(--primary);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  align-self: flex-start;
}

.add-cart:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 25px rgba(74, 11, 26, 0.3);
}

/* Mobile */
@media (max-width: 640px) {
  .modal-content {
    width: 95vw;
    height: 95vh;
    margin: 10px;
  }
  
  .detail-main {
    flex-direction: column;
  }
  
  .detail-image {
    padding: 24px 16px;
    order: 2;
  }
  
  .detail-info {
    padding: 24px 16px;
    border-left: none;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    order: 1;
  }
  
  .detail-name {
    font-size: 24px;
  }
}

/* Product Grid Enhancement */
.product-thumb {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.product-thumb:hover {
  transform: translateY(-4px);
}

.product-thumb:hover .product-image {
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}

</style>
