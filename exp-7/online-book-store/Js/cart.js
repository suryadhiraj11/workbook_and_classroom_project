// cart.js
let cart = [];

export function addToCart(book) {
  const existing = cart.find(item => item.title === book.title);
  if (!existing) {
    cart.push({ ...book, quantity: 1 });
  } else {
    existing.quantity++;
  }
}

export function removeFromCart(title) {
  cart = cart.filter(item => item.title !== title);
}

export function getCart() {
  return cart;
}

export function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
