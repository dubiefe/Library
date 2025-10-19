export const view_popup = {
    // Background of the popups
    popup: document.getElementById('popup'),
    // popup contents
    popupLogin: document.getElementById('popupLogin'),
    popupDeleteLogout: document.getElementById('popupLogin'),
    popupAddUpdateBook: document.getElementById('popupAddUpdateBook'),
    popupAddUpdatePassage: document.getElementById('popupAddUpdatePassage'),
    // popup login
    inputUserName: document.getElementById('inputUserName'),
    // popup book
    titleBookAddUpdate: document.getElementById('titleBookAddUpdate'),
    authorBookAddUpdate: document.getElementById('authorBookAddUpdate'),
    errorTitleAddUpdateBook: document.getElementById('errorTitleAddUpdateBook'),
    errorAuthorAddUpdateBook: document.getElementById('errorAuthorAddUpdateBook'),
    // popup passages
    radioSingle: document.getElementById('single'),
    radioMultiple: document.getElementById('multiple'),
    firstChoice: document.getElementById('firstChoice'),
    singlePage: document.getElementById('singlePage'),
    secondChoice: document.getElementById('secondChoice'),
    firstPage: document.getElementById('firstPage'),
    secondPage: document.getElementById('secondPage'),
    commentPassageAddUpdate: document.getElementById('commentPassageAddUpdate'),
    errorPagesAddUpdatePassage: document.getElementById('errorPagesAddUpdatePassage'),
    errorCommentAddUpdatePassage: document.getElementById('errorCommentAddUpdatePassage'),
    // buttons
    validateUserName: document.getElementById('validateUserName'),
    validateDeleteLogout: document.getElementById('validateDeleteLogout'),
    cancelDeleteLogout: document.getElementById('cancelDeleteLogout'),
    validateAddUpdateBook: document.getElementById('validateAddUpdateBook'),
    cancelAddUpdateBook: document.getElementById('cancelAddUpdateBook'),
    validateAddUpdatePassage: document.getElementById('validateAddUpdatePassage'),
    cancelAddUpdatePassage: document.getElementById('cancelAddUpdatePassage'),

    // Function to display the right popup (login, delete_logout, add_update_book, add_update_passage)
    displayPopup(popupName) {
        // display the back ground
        this.popup.style.display = "flex";
        // display the right popup
        switch(popupName) {
            case "login":
                this.popupLogin.style.display = "flex";
                this.
                break;
            case "delete_logout":
                this.popupDeleteLogout.style.display = "flex";
                break;
            case "add_update_book":
                this.popupAddUpdateBook.style.display = "flex";
                break;
            case "add_update_passage":
                this.popupAddUpdatePassage.style.display = "flex";
                break;
        }
    },

    // Function to close the right popup (login, delete_logout, add_update_book, add_update_passage)
    closePopup(popupName) {
        // hide the right popup
        switch(popupName) {
            case "login":
                this.popupLogin.style.display = "none";
                break;
            case "delete_logout":
                this.popupDeleteLogout.style.display = "none";
                break;
            case "add_update_book":
                this.popupAddUpdateBook.style.display = "none";
                break;
            case "add_update_passage":
                this.popupAddUpdatePassage.style.display = "none";
                break;
        }
        // hide the back ground
        this.popup.style.display = "none";
    },

    // Function with the event listeners to display the right things for the add/update pages of passage
    selectPages() {
        this.radioSingle.addEventListener('click', () => {
            this.firstChoice.style.display = "flex";
            this.secondChoice.style.display = "none";
        })
        this.radioMultiple.addEventListener('click', () => {
            this.firstChoice.style.display = "none";
            this.secondChoice.style.display = "flex";
        })
    },

    // Function to display messages for errors in the add/upadte book
    displayErrorsBook(error) {
        let isError = false;
        // check the title
        if (this.titleBookAddUpdate.value == null) {
            isError = true;
            this.errorTitleAddUpdateBook.textContent = "The book title has to be provided"
        } else if (this.titleBookAddUpdate.value.length > 30) {
            isError = true;
            this.errorTitleAddUpdateBook.textContent = "The book title needs to contain less than 30 characters"
        }
        // check the author
        if (this.authorBookAddUpdate.value == null) {
            isError = true;
            this.errorAuthorAddUpdateBook.textContent = "The book author has to be provided"
        } else if (this.authorBookAddUpdate.value.length > 30) {
            isError = true;
            this.errorAuthorAddUpdateBook.textContent = "The book author needs to contain less than 30 characters"
        }
        return isError;
    },

    // Function to display messages for errors in the add/update passages
    displayErrorsBook(error) {
        let isError = false;
        // check the pages
        if ((this.radioSingle.checked && this.singlePage.value == null) || (this.radioMultiple.checked && (this.firstChoice.value == null || this.secondChoice.value == null))) {
            isError = true;
            this.errorPagesAddUpdatePassage.textContent = "The pages have to be provided"
        } 
        // check the comment
        if (this.commentPassageAddUpdate.value == null) {
            isError = true;
            this.errorCommentAddUpdatePassage.textContent = "The comment has to be provided"
        } else if (this.commentPassageAddUpdate.value.length > 30) {
            isError = true;
            this.errorCommentAddUpdatePassage.textContent = "The comment needs to contain less than 500 characters"
        }
        return isError;
    },
}