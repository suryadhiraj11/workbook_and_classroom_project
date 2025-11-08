// bookList.js
export async function loadBooks() {
  const response = await fetch('../books.json');
  const books = await response.json();
  return books;
}

export function renderBooks(books, addToCartHandler) {
  const container = document.getElementById('books');
  container.innerHTML = '';

  books.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    bookDiv.innerHTML = `
      <div>
        <strong>${book.title}</strong><br>
        <small>by ${book.author}</small><br>
        <span>$${book.price.toFixed(2)}</span><br>
        <em>${book.availability}</em>
      </div>
      <button ${book.availability === 'Out of Stock' ? 'disabled' : ''} data-index="${index}">
        Add to Cart
      </button>
    `;

    const button = bookDiv.querySelector('button');
    button.addEventListener('click', () => addToCartHandler(book));

    container.appendChild(bookDiv);
  });
}
