import { view_main } from '../view/view_main.js';
import { Library_Static } from '../model/library_static.js';

export const controller_main = {
    
    // function to animate the library
    library(books) {
        // initialize the library
        view_main.displayBooks(books, "initialize");
        // event listener on the left arrow
        view_main.changePageLibraryLeft.addEventListener("click", () => {
            view_main.displayBooks(books, "prev");
        });
        // event listener on the right arrow
        view_main.changePageLibraryRight.addEventListener("click", () => {
            view_main.displayBooks(books, "next");
        });
    }

}