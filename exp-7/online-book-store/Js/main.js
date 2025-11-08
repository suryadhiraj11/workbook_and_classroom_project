// main.js
import { loadBooks, renderBooks } from './bookList.js';
import { addToCart } from './cart.js';
import { updateCartUI } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  const books = await loadBooks();

  renderBooks(books, (book) => {
    addToCart(book);
    updateCartUI();
  });

  updateCartUI();
});
