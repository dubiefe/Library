// ---------- Object to interact with the data
export class Library_Static {

    DATA_FILE_PATH;
    USER;
    USER_LIBRARY;

    LIBRARY = {
        "user1": {
            "books": [
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
                { "id":1, "title": "Hello", "author": "Author",
                  "passages": [{ "id":1, "pages": [1,2,56], "comment": "I liked it!"}]
                },
            ]
        }
    }

    constructor(user) {
        this.USER = user;
        this.USER_LIBRARY = null;
    }

    // Function to get the file
    async getFile() {
        this.USER_LIBRARY = this.LIBRARY[this.USER];
    }

    // ----- Getters

    // Get the number of books in the library
    // -> return the length of the array of books
    async getNumberOfBooks() {
        return this.USER_LIBRARY.books.length;
    }

    // Get all the titles of the books in the library, ordered by title
    // -> return the titles in an array
    async getAllSortedBooksTitle() {
        return this.USER_LIBRARY.books.sort(function (a, b) {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        // a must be equal to b
        return 0;
        });
    }

    // Get the info of a specified book
    // -> return the tile, author and passages of the book
    async getBook(idBook) {
        return this.USER_LIBRARY.books.find((book) => (book.id === idBook));
    }

    // Get the number of passages in a specified book
    // -> return the length of the array of passages
    async getNumberOfPassages(idBook) {
        let book = await this.getBook(idBook);
        try {
            return book.passages.length;
        } catch (error) {
            throw "There is no book in this library"
        }
    }

    // Get the passages in a specified book
    // -> return the array of passages
    async getPassages(idBook) {
        let book = await this.getBook(idBook);
        try {
            return book.passages;
        } catch (error) {
            throw "There is no book in this library"
        }
    }

    // Get a passage in a specified book
    // -> return the passage
    async getPassage(idBook, idPassage) {
        let book = await this.getBook(idBook);
        try {
            return book.passages.find((passage) => (passage.id === idPassage));
        } catch (error) {
            throw "There is no book in this library"
        }
    }

    // ----- Methods

    // Add a book in the library with the indicated title and author
    async addBook(title, author) {
        const newId = Date.now().toString(36) + Math.random().toString(36).substr(2);
        const newBook = {
            "id": newId,
            "title": title,
            "author": author,
            "passages": []
        }
        this.USER_LIBRARY.books.push(newBook);
    }

    // Add a passage to a book with the specified pages and comment
    async addPassage(idBook, pages, comment) {
        try {
            const newId = Date.now().toString(36) + Math.random().toString(36).substr(2);
            const book = await this.getBook(idBook);
            const newPassage = {
                "id": newId,
                "pages": pages,
                "comment": comment
            }
            book.passages.push(newPassage);
        } catch (error) {
            throw "There is no book in this library"
        }
    }

    // Delete the selected book from the library
    async deleteBook(idBook) {
        this.USER_LIBRARY.books = this.USER_LIBRARY.books.filter((book) => book.id !== idBook);
    }

    // Delete a passage from a book
    async deletePassage(idBook, idPassage) {
        try {
            const book = await this.getBook(idBook);
            book.passages = book.passages.filter((passage) => (passage.id !== idPassage))
        } catch (error) {
            throw "There is no book in this library"
        }
    }

    // Update the information of a specified book
    async updateBook(idBook, title, author) {
        try {
            const book = await this.getBook(idBook);
            book.title = title;
            book.author = author;
        } catch (error) {
            throw "There is no book in this library"
        }
    }

    // Update the information of a passage in a book
    async updatePassage(idBook, idPassage, pages, comment) {
        try {
            const passage = await this.getPassage(idBook, idPassage);
            passage.pages = pages;
            passage.comment = comment;
        } catch (error) {
            throw "There is no book in this library"
        }
    }
}
