// ---------- Object to interact with the data
export class Library {

    DATA_FILE_PATH;
    USER;
    USER_LIBRARY;

    constructor(user) {
        this.USER = user;
        this.USER_LIBRARY = null;
        this.API_URL = "https://library-backend-cfjv.onrender.com"; // URL de ton serveur Render
    }

    // Function to get the file
    async getFile() {
        let resObj = await fetch(`${this.API_URL}/api/data`);
        const resJSON = await resObj.json();

        this.USER_LIBRARY = resJSON[this.USER] || { books: [] };
        resJSON[this.USER] = this.USER_LIBRARY;

        await fetch(`${this.API_URL}/api/save`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resJSON)
        });

        console.log(this.USER_LIBRARY);
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
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
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

    // Save data in the backend
    async saveData(message) {
        let resObj = await fetch(`${this.API_URL}/api/data`);
        const resJSON = await resObj.json();

        resJSON[this.USER] = this.USER_LIBRARY;

        await fetch(`${this.API_URL}/api/save`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(resJSON)
        });

        console.log(message)
        console.log(this.USER_LIBRARY);
    }

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
        await this.saveData("The book titled " + title + " by " + author + " has been added");
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
            await this.saveData("The passage for the book " + book.title + " has been added");
        } catch (error) {
            throw "There is no book in this library"
        }
    }

    // Delete the selected book from the library
    async deleteBook(idBook) {
        this.USER_LIBRARY.books = this.USER_LIBRARY.books.filter((book) => book.id !== idBook);
        await this.saveData("The book titled " + await this.getBook(idBook).title + " has been deleted");
    }

    // Delete a passage from a book
    async deletePassage(idBook, idPassage) {
        try {
            const book = await this.getBook(idBook);
            book.passages = book.passages.filter((passage) => (passage.id !== idPassage))
            await this.saveData("The passage has been removed from the book titled " + book.title);
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
            await this.saveData("The book has been updated with the title " + title + " and the author " + author);
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
            await this.saveData("The passage has been updated in the book titled " + await this.getBook(idBook).title)
        } catch (error) {
            throw "There is no book in this library"
        }
    }
}
