const API_URL = "http://127.0.0.1:8001/books";

// This variable remembers which book is being edited
let editId = null;

// Load books when page loads
window.onload = fetchBooks;

function fetchBooks() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const table = document.getElementById("bookTable");
            table.innerHTML = "";

            data.forEach(book => {
                table.innerHTML += `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.pages}</td>
                        <td>${book.price}</td>
                        <td>
                            <button class="btn btn-warning btn-sm"
                                onclick="editBook(${book.id}, '${book.name}', '${book.author}', ${book.pages}, ${book.price})">
                                Update
                            </button>
                            <button class="btn btn-danger btn-sm"
                                onclick="deleteBook(${book.id})">
                                Delete
                            </button>
                        </td>
                    </tr>
                `;
            });
        });
}

function createBook() {
    const book = {
        name: document.getElementById("name").value,
        author: document.getElementById("author").value,
        pages: Number(document.getElementById("pages").value),
        price: Number(document.getElementById("price").value)
    };

    // If editId exists, UPDATE the book
    if (editId !== null) {
        fetch(`${API_URL}/${editId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
        .then(() => {
            editId = null;
            fetchBooks();
            clearForm();
        });
    } 
    // Otherwise, CREATE a new book
    else {
        fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(book)
        })
        .then(() => {
            fetchBooks();
            clearForm();
        });
    }
}

function editBook(id, name, author, pages, price) {
    editId = id;

    document.getElementById("name").value = name;
    document.getElementById("author").value = author;
    document.getElementById("pages").value = pages;
    document.getElementById("price").value = price;
}

function deleteBook(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(() => fetchBooks());
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("price").value = "";
}
