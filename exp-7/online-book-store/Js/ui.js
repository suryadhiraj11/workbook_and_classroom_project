// ui.js
import { getCart, removeFromCart, calculateTotal } from './cart.js';

export function updateCartUI() {
  const cartContent = document.getElementById('cart-content');
  const totalElement = document.getElementById('total');
  const cart = getCart();

  if (cart.length === 0) {
    cartContent.innerHTML = '<p>Your cart is empty.</p>';
    totalElement.textContent = '';
    return;
  }

  let tableHTML = `
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
  `;

  cart.forEach(item => {
    tableHTML += `
      <tr>
        <td>${item.title}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td>${item.quantity}</td>
        <td><button class="remove-btn" data-title="${item.title}">Remove</button></td>
      </tr>
    `;
  });

  tableHTML += `</tbody></table>`;
  cartContent.innerHTML = tableHTML;
  totalElement.textContent = `Total: $${calculateTotal().toFixed(2)}`;

  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const title = e.target.dataset.title;
      removeFromCart(title);
      updateCartUI();
    });
  });
}
