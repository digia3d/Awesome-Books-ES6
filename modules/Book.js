import { bookList } from './BookList.js';

export default class Book {
  constructor(title, author) {
    this.id = this.idMaker().next().value;
    this.title = title;
    this.author = author;
  }

  * idMaker() {
    if (localStorage.getItem('bookId')) {
      this.id = parseInt(localStorage.getItem('bookId'), 10);
    } else {
      this.id = 0;
    }
    while (true) yield (this.id += 1);
  }

  addBook() {
    bookList.books.push(this);
    localStorage.setItem('bookId', this.id);
    bookList.saveBooks();
  }

  removeBook(id) {
    this.id = id;
    bookList.books = bookList.books.filter((book) => book.id !== this.id);
    bookList.saveBooks();
  }
}