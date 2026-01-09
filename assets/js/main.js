// Basic mobile interactions
const cartCountEl = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");
const shopNowBtn = document.getElementById("shopNowBtn");
const viewCartBtn = document.getElementById("viewCartBtn");
const searchBtn = document.getElementById("searchBtn");
const menuBtn = document.getElementById("menuBtn");

let cartCount = 0;
let cartTotal = 0;

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}


document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const price = Number(button.dataset.price || 0);
    cartCount += 1;
    cartTotal += price;
    cartCountEl.textContent = cartCount;
    cartTotalEl.textContent = cartTotal.toLocaleString("en-IN");
    button.textContent = "Added";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "Add";
      button.disabled = false;
    }, 1200);
  });
});

if (shopNowBtn) {
  shopNowBtn.addEventListener("click", () => {
    const products = document.getElementById("products");
    if (products) {
      products.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (viewCartBtn) {
  viewCartBtn.addEventListener("click", () => {
    alert(`Cart: ${cartCount} item(s), total ₹${cartTotal.toLocaleString("en-IN")}`);
  });
}

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    alert("Search coming soon.");
  });
}

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    alert("Menu coming soon.");
  });
}


// Shop page functionality
if (document.querySelector('.shop-page')) {
  const productsDataEl = document.getElementById('products-data');
  const productsData = JSON.parse(productsDataEl.textContent);
  const listingEl = document.getElementById('listing');
  const detailEl = document.getElementById('detail');
  const activeDetailEl = document.getElementById('active-product-detail');
  const backBtn = document.getElementById('backToList');

  // Show product detail on click
  listingEl.addEventListener('click', (e) => {
    const productEl = e.target.closest('[data-product]');
    if (productEl) {
      const handle = productEl.dataset.product;
      const product = productsData.find(p => p.handle === handle);
      if (product) {
        showProductDetail(product);
        updateUrl(product.handle);
        listingEl.style.display = 'none';
        detailEl.style.display = 'block';
        window.scrollTo(0, 0);
      }
    }
  });

  // Back to listing
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      listingEl.style.display = 'grid';
      detailEl.style.display = 'none';
      clearUrl();
    });
  }

  function showProductDetail(product) {
    activeDetailEl.innerHTML = `
      <div class="product-detail-main">
        <div class="product-detail-image">
          ${product.image_url ? 
            `<img src="${product.image_url}" alt="${product.name} saree" />` : 
            '<div class="image-placeholder">Image coming soon</div>'
          }
        </div>
        <div class="product-detail-info">
          <div class="product-detail-badge">${product.badge}</div>
          <h1 class="product-detail-name">${product.name}</h1>
          <p class="product-detail-meta">${product.type} • ${product.color}</p>
          <div class="product-detail-price">
            ₹${product.price.toLocaleString('en-IN')}
            ${product.compare_at_price ? `<span>₹${product.compare_at_price.toLocaleString('en-IN')}</span>` : ''}
          </div>
          <button class="btn-primary add-to-cart" 
                  data-name="${product.name}" 
                  data-price="${product.price}">
            Add to cart <span>＋</span>
          </button>
          ${product.description ? `<div class="product-description">${product.description.replace(/\n/g, '<br>')}</div>` : ''}
        </div>
      </div>
    `;
    
    // Re-attach cart button listeners
    attachCartListeners();
  }

  function updateUrl(handle) {
    const url = new URL(window.location);
    url.searchParams.set('product', handle);
    window.history.replaceState({}, '', url);
  }

  function clearUrl() {
    const url = new URL(window.location);
    url.searchParams.delete('product');
    window.history.replaceState({}, '', url.pathname);
  }

  // Check URL on load for direct link
  const urlParams = new URLSearchParams(window.location.search);
  const urlHandle = urlParams.get('product');
  if (urlHandle) {
    const product = productsData.find(p => p.handle === urlHandle);
    if (product) {
      showProductDetail(product);
      listingEl.style.display = 'none';
      detailEl.style.display = 'block';
    }
  }
}


function attachCartListeners() {
  document.querySelectorAll(".add-to-cart").forEach(button => {
    button.removeEventListener('click', handleCartClick); // Prevent duplicates
    button.addEventListener('click', handleCartClick.bind(button));
  });
}

function handleCartClick() {
  const price = Number(this.dataset.price || 0);
  cartCount += 1;
  cartTotal += price;
  cartCountEl.textContent = cartCount;
  cartTotalEl.textContent = cartTotal.toLocaleString("en-IN");
  this.textContent = "Added!";
  this.disabled = true;
  setTimeout(() => {
    this.textContent = "Add";
    this.disabled = false;
  }, 1200);
}

attachCartListeners(); // Initial attach


// Shop page functionality
if (document.querySelector('.shop-page')) {
  const listingEl = document.getElementById('listing');
  const detailEl = document.getElementById('detail');
  const backBtn = document.getElementById('backToList');

  // Show product detail on click
  listingEl.addEventListener('click', (e) => {
    const productLink = e.target.closest('.product-link');
    if (productLink) {
      const handle = productLink.closest('[data-product]').dataset.product;
      const detailSection = document.getElementById(`product-${handle}`);
      if (detailSection) {
        listingEl.style.display = 'none';
        detailEl.style.display = 'block';
        detailSection.style.display = 'block';
        window.scrollTo(0, 0);
        updateUrl(handle);
      }
    }
  });

  // Back to listing
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      listingEl.style.display = 'grid';
      detailEl.style.display = 'none';
      document.querySelectorAll('.product-detail').forEach(el => {
        el.style.display = 'none';
      });
      clearUrl();
    });
  }

  function updateUrl(handle) {
    const url = new URL(window.location);
    url.hash = `product-${handle}`;
    window.history.replaceState({}, '', url);
  }

  function clearUrl() {
    const url = new URL(window.location);
    url.hash = '';
    window.history.replaceState({}, '', url.pathname);
  }

  // Load from hash on page load
  if (window.location.hash) {
    const handle = window.location.hash.replace('#product-', '');
    const detailSection = document.getElementById(`product-${handle}`);
    if (detailSection) {
      listingEl.style.display = 'none';
      detailEl.style.display = 'block';
      detailSection.style.display = 'block';
    }
  }
}

// Rest of cart code unchanged...
