export const view_main = {
    // Books
    shelf1: document.getElementById('shelf1'),
    shelf2: document.getElementById('shelf2'),
    shelf3: document.getElementById('shelf3'),
    btnAddBook: document.getElementById('addBook'),
    pageIndicatorLibrary: document.getElementById('pageIndicatorLibrary'),
    changePageLibraryLeft: getElementById('changePageLibraryLeft'),
    changePageLibraryRight: getElementById('changePageLibraryRight'),
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
    displayBooks(books) {
        // Count the books
        // Display max 29 books according to the page number
        // Change the value of current_page AND the displayed numbers
        // Change the prev and next value in the arrows
    },

    // Function to display the passages
    displayPassages(passages) {
        // Count the passages
        // Display max 7 passages according to the page
        // Change the value of current_page AND the displayed numbers (left AND right)
        // Change the prev and next value in the arrows
    },
}