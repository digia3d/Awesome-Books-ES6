import Book from '../modules/Book.js';

const displayBook = (book) => {
  const bookHTML = document.createElement('div');
  bookHTML.className = 'book';
  bookHTML.innerHTML = `
          <p><q>${book.title}</q> by ${book.author}</p>`;

  const removeBtn = document.createElement('button');
  removeBtn.setAttribute('type', 'button');
  removeBtn.id = `remove-book-${book.id}`;
  removeBtn.classList.add('btn', 'btn-remove', 'clickeable');
  removeBtn.innerHTML = 'Remove';

  removeBtn.addEventListener('click', () => {
    const targetBook = new Book();
    targetBook.removeBook(book.id);
    removeBtn.parentElement.remove();
  });

  bookHTML.appendChild(removeBtn);

  return bookHTML;
};

export default displayBook;