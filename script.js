let cartCount = 0;
let cartItems = [];

const cartCountEl = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItemsEl = document.getElementById("cart-items");
const toast = document.getElementById("toast");

document.querySelectorAll(".add-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    const card = this.closest(".product-card");
    const name = card.getAttribute("data-name");
    const price = card.getAttribute("data-price");

    cartItems.push({ name, price });
    cartCount++;
    cartCountEl.textContent = cartCount;

    showToast(`${name} added to cart!`);
  });
});

document.getElementById("cart-btn").addEventListener("click", () => {
  renderCart();
  cartModal.classList.remove("hidden");
});

document.querySelector(".close-btn").addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

function renderCart() {
  cartItemsEl.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rs. ${item.price}`;
    cartItemsEl.appendChild(li);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 2000);
}

// Form submission
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  showToast("Thanks for contacting us!");
  e.target.reset();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Mobile nav toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("navbar").classList.toggle("show");
});
