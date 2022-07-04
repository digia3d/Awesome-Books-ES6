import Book from '../modules/Book.js';
import displayBook from './BookSection.js';
import { booksList } from './BookListSection.js';

const addBookSection = document.createElement('section');
const addBookSectionTitle = document.createElement('h2');
const form = document.createElement('form');
addBookSection.id = 'add';
addBookSection.classList.add('add-book', 'd-flex', 'col', 'd-off');
addBookSectionTitle.textContent = 'Add a new book';
addBookSectionTitle.className = 'section-title';
form.id = 'create-form';
form.innerHTML = `<input name="title" type="text" placeholder="title" id="title" required>
    <input name="author" type="text" placeholder="author" id="author" required>
    <button type="submit" id="form-button" class="clickeable btn">Add</button>
    <div id="success-msg"></div>`;

addBookSection.appendChild(addBookSectionTitle);
addBookSection.appendChild(form);

const saveFormData = (book) => {
  localStorage.setItem('formData', JSON.stringify(book));
};

const displaySuccess = () => {
  const successMsg = document.getElementById('success-msg');
  successMsg.textContent = 'Your book has been added!';
  setTimeout(() => {
    successMsg.textContent = '';
  }, 3000);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { title, author } = form.elements;
  const newBook = new Book(title.value, author.value);
  newBook.addBook();
  title.value = ('');
  author.value = ('');
  saveFormData({ title: title.value, author: author.value });
  booksList.appendChild(displayBook(newBook));
  displaySuccess();
});

const checkFormData = () => {
  const { title, author } = form.elements;
  if (localStorage.getItem('formData')) {
    title.value = JSON.parse(localStorage.getItem('formData')).title;
    author.value = JSON.parse(localStorage.getItem('formData')).author;
  }
};

checkFormData();

export default addBookSection;