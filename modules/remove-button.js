/* eslint-disable no-undef */
import BookCollection from './BookCollection.js';

const bookCollection = new BookCollection();

export default document.getElementById('book-lists').addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-button')) {
    const { title } = event.target.dataset;

    bookCollection.removeBook(title);
    bookCollection.displayBooks();
  }
});
