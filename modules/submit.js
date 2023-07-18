import BookCollection from './BookCollection.js';

const bookCollection = new BookCollection();

export default document.getElementById('button').addEventListener('click', () => {
  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  bookCollection.addBook(titleInput.value, authorInput.value);
  bookCollection.displayBooks();

  titleInput.value = '';
  authorInput.value = '';
});
