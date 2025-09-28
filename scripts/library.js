// ---------- Object to interact with the data
import { readFile, writeFile } from "fs/promises";

export class Library {

    DATA_FILE_PATH;
    USER;
    USER_LIBRARY;

    constructor(user) {
        this.USER = user;
        this.USER_LIBRARY = null;
        this.API_URL = "https://library-backend-cfjv.onrender.com/"; // URL de ton serveur Render
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
    async getNumberOfBooks() {}

    // Get all the titles of the books in the library, ordered by title
    // -> return the titles in an array
    async getAllSortedBooksTitle() {}

    // Get the info of a specified book
    // -> return the tile, author and passages of the book
    async getBook(idBook) {}

    // Get the number of passages in a specified book
    // -> return the length of the array of passages
    async getNumberOfPassages(idBook) {}

    // ----- Methods

    // Add a book in the library with the indicated title adn author
    async addBook(title, author) {}

    // Add a passage to a book with the specified pages and comment
    async addPassage(idBook, pages, comment) {}

    // Delete the selected book from the library
    async deleteBook(idBook) {}

    // Delete a passage from a book
    async deletePassage(idBook, idPassage) {}

    // Update the information of a specified book
    async updateBook(idBook, title, author) {}

    // Update the information of a passage in a book
    async updatePassage(idBook, idPassage, pages, comment) {}
}
