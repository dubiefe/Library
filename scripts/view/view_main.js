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
    // movement -> change in the library (initialize, next, prev)
    displayBooks(books, movement) {
        // --- Empty the library
        // be aware to not erase the element addBook in the shelf 1
        let divAddBook = this.shelf1.firstElementChild;
        while (divAddBook.nextSibling) {
            this.shelf1.removeChild(divAddBook.nextSibling);
        }
        // clear entierly the shelf 2 and 3
        this.shelf2.innerHTML = "";
        this.shelf3.innerHTML = "";
        // Count the books
        const number_books = books.length;
        const number_of_pages = Math.ceil(number_books / 29);
        // --- Adapt to the movement
        let new_current_page;
        switch(movement) {
            case "initialize": 
                new_current_page = 1;
                // Display the arrows
                this.changePageLibraryLeft.style.display = "none";
                if(number_of_pages === 1) {
                    this.changePageLibraryRight.style.display = "none";
                } else {
                    this.changePageLibraryRight.style.display = "flex";
                }
                break;
            case "next":
                // Set the value of current_page AND the displayed numbers
                new_current_page = Number(this.pageIndicatorLibrary.getAttribute("current_page")) + 1;
                // Display the arrows
                this.changePageLibraryLeft.style.display = "flex";
                if(new_current_page == number_of_pages) {
                    this.changePageLibraryRight.style.display = "none";
                } else {
                    this.changePageLibraryRight.style.display = "flex";
                }
                break;
            case "prev" :
                // Set the value of current_page AND the displayed numbers
                new_current_page = Number(this.pageIndicatorLibrary.getAttribute("current_page")) - 1;
                // Display the arrows
                this.changePageLibraryRight.style.display = "flex";
                if(new_current_page == 1) {
                    this.changePageLibraryLeft.style.display = "none";
                } else {
                    this.changePageLibraryLeft.style.display = "flex";
                }
                break;
        }
        // --- General changes
        // Set the value of current_page AND the displayed numbers
        this.pageIndicatorLibrary.setAttribute("current_page", new_current_page);
        this.pageIndicatorLibrary.textContent =  new_current_page + " / " + number_of_pages;
        // Set the prev and next value in the arrows
        this.changePageLibraryLeft.setAttribute("prev_page", new_current_page - 1);
        this.changePageLibraryRight.setAttribute("next_page", new_current_page + 1);

        // Select the right books
        const selectedBooks = books.slice(29 * (new_current_page - 1), (29 * (new_current_page - 1)) + 29);
        // Display max 29 books according to the page number
        let counter = 2;
        selectedBooks.forEach(book => {
            if (counter <= 10) {
                this.shelf1.append(this.createBook(book));
            } else if (counter <= 20) {
                this.shelf2.append(this.createBook(book));
            } else {
                this.shelf3.append(this.createBook(book));
            }
            counter++;
        });
    },

    // Function to create one book
    createBook(book) {
        // Get a random number for the cover
        const num_book_cover = Math.floor(Math.random() * 24) + 1;
        // Create the book
        let newBook = document.createElement('img');
        newBook.src = "../../style/images/books/book_" + num_book_cover + ".png";
        newBook.setAttribute("book_id", book.id);
        newBook.setAttribute("title", book.title);
        newBook.setAttribute("class", "book");
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