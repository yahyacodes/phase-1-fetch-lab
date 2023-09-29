function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json))
    .catch((error) => console.error(error));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())
    .then((json) => renderBooks(json))
    .catch((error) => console.error(error));
}

function renderBooks(books) {
  const bookListElement = document.getElementById("book-list");
  if (!bookListElement) {
    console.error("Book list element not found");
    return;
  }

  bookListElement.innerHTML = ""; // Clear previous content

  books.forEach((book) => {
    const bookTitleElement = document.createElement("li");
    bookTitleElement.textContent = book.title;
    bookListElement.appendChild(bookTitleElement);
  });
}

fetchBooks();
