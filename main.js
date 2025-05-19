const myLibrary = [
  {
    title: `The Stranger`,
    author: `Albert Camus`,
    pages: 720,
    readStatus: false,
    id: 453,
  },
  {
    title: `1984`,
    author: `George Orwell`,
    pages: 304,
    readStatus: true,
    id: 232,
  },
  {
    title: `Sapiens`,
    author: `Yuval Noah Harari`,
    pages: 144,
    readStatus: false,
    id: 293,
  },
];

const tableBody = document.querySelector("#tableBody");

function displayBook() {
  myLibrary.forEach((book, index) => {
    const tableRow = document.createElement("tr");
    tableRow.classList.add("table-row");
    const tableCell = document.createElement("td");
    tableCell.classList.add("table-data");

    tableCell.textContent = `0${index + 1}`;
    tableRow.appendChild(tableCell);
    tableBody.appendChild(tableRow);
  });
}

displayBook();

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
