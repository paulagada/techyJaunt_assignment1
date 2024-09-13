class Book {
    constructor(title, author, isbn, available = true) {
        this.title = title;
        this.author = author;
        this._isbn = isbn;
        this.available = available;
    }

    // Getter for ISBN
    get isbn() {
        return this._isbn;
    }

    // ISBN setter
    set isbn(value) {
        console.log('ISBN cannot be modified.');
    }

    // Method to borrow a book
    borrowBook() {
        if (this.available) {
            this.available = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available for borrowing.`);
        }
    }

    // Method to return a book
    returnBook() {
        this.available = true;
        console.log(`${this.title} has been returned.`);
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    // Method to add a new book to the library
    addBook(book) {
        this.books.push(book);
        console.log(`${book.title} has been added to the library.`);
    }

    // Method to remove a book from the library by ISBN
    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
        console.log(`Book with ISBN ${isbn} has been removed from the library.`);
    }

    // Method to find a book by title
    findBookByTitle(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            console.log(`Book found: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available: ${book.available}`);
            return book;
        } else {
            console.log(`No book found with the title ${title}.`);
            return null;
        }
    }
}

// DigitalLibrary inherits from Library
class DigitalLibrary extends Library {
    // Method to download a book if it's available
    downloadBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            if (book.available) {
                console.log(`Downloading ${book.title}...`);
            } else {
                console.log(`${book.title} is not available for download.`);
            }
        } else {
            console.log(`No book found with ISBN ${isbn}.`);
        }
    }
}

// Example Usage

const book1 = new Book('testBook1', 'agada paul', '12345');
const book2 = new Book('testBook2', 'james peter', '54321');
book1.isbn = "09876"
console.log(book1.isbn);


const library = new Library();
library.addBook(book1);
library.addBook(book2);

