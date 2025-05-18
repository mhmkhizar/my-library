const myLibrary = [];

function Book(title, author, pages, readStatus) {
  if (!new.target) {
    throw Error`You must use the 'new' operator to call the constructor.`;
  }

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}
