import { view_main } from '../view/view_main.js';
import { view_popup } from '../view/view_popup.js';

// Need to do this for each popup
// -- open
// -- close
// -- check error (return true or false and display)

export const controller_popup = {

    // Function for all the eventlisteners of the popups
    addEventListenerPopups() {
        // -------- AddBook --------
        // Open
        view_main.btnAddBook.addEventListener("click", () => {
            view_popup.displayPopup("add_update_book");
            view_popup.displayAddBoook();
        });
        // Close
        view_popup.cancelAddUpdateBook.addEventListener('click', () => {
            view_popup.closePopup("add_update_book");
        });
        // -------- AddPassage --------
        // Open
        view_main.addPassage.addEventListener("click", () => {
            view_popup.displayPopup("add_update_passage");
            view_popup.displayAddPassage();
        });
        // Close
        view_popup.cancelAddUpdatePassage.addEventListener('click', () => {
            view_popup.closePopup("add_update_passage");
        });
    },

    // Functions to check errors
    checkAddUpdateBook() {
        // Check errors
        let isError = false;
        let errorTitle = "";
        let errorAuthor = "";
        // check the title
        if (view_popup.titleBookAddUpdate.value == "") {
            isError = true;
            errorTitle = "The book title has to be provided";
        } else if (view_popup.titleBookAddUpdate.value.length > 30) {
            isError = true;
            errorTitle = "The book title needs to contain less than 30 characters";
        }
        // check the author
        if (view_popup.authorBookAddUpdate.value == "") {
            isError = true;
            errorAuthor = "The book author has to be provided";
        } else if (view_popup.authorBookAddUpdate.value.length > 30) {
            isError = true;
            errorAuthor = "The book author needs to contain less than 30 characters";
        }
        // Display error messages
        view_popup.displayErrorsBookTitle(errorTitle);
        view_popup.displayErrorsBookAuthor(errorAuthor);
        return isError;
    },
}