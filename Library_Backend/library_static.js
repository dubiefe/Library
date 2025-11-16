// ---------- Object to interact with the data
export class Library_Static {

    DATA_FILE_PATH;
    USER;
    USER_LIBRARY;

    LIBRARY = {
        "user1": {
            "books": [
                { "id":'1', "title": "A Morning Light", "author": "Author A", "passages": [{ "id":'101', "pages": [1,2,10], "comment": "A peaceful introduction." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." }, { "id":'102', "pages": [11,12], "comment": "Loved the transition here." },] },
                { "id":'2', "title": "Whispers of Time", "author": "Author B", "passages": [] },
                { "id":'3', "title": "Shadows and Echoes", "author": "Author C", "passages": [{ "id":'104', "pages": [22,23], "comment": "Powerful imagery." }] },
                { "id":'4', "title": "Beyond the Horizon", "author": "Author D", "passages": [{ "id":'105', "pages": [7,8], "comment": "The pacing is great here." }] },
                { "id":'5', "title": "Fragments of Blue", "author": "Author E", "passages": [{ "id":'106', "pages": [15], "comment": "A standout chapter." }] },
                { "id":'6', "title": "Silent Footsteps", "author": "Author F", "passages": [{ "id":'107', "pages": [9,10], "comment": "Suspenseful and well-written." }] },
                { "id":'7', "title": "Windswept", "author": "Author G", "passages": [{ "id":'108', "pages": [31,32], "comment": "Felt very cinematic." }] },
                { "id":'8', "title": "The Deep Blue", "author": "Author H", "passages": [{ "id":'109', "pages": [45,46], "comment": "Calm yet intense." }] },
                { "id":'9', "title": "Ember Skies", "author": "Author I", "passages": [{ "id":'110', "pages": [17,18], "comment": "Fiery conclusion." }] },
                { "id":'10', "title": "Echoes of the Past", "author": "Author J", "passages": [{ "id":'111', "pages": [12], "comment": "Very nostalgic." }] },
                { "id":'11', "title": "Crimson Tides", "author": "Author K", "passages": [{ "id":'112', "pages": [26,27], "comment": "Dramatic tension rises." }] },
                { "id":'12', "title": "The Hollow Wind", "author": "Author L", "passages": [{ "id":'113', "pages": [8,9], "comment": "Dark and moody." }] },
                { "id":'13', "title": "Golden Fields", "author": "Author M", "passages": [{ "id":'114', "pages": [3,4], "comment": "Felt warm and inviting." }] },
                { "id":'14', "title": "The Broken Compass", "author": "Author N", "passages": [{ "id":'115', "pages": [19,20], "comment": "Confusion and clarity intertwined." }] },
                { "id":'15', "title": "Glass Hearts", "author": "Author O", "passages": [{ "id":'116', "pages": [28,29], "comment": "Delicate and emotional." }] },
                { "id":'16', "title": "Roots and Wings", "author": "Author P", "passages": [{ "id":'117', "pages": [30], "comment": "Grounded yet uplifting." }] },
                { "id":'17', "title": "Fireflies at Dusk", "author": "Author Q", "passages": [{ "id":'118', "pages": [14,15], "comment": "Glowing with meaning." }] },
                { "id":'18', "title": "Steel Rain", "author": "Author R", "passages": [{ "id":'119', "pages": [16,17], "comment": "Intense action sequence." }] },
                { "id":'19', "title": "Veil of Mist", "author": "Author S", "passages": [{ "id":'120', "pages": [5,6], "comment": "Mystical and vague in a good way." }] },
                { "id":'20', "title": "The Lost Signal", "author": "Author T", "passages": [{ "id":'121', "pages": [21,22], "comment": "Felt very modern and tech-driven." }] },
                { "id":'21', "title": "Clockwork Soul", "author": "Author U", "passages": [{ "id":'122', "pages": [35,36], "comment": "Precise and mechanical." }] },
                { "id":'22', "title": "The Quiet Storm", "author": "Author V", "passages": [{ "id":'123', "pages": [37,38], "comment": "Calm with underlying power." }] },
                { "id":'23', "title": "Painted Ashes", "author": "Author W", "passages": [{ "id":'124', "pages": [39], "comment": "A poetic ending." }] },
                { "id":'24', "title": "Frozen Whispers", "author": "Author X", "passages": [{ "id":'125', "pages": [40,41], "comment": "Chilling and memorable." }] },
                { "id":'25', "title": "The Marble Gate", "author": "Author Y", "passages": [{ "id":'126', "pages": [42,43], "comment": "Mysterious and intriguing." }] },
                { "id":'26', "title": "Rain Over Steel", "author": "Author Z", "passages": [{ "id":'127', "pages": [44,45], "comment": "Industrial vibes." }] },
                { "id":'27', "title": "The Ivory Labyrinth", "author": "Author AA", "passages": [{ "id":'128', "pages": [46,47], "comment": "Mind-bending." }] },
                { "id":'28', "title": "Letters Unsent", "author": "Author AB", "passages": [{ "id":'129', "pages": [48], "comment": "Regretful but hopeful." }] },
                { "id":'29', "title": "Distant Thunder", "author": "Author AC", "passages": [{ "id":'130', "pages": [49,50], "comment": "Building suspense." }] },
                { "id":'30', "title": "Stars Between Us", "author": "Author AD", "passages": [{ "id":'131', "pages": [51,52], "comment": "Romantic and vast." }] },
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
