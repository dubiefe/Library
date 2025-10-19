import { view_main } from '../view/view_main.js';
import { Library_Static } from "../model/library_static.js";



export class ControllerMain {

    constructor(username) {
        this.LIBRARY = new Library_Static(username);
    }

    async initialize() {
        // initialize the library
        await this.LIBRARY.getFile();
        
        this.library(await this.LIBRARY.getAllSortedBooksTitle());
    }
    
    // function to animate the library
    library(books) {
        // initialize the library
        view_main.displayBooks(books, "initialize");
        this.addEventListenerBooks();
        // event listener on the left arrow
        view_main.changePageLibraryLeft.addEventListener("click", () => {
            view_main.displayBooks(books, "prev");
            this.addEventListenerBooks();

        });
        // event listener on the right arrow
        view_main.changePageLibraryRight.addEventListener("click", () => {
            view_main.displayBooks(books, "next");
            this.addEventListenerBooks();
        });
    }

    // Function to add event listener
    addEventListenerBooks() {
        // Add the event listener to each book in the library to open the book
        view_main.btnBooks.forEach(btnBook => {
            btnBook.addEventListener('click', async () => {
                const book_id = btnBook.getAttribute('book_id');
                const book = await this.LIBRARY.getBook(Number(book_id));
                this.book(book.passages, book);
            });
        });
    }

    // Function to animate the book
    book(passages, book) {
        // initialize the library
        view_main.displayPassages(passages, book, "initialize");
        // event listener on the left arrow
        view_main.changePageBookLeft.addEventListener("click", () => {
            view_main.displayPassages(passages, book, "prev");
        });
        // event listener on the right arrow
        view_main.changePageBookRight.addEventListener("click", () => {
            view_main.displayPassages(passages, book, "next");
        });
    }

}