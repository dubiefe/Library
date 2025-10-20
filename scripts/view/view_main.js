export const view_main = {
    // Books
    shelf1: document.getElementById('shelf1'),
    shelf2: document.getElementById('shelf2'),
    shelf3: document.getElementById('shelf3'),
    btnAddBook: document.getElementById('addBook'),
    btnBooks: document.getElementsByName('book'),
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
        while (divAddBook.nextElementSibling) {
            this.shelf1.removeChild(divAddBook.nextElementSibling);
        }
        // clear entierly the shelf 2 and 3
        this.shelf2.innerHTML = "";
        this.shelf3.innerHTML = "";
        // --- Count the books
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
        newBook.setAttribute("name", "book");
        return newBook;
    },

    // Function to display the passages
    // passages -> list of passages to display
    // book -> book containing the passages
    // movement -> value to change page (-1, 0, 1)
    displayPassages(passages, book, movement) {
        console.log("----------------- New --------------")
        console.log(book.title)
        // --- Empty the book
        // be aware to not erase the element for the book and addPassage in the left page
        let divBookDetails = this.left_page.firstElementChild;
        let divAddPassage = divBookDetails.nextElementSibling;
        while (divAddPassage.nextElementSibling) {
            this.left_page.removeChild(divAddPassage.nextElementSibling);
        }
        // clear entierly the right page
        this.right_page.innerHTML = "";
        // --- Open the book
        this.closed_book.style.display = "none";
        this.opened_book.style.display = "flex";
        // --- Display the book selected
        this.bookTitle.textContent = book.title;
        this.bookAuthor.textContent = book.author;
        // Save the book id in the book options
        this.editBook.setAttribute("book_id", book.id);
        this.deleteBook.setAttribute("book_id", book.id);
        // --- Count the passages
        let number_passages = passages.length;
        console.log(number_passages)
        let number_of_pages = 0;
        let isLeftPage = true; // know the page
        while (number_passages >= 0) { // while there is still passages to display
            if(isLeftPage) { // remove 3 passages for the left page
                number_passages -= 3;
                isLeftPage = false;
            } else { // remove 5 passages for the right page
                number_passages -= 5;
                isLeftPage = true;
            }
            number_of_pages++; // incremente the number of pages
        }
        console.log(number_of_pages)
        // --- Adapt to the movement
        let new_current_page_left;
        switch(movement) {
            case "initialize": 
                new_current_page_left = 1;
                // Display the arrows
                this.changePageBookLeft.style.display = "none";
                if(number_of_pages <= 2) {
                    this.changePageBookRight.style.display = "none";
                } else {
                    this.changePageBookRight.style.display = "flex";
                }
                break;
            case "next":
                // Set the value of current_page AND the displayed numbers
                new_current_page_left = Number(this.pageIndicatorBookLeft.getAttribute("current_page")) + 2;
                // Display the arrows
                this.changePageBookLeft.style.display = "flex";
                if(new_current_page_left == number_of_pages || new_current_page_left + 1 == number_of_pages) {
                    this.changePageBookRight.style.display = "none";
                } else {
                    this.changePageBookRight.style.display = "flex";
                }
                break;
            case "prev" :
                // Set the value of current_page AND the displayed numbers
                new_current_page_left = Number(this.pageIndicatorBookLeft.getAttribute("current_page")) - 2;
                // Display the arrows
                this.changePageBookRight.style.display = "flex";
                if(new_current_page_left == 1) {
                    this.changePageBookLeft.style.display = "none";
                } else {
                    this.changePageBookLeft.style.display = "flex";
                }
                break;
        }
        console.log(new_current_page_left)
        // --- General changes
        // Set the value of current_page AND the displayed numbers (left AND right)
        this.pageIndicatorBookLeft.setAttribute("current_page", new_current_page_left);
        this.pageIndicatorBookLeft.textContent =  new_current_page_left + " / " + number_of_pages;
        this.pageIndicatorBookRight.setAttribute("current_page", new_current_page_left + 1);
        this.pageIndicatorBookRight.textContent =  (new_current_page_left + 1) + " / " + number_of_pages;
        // Hide the right page indicator if it is the last page AND the number of pages is not even
        if(new_current_page_left == number_of_pages && number_of_pages%2 == 1) {
            this.pageIndicatorBookRight.style.display = "none";
        } else {
            this.pageIndicatorBookRight.style.display = "flex";
        }
        // Set the book_id to the arrows
        this.changePageBookLeft.setAttribute("book_id", book.id);
        this.changePageBookRight.setAttribute("book_id", book.id);
        // Set the prev and next value in the arrows
        this.changePageBookLeft.setAttribute("prev_page", new_current_page_left - 1);
        this.changePageBookRight.setAttribute("next_page", new_current_page_left + 1);
        // Select the right passages
        const selectedPassages = passages.slice(7 * Math.floor(new_current_page_left / 2), (7 * Math.floor(new_current_page_left / 2)) + 7);
        // Display max 8 passages (3 left, 5 right) according to the page
        let counter = 1;
        selectedPassages.forEach(passage => {
            if (counter <= 3) {
                this.left_page.append(this.createPassage(passage));
            } else {
                this.right_page.append(this.createPassage(passage));
            }
            counter++;
        });
    },

    // Function to create one passage
    createPassage(passage) {
        // Division for the pages and the options
        let newDiv = document.createElement("div");
        // Pages
        let passageTitle = document.createElement('h2');
        passageTitle.setAttribute("class", "passagePages");
        if (passage.pages.length == 1) {
            passageTitle.textContent = "At p." + passage.pages[0];
        } else {
            passageTitle.textContent = "From p." + passage.pages[0] + " to p." + passage.pages[1];
        }
        newDiv.append(passageTitle);
        // Options
        let divOptions = document.createElement("div");
        divOptions.setAttribute("class", "optionsPassage");
        let imgEditPassage = document.createElement("img");
        imgEditPassage.src = "../../style/images/pencil.png";
        imgEditPassage.setAttribute("alt", "editPassage");
        imgEditPassage.setAttribute("title", "edit the passage");
        imgEditPassage.setAttribute("class", "editPassage");
        imgEditPassage.setAttribute("passage_id", passage.id);
        divOptions.append(imgEditPassage);
        let imgDeletePassage = document.createElement("img");
        imgDeletePassage.src = "../../style/images/trash.png";
        imgDeletePassage.setAttribute("alt", "deletePassage");
        imgDeletePassage.setAttribute("title", "delete the passage");
        imgDeletePassage.setAttribute("class", "deletePassage");
        imgDeletePassage.setAttribute("passage_id", passage.id);
        divOptions.append(imgDeletePassage);
        // Comment
        let txtComment = document.createElement('p');
        txtComment.setAttribute("class", "passageComment");
        txtComment.textContent = passage.comment;
        // Add everything to the div
        let newPassage = document.createElement('div');
        newPassage.append(newDiv);
        newPassage.append(txtComment);

        return newPassage;
    },
}