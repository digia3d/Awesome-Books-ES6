import { bookList } from './modules/BookList.js';
import header from './components/Header.js';
import main from './components/MainSection.js';
import footer from './components/Footer.js';

const renderUserInterface = () => {
  document.body.appendChild(header);
  document.body.appendChild(main);
  document.body.appendChild(footer);
};

window.addEventListener('DOMContentLoaded', () => {
  bookList.checkBooks();
  renderUserInterface();

  const linkItems = document.querySelectorAll('.nav-item');
  linkItems.forEach((item) => {
    item.addEventListener('click', () => {
      const activeLink = document.getElementById(item.id);
      const activeSection = document.getElementById(item.id.substring(5));

      if (!activeLink.classList.contains('active')) {
        activeLink.classList.add('active');
        activeSection.classList.remove('d-off');
      }

      linkItems.forEach((previousItem) => {
        const hiddenSection = document.getElementById(previousItem.id.substring(5));
        if (previousItem.id !== item.id && previousItem.classList.contains('active')) {
          previousItem.classList.remove('active');
        }
        if (previousItem.id !== item.id && !hiddenSection.classList.contains('d-off')) {
          hiddenSection.classList.add('d-off');
        }
      });
    });
  });
});
