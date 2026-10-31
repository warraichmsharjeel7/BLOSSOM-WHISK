// 1. Array of 15 Verified High-Quality Cake Images (Including fixed 3rd, 9th, and 12th cards)
const cakes = [
  { id: 1, title: 'Belgian Truffle Ganache', category: 'chocolate', price: 45.00, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80', desc: 'Moist dark chocolate sponge coated in silky 70% Belgian cocoa.' },
  { id: 2, title: 'Peach Strawberry Chiffon', category: 'fruity', price: 42.00, image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80', desc: 'Whipped vanilla cream with fresh peach slices and organic strawberry layers.' },
  { id: 3, title: 'Pink Floral Sovereign 3-Tier', category: 'wedding', price: 150.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCLA4zSRWHkT7qU7GFPhYc-UpRJRI-C7EfpDUUSvomhcksY0TZV_EU3k&s=10', desc: 'Two-tier velvet vanilla sponge adorned with edible pressed sugar petals.' }, // Fixed 3rd card image
  { id: 4, title: 'Mango Passion Fruit Delight', category: 'fruity', price: 38.00, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80', desc: 'Tropical Alphonso mango mousse with passion fruit glaze drizzle.' },
  { id: 5, title: 'Classic Crimson Red Velvet', category: 'chocolate', price: 44.00, image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=600&q=80', desc: 'Tangy cream cheese frosting between layers of cocoa red velvet.' },
  { id: 6, title: 'New York Blueberry Cheesecake', category: 'cheesecake', price: 40.00, image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80', desc: 'Baked dense cream cheese on a graham crust topped with wild blueberries.' },
  { id: 7, title: 'Dark Truffle Fudge Cake', category: 'chocolate', price: 48.00, image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80', desc: 'Indulgent triple dark chocolate fudge sponge for cocoa lovers.' },
  { id: 8, title: 'Wild Raspberry Blossom', category: 'fruity', price: 39.50, image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=600&q=80', desc: 'Soft sponge soaked in raspberry syrup and layered with fresh berries.' },
  { id: 9, title: 'Royal Wedding Grace', category: 'wedding', price: 175.00, image: 'https://hips.hearstapps.com/hmg-prod/images/the-wedding-cake-created-by-baker-sophie-cabot-for-the-news-photo-1051962884-1539352893.jpg?crop=1xw:1xh;center,top&resize=980:*', desc: 'Luxurious multi-tiered white wedding cake with intricate fondant lace.' }, // Fixed 9th card image
  { id: 10, title: 'Strawberry Cream Sponge', category: 'fruity', price: 41.00, image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=600&q=80', desc: 'Fresh whipped farm cream layered with sweet strawberries.' },
  { id: 11, title: 'Salted Caramel Drizzle', category: 'chocolate', price: 43.00, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=600&q=80', desc: 'Butterscotch cream with homemade salted caramel and chocolate pralines.' },
  { id: 12, title: 'Berry Mousse Layered', category: 'fruity', price: 37.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACs2hxMxj_z_LiRhg3q6mIHjMCFct_rGUelqbg0p_1A&s=10', desc: 'Berry curd sponge paired with light sweet cream and blackberries.' }, // Fixed 12th card image (removed cat image)
  { id: 13, title: 'Golden Biscoff Lotus', category: 'cheesecake', price: 47.00, image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=600&q=80', desc: 'Spiced Lotus Biscoff cookie spread layered with whipped mascarpone.' },
  { id: 14, title: 'Pastel Celebration Tier', category: 'wedding', price: 130.00, image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=600&q=80', desc: 'Elegant celebration cake decorated with pastel cream piping.' },
  { id: 15, title: 'Chocolate Drip Delight', category: 'chocolate', price: 49.00, image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=600&q=80', desc: 'Rich chocolate mousse sponge covered in dark chocolate drip.' }
];

// State Management
let cart = JSON.parse(localStorage.getItem('BAKERY_CART')) || [];
let activeCategory = 'all';

// Theme Changer Function
function setTheme(themeName) {
  document.documentElement.setAttribute('data-theme', themeName);
  localStorage.setItem('BAKERY_THEME', themeName);
}

// Initialize Theme from LocalStorage
const savedTheme = localStorage.getItem('BAKERY_THEME') || 'pastel';
setTheme(savedTheme);

// 2. Render Products Grid (15 Cards)
function renderCakes(items) {
  const grid = document.getElementById('cake-grid');
  if (!grid) return;

  if (items.length === 0) {
    grid.innerHTML = `<div class="col-span-full text-center py-12 opacity-60">No cakes found matching your search.</div>`;
    return;
  }

  grid.innerHTML = items.map(cake => `
    <div class="cake-card bg-card-bg rounded-3xl p-4 sm:p-5 border border-accent flex flex-col justify-between group shadow-sm">
      <div>
        <div class="relative overflow-hidden rounded-2xl mb-4 h-48 sm:h-56">
          <img src="${cake.image}" alt="${cake.title}" class="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500">
          <span class="absolute top-3 left-3 bg-card-bg/90 backdrop-blur-md text-main text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-accent">
            ${cake.category}
          </span>
        </div>
        <h3 class="font-serif text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">${cake.title}</h3>
        <p class="text-xs opacity-75 mt-2 leading-relaxed">${cake.desc}</p>
      </div>

      <div class="flex justify-between items-center mt-6 pt-4 border-t border-accent/40">
        <span class="font-serif text-xl sm:text-2xl font-bold text-primary">$${cake.price.toFixed(2)}</span>
        <button onclick="addToCart(${cake.id}, '${cake.title}', ${cake.price}, '${cake.image}')" class="bg-primary text-white hover:opacity-90 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md transition-transform active:scale-95">
          <i class="fa-solid fa-plus"></i> Add
        </button>
      </div>
    </div>
  `).join('');
}

// 3. Filter & Search Functions
function filterCategory(cat) {
  activeCategory = cat;
  
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active-filter');
    if (btn.innerText.toLowerCase() === cat || (cat === 'all' && btn.innerText.toLowerCase() === 'all')) {
      btn.classList.add('active-filter');
    }
  });

  const filtered = cat === 'all' ? cakes : cakes.filter(c => c.category === cat);
  renderCakes(filtered);
}

document.getElementById('search-input')?.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = cakes.filter(cake => 
    (activeCategory === 'all' || cake.category === activeCategory) &&
    (cake.title.toLowerCase().includes(term) || cake.desc.toLowerCase().includes(term))
  );
  renderCakes(filtered);
});

// 4. Cart Logic
function saveCart() {
  localStorage.setItem('BAKERY_CART', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id, title, price, image) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, title, price: parseFloat(price), image, qty: 1 });
  }
  saveCart();
  openCartDrawer();
}

function updateCartQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
}

function updateCartUI() {
  const cartBadge = document.getElementById('cart-badge-count');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartTotalPrice = document.getElementById('cart-total-price');

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  if (cartBadge) cartBadge.innerText = totalQty;
  if (cartTotalPrice) cartTotalPrice.innerText = `$${totalAmount.toFixed(2)}`;

  if (cartItemsContainer) {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="text-center py-10 opacity-50 space-y-2">
          <div class="text-4xl">🧁</div>
          <p class="text-xs font-semibold">Your cart is empty.</p>
        </div>`;
      return;
    }

    cartItemsContainer.innerHTML = cart.map((item, index) => `
      <div class="flex items-center gap-3 bg-main p-3 rounded-2xl border border-accent shadow-sm">
        <img src="${item.image}" alt="${item.title}" class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover">
        <div class="flex-1">
          <h4 class="font-bold text-xs line-clamp-1">${item.title}</h4>
          <p class="text-xs text-primary font-bold mt-0.5">$${(item.price * item.qty).toFixed(2)}</p>
          <div class="flex items-center gap-2 mt-1.5">
            <button onclick="updateCartQty(${index}, -1)" class="w-5 h-5 rounded bg-card-bg border border-accent flex items-center justify-center text-xs font-bold">-</button>
            <span class="text-xs font-bold">${item.qty}</span>
            <button onclick="updateCartQty(${index}, 1)" class="w-5 h-5 rounded bg-primary text-white flex items-center justify-center text-xs font-bold">+</button>
          </div>
        </div>
        <button onclick="updateCartQty(${index}, -${item.qty})" class="text-red-400 hover:text-red-600 text-xs p-1">✕</button>
      </div>
    `).join('');
  }
}

// Drawer Handlers
function openCartDrawer() {
  document.getElementById('cart-drawer')?.classList.add('cart-drawer-open');
}

function closeCartDrawer() {
  document.getElementById('cart-drawer')?.classList.remove('cart-drawer-open');
}

// 5. Custom Cake Studio Price Calculation
function calcCustomPrice() {
  const flavor = parseFloat(document.getElementById('custom-flavor').value);
  const size = parseFloat(document.getElementById('custom-size').value);
  let toppings = 0;
  
  document.querySelectorAll('.custom-topping:checked').forEach(c => {
    toppings += parseFloat(c.value);
  });

  const total = (flavor * size) + toppings;
  document.getElementById('custom-total-display').innerText = `$${total.toFixed(2)}`;
}

function addCustomCakeToCart() {
  const price = parseFloat(document.getElementById('custom-total-display').innerText.replace('$', ''));
  const flavorSelect = document.getElementById('custom-flavor');
  const flavorName = flavorSelect.options[flavorSelect.selectedIndex].text.split('(')[0].trim();

  addToCart(Date.now(), `Custom Cake (${flavorName})`, price, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JZQkf9bb65dBWhqsdky_DMh6n9J1PPhWFvNgEyPXaA&s=10');
}

// 6. Simple Order Button Alert Handler (No WhatsApp)
function checkoutOrder() {
  if (cart.length === 0) {
    alert("Please add items to your cart first!");
    return;
  }

  const name = document.getElementById('cust-name').value.trim();
  const address = document.getElementById('cust-address').value.trim();

  if (!name || !address) {
    alert("Please enter your Name and Delivery Address.");
    return;
  }

  // Clear cart and show success alert
  alert("Your order is done! Thank you for choosing Blossom & Whisk.");
  cart = [];
  saveCart();
  closeCartDrawer();
  document.getElementById('cust-name').value = '';
  document.getElementById('cust-address').value = '';
}

// DOM Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderCakes(cakes);
  updateCartUI();

  document.getElementById('cart-open-btn')?.addEventListener('click', openCartDrawer);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCartDrawer);
});