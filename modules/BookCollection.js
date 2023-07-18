import Book from './Book.js';

export default class BookCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  // Using classes instead of objects for add book function.
  addBook = (title, author) => {
    const book = new Book(title, author);

    this.books.push(book);
    this.saveToLocalStorage();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.saveToLocalStorage();
  }

  displayBooks = () => {
    const bookList = document.getElementById('book-lists');
    bookList.innerHTML = '';

    this.books.forEach((book) => {
      const listItem = document.createElement('li');
      listItem.style.listStyle = 'none';
      listItem.classList.add('list-item');

      const rmvBtn = document.createElement('button');
      rmvBtn.textContent = 'Remove';
      rmvBtn.classList.add('remove-button');
      rmvBtn.dataset.index = book.index;

      listItem.innerHTML = `"${book.title}" by ${book.author}`;

      bookList.appendChild(listItem);
      bookList.appendChild(rmvBtn);
    });
  }

  saveToLocalStorage() {
    // const serializedBooks = this.books.map(({ title, author }) => ({ title, author }));
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
