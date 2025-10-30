import { view_main } from '../view/view_main.js';
import { view_popup } from '../view/view_popup.js';
import { controller_popup } from './controller_popup.js';
import { Library_Static } from "../model/library_static.js";

export class ControllerMain {

    constructor(username) {
        this.LIBRARY = new Library_Static(username);
    }

    async initialize() {
        // initialize the library
        await this.LIBRARY.getFile();
        
        // animate the library
        await this.animateLibrary();

        // Initialize the popups
        await this.addEventListenerPopups();
    }

    async animateLibrary() {
        // Animate the library
        this.prepareLibrary(await this.LIBRARY.getAllSortedBooksTitle());
        this.changePassageInBook();
    }
    
    // function to animate the library
    prepareLibrary(books) {
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

    // Function to animate the book
    prepareBook(passages, book) {
        // initialize the library
        view_main.displayPassages(passages, book, "initialize");
    }

    changePassageInBook() {
        // event listener on the left arrow
        view_main.changePageBookLeft.addEventListener("click", async () => {
            const book_id = view_main.changePageBookLeft.getAttribute('book_id');
            const book = await this.LIBRARY.getBook(book_id);
            view_main.displayPassages(book.passages, book, "prev");
        });
        // event listener on the right arrow
        view_main.changePageBookRight.addEventListener("click", async () => {
            const book_id = view_main.changePageBookRight.getAttribute('book_id');
            const book = await this.LIBRARY.getBook(book_id);
            view_main.displayPassages(book.passages, book, "next");
        });
    }

    // ------------------ Event Listeners ------------------
    // Function to add the event listeners for each book to display its passages
    addEventListenerBooks() {
        // Add the event listener to each book in the library to open the book
        view_main.btnBooks.forEach(btnBook => {
            btnBook.addEventListener('click', async () => {
                const book_id = btnBook.getAttribute('book_id');
                const book = await this.LIBRARY.getBook(book_id);
                this.prepareBook(book.passages, book);
            });
        });
    }

    // Function for all the eventlisteners of the popups (call controller_popup and then do the action (save, logout, login....))
    async addEventListenerPopups() {
        // -------- General --------
        controller_popup.addEventListenerPopups();
        // -------- AddBook --------
        view_popup.validateAddUpdateBook.addEventListener('click', async () => {
            if(!controller_popup.checkAddUpdateBook()) {
                // Save the book
                this.LIBRARY.addBook(view_popup.titleBookAddUpdate.value, view_popup.authorBookAddUpdate.value);
                view_popup.closePopup("add_update_book");
            }
        });
    }

}