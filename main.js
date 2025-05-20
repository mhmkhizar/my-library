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

function displayBooks() {
  myLibrary.forEach((book, index) => {
    const row = generateTableRow(`table-row`);
    const serial = generateTableCell(`0${index + 1}`, `table-data`);
    const title = generateTableCell(book.title, `table-data`);
    const author = generateTableCell(book.author, `table-data`);
    const pages = generateTableCell(book.pages, `table-data`);
    // const readStatus = generateTableCell(book.title, `table-data`);
    // const deleteBtn = generateTableCell(book.title, `table-data`);
    row.append(serial, title, author, pages);
    tableBody.appendChild(row);
  });
}

displayBooks();

function generateTableRow(className) {
  const row = document.createElement("tr");
  row.classList.add(className);
  return row;
}

function generateTableCell(content, className) {
  const cell = document.createElement("td");
  cell.textContent = content;
  cell.classList.add(className);
  return cell;
}

// function Book(title, author, pages, readStatus) {
//   if (!new.target) {
//     throw Error`You must use the 'new' operator to call the constructor.`;
//   }

//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.readStatus = readStatus;
//   this.id = crypto.randomUUID();
// }

// function addBookToLibrary(title, author, pages, readStatus) {
//   const book = new Book(title, author, pages, readStatus);
//   myLibrary.push(book);
// }
