import BookCollection from './modules/BookCollection.js';

import { DateTime } from './modules/luxon.js';
import toggleSection from './modules/toggle.js';

const bookCollection = new BookCollection();

bookCollection.displayBooks();

// Creating current date and time
const dateTime = document.getElementById('date');

function formatDate(date) {
  return date.toFormat("MMMM d',' yyyy 'at' hh:mm:ss a");
}

const now = DateTime.now();
const formattedDate = formatDate(now);

dateTime.innerHTML = formattedDate;

document.getElementById('button').addEventListener('click', (e) => {
  e.preventDefault();
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  bookCollection.addBook(titleInput.value, authorInput.value);
  bookCollection.displayBooks();

  titleInput.value = '';
  authorInput.value = '';
});

document.getElementById('list').addEventListener('click', () => {
  toggleSection('lists');
});

document.getElementById('add-new').addEventListener('click', () => {
  toggleSection('forms');
});

document.getElementById('contact').addEventListener('click', () => {
  toggleSection('contact-section');
});

document.getElementById('book-lists').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const { index } = event.target.dataset;

    bookCollection.removeBook(index);
    bookCollection.displayBooks();
  }
});
