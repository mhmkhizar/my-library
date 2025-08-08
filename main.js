const library = [];

const table = document.querySelector(`#table`);
const tableBody = document.querySelector(`#tableBody`);
const showModalBtn = document.querySelector(`#showModalBtn`);
const addBookModal = document.querySelector(`#addBookModal`);
const closeModalBtn = addBookModal.querySelector(`#closeModalBtn`);
const addModalBtn = addBookModal.querySelector(`#addModalBtn`);
const modalForm = addBookModal.querySelector(`.form`);
const titleInput = modalForm.querySelector(`#bookTitle`);
const authorInput = modalForm.querySelector(`#bookAuthor`);
const pagesInput = modalForm.querySelector(`#bookPageCount`);
const readStatusInput = modalForm.querySelector(`#bookReadStatus`);
const addBookBar = document.querySelector(`#addBookBar`);

const ICONS = {
  check: `<svg class="icon check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>check-circle</title>
      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
    </svg>`,
  uncheck: `<svg class="icon uncheck-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>radiobox-blank</title>
      <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
    </svg>`,
  delete: `<svg class="icon delete-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>trash-can-outline</title>
      <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"/>
    </svg>`,
};

showModalBtn.addEventListener(`click`, openModal);
addBookBar.addEventListener(`click`, openModal);
closeModalBtn.addEventListener(`click`, closeModal);
addModalBtn.addEventListener(`click`, handleFormSubmission);
tableBody.addEventListener(`click`, handleRowAction);

function openModal() {
  addBookModal.showModal();
}

function closeModal() {
  addBookModal.close();
  modalForm.reset();
}

function handleFormSubmission(e) {
  if (!titleInput.value || !authorInput.value || !pagesInput.value) return;
  e.preventDefault();

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readStatusInput.checked
  );
  library.push(newBook);
  renderTable();
  closeModal();
  toggleDiplay([addBookBar, table], library.length < 2);
}

function handleRowAction(e) {
  const icon = e.target.closest(".icon");
  if (!icon) return;

  const row = icon.closest(`tr`);
  const bookId = row.dataset.bookId;
  const book = library.find((b) => b.id === bookId);
  const index = library.indexOf(book);

  if (icon.classList.contains(`delete-icon`) && index !== -1) {
    library.splice(index, 1);
    renderTable();
    toggleDiplay([addBookBar, table], library.length < 1);
  } else if (book) {
    book.toggleReadStatus();
    renderTable();
  }
}

function renderTable() {
  tableBody.innerHTML = ``;
  library.forEach((book, i) => {
    const row = createTableRow(i + 1, book);
    tableBody.appendChild(row);
  });
}

function toggleDiplay(elems, condition) {
  if (condition)
    elems.forEach((elem) => {
      elem.style.display === `none`
        ? (elem.style.display = ``)
        : (elem.style.display = `none`);
    });
}

class Book {
  #id = crypto.randomUUID();

  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  get id() {
    return this.#id;
  }

  toggleReadStatus() {
    this.readStatus = !this.readStatus;
  }
}

function createTableRow(serial, book) {
  const row = document.createElement(`tr`);
  row.classList.add(`table-row`);
  row.dataset.bookId = book.id;

  const cells = [
    createCell(serial.toString().padStart(2, "0")),
    createCell(book.title),
    createCell(book.author),
    createCell(book.pages),
    createCell(book.readStatus ? ICONS.check : ICONS.uncheck, true),
    createCell(ICONS.delete, true),
  ];

  row.append(...cells);
  return row;
}

function createCell(content, isHTML = false) {
  const cell = document.createElement(`td`);
  cell.classList.add(`table-data`);
  isHTML ? (cell.innerHTML = content) : (cell.textContent = content);
  return cell;
}
