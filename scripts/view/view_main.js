export const view_main = {
    // Books
    shelf1: document.getElementById('shelf1'),
    shelf2: document.getElementById('shelf2'),
    shelf3: document.getElementById('shelf3'),
    btnAddBook: document.getElementById('addBook'),
    pageIndicatorLibrary: document.getElementById('pageIndicatorLibrary'),
    changePageLibraryLeft: document.getElementById('changePageLibraryLeft'),
    changePageLibraryRight: document.getElementById('changePageLibraryRight'),
    // Passages
    closed_book: document.getElementById('closed_book'),
    opened_book: document.getElementById('opened_book'),
    left_page: document.getElementById('left_page'),
    right_page: document.getElementById('right_page'),
    bookTitle: document.getElementById('bookTitle'),
    bookAuthor: document.getElementById('bookAuthor'),
    editBook: document.getElementById('editBook'),
    deleteBook: document.getElementById('deleteBook'),
    addPassage: document.getElementById('addPassage'),
    changePageBookLeft: document.getElementById('changePageBookLeft'),
    changePageBookRight: document.getElementById('changePageBookRight'),
    pageIndicatorBookLeft: document.getElementById('pageIndicatorBookLeft'),
    pageIndicatorBookRight: document.getElementById('pageIndicatorBookRight'),

    // Function to display the books
    // books -> list of books to display
    displayBooksInitialize(books) {
        // Count the books
        const number_books = books.length;
        const number_of_pages = Math.ceil(number_books / 29);
        // Set the value of current_page AND the displayed numbers
        this.pageIndicatorLibrary.setAttribute("current_page", "1");
        this.pageIndicatorLibrary.textContent = "1 / " + number_of_pages;
        // Display the arrows
        this.changePageLibraryLeft.display = "none";
        if(number_of_pages === 1) {
            this.changePageLibraryRight.display = "none";
        } else {
            this.changePageLibraryRight.display = "flex";
        }
        // Set the prev and next value in the arrows
        this.changePageLibraryLeft.setAttribute("prev_page", 0);
        this.changePageLibraryRight.setAttribute("next_page", 2);
        // Display max 29 books according to the page number
        let counter = 2;
        books.forEach(book => {
            if (counter <= 10) {
                this.shelf1.append(this.displayBook(book));
            } else if (counter <= 20) {
                this.shelf2.append(this.displayBook(book));
            } else if (counter <= 30) {
                this.shelf3.append(this.displayBook(book));
            }
            counter++;
        });
    },

    // Function to display the books
    // books -> list of books to display
    // movement -> value to change page (-1, 0, 1)
    displayBookChange(books, movement) {

    },

    // Function to display one book
    displayBook(book) {
        // Get a random number for the cover
        const num_book_cover = Math.floor(Math.random() * 24) + 1;
        // Create the book
        let newBook = document.createElement('img');
        newBook.src = "../../style/images/books/book_" + num_book_cover + ".png";
        newBook.setAttribute("book_id", book.id);
        newBook.setAttribute("title", book.title);
        return newBook;
    },

    // Function to display the passages
    // passages -> list of passages to display
    // book -> book containing the passages
    // movement -> value to change page (-1, 0, 1)
    displayPassages(passages, book, movement) {
        // Display the book selected
        // Count the passages
        // Display max 8 passages (3 left, 5 right) according to the page
        // Change the value of current_page AND the displayed numbers (left AND right)
        // Change the prev and next value in the arrows
    },
}