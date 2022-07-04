import { bookList } from '../modules/BookList.js';
import displayBook from './BookSection.js';

const bookListSection = document.createElement('section');
bookListSection.id = 'list';
bookListSection.innerHTML = '<h2>Book List</h2>';

export const booksList = document.createElement('div');
booksList.className = 'books-container';

if (bookList.books.length === 0) {
  const emptyMessage = document.createElement('p');
  emptyMessage.textContent = 'No books found!';
  booksList.appendChild(emptyMessage);
} else {
  bookList.books.forEach((book) => {
    booksList.appendChild(displayBook(book));
  });
}

bookListSection.appendChild(booksList);

export default bookListSection;