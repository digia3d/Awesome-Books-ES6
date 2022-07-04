export default class BookList {
  constructor() {
    this.books = [];
  }

  checkBooks() {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

const bookList = new BookList();
if (localStorage.getItem('books')) {
  bookList.books = JSON.parse(localStorage.getItem('books'));
}

export { bookList };
