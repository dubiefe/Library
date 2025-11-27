import './App.css'
import Library from './library_component/library'
import Closed_Book from './book/closed_book_component/closed_book'
import Opened_Book from './book/opened_book_component/opened_book'
import Popup_Login from './pop_ups/popup_login_component/popup_login'
import Popup_Add_Update_Book from './pop_ups/popup_add_update_book_component/popup_add_update_book'
import Popup_Add_Update_Passage from './pop_ups/popup_add_update_passage_component/popup_add_update_passage'
import Popup_Delete from './pop_ups/popup_delete_component/popup_delete'
import Button from './button_component/button'

import { Library_Static } from "../../Library_Backend/library_static"
import { Library_Backend } from '../../Library_Backend/library_backend'

import { useEffect, useState } from 'react'

function App() {
  const [ username, setUsername ] = useState(null)

  // Library instance
  const [ libraryInstance, setLibraryInstance ] = useState(null);
  const [ libraryContent, setLibraryContent ] = useState(null);
  // Selected book
  const [ openedBookId, setOpenedBookId ] = useState();
  const [ openedBookDetails, setOpenedBookDetails ] = useState();
  // Popup parameters
  const [ displayLogin, setDisplayLogin ] = useState(null);
  const [ displayAddBook, setDisplayAddBook ] = useState(false);
  const [ displayUpdateBook, setDisplayUpdateBook ] = useState(null);
  const [ displayAddPassage, setDisplayAddPassage ] = useState(null);
  const [ displayUpdatePassage, setDisplayUpdatePassage ] = useState(null);
  const [ displayDelete, setDisplayDelete ] = useState(null);
  const [ displayLogout, setDisplayLogout ] = useState(false);

  // Initializing library
  useEffect(() => {
    const initLibrary = async () => {
      const lib = new Library_Backend(username);
      await lib.getFile();
      setLibraryInstance(lib);
      const allBooks = await lib.getAllSortedBooksTitle();
      setLibraryContent(allBooks);
    } 
    initLibrary();
  }, [username]);

  // Handle select book
  const handleClickBook = (book_id) => {
    setOpenedBookId(book_id)
  }
  useEffect(() => {
    if (!libraryInstance) return;
    const getBook = async () => {
      const bookDetails = await libraryInstance.getBook(openedBookId);
      setOpenedBookDetails(bookDetails);
    } 
    getBook();
  }, [openedBookId]);

  // Handle add book
  const handleAddUpdateBookFormSubmit = async (values) => {
    console.log("Form submitted!", values);
    if(displayAddBook) {
      await libraryInstance.addBook(values.title, values.author);
      setDisplayAddBook(false);
    } else if (displayUpdateBook) {

      setDisplayAddPassage(null);
    }
  };

  if (username == null) return (<Popup_Login onClick={(newUsername) => {setUsername(newUsername)}}/>)
    
  return (
    <>
      <h2>My Small Library</h2>
      <div id='btn_logout'>
        <Button text={username} img="logout" onClick={() => {setDisplayLogout(true)}}/>
      </div>
      <div id='main_component'>
        {libraryContent && <Library libraryContent={libraryContent} handleClickBook={handleClickBook} handleClickAddBook={() => {setDisplayAddBook(true)}}/>}
        {!libraryContent && <Library libraryContent={[]}/>}
        {openedBookDetails && <Opened_Book book_details={openedBookDetails}/>}
        {!openedBookDetails && <Closed_Book/>}
      </div>
      {displayAddBook && <Popup_Add_Update_Book handleSubmit={handleAddUpdateBookFormSubmit}/>}
      {displayUpdateBook && <Popup_Add_Update_Book handleSubmit={handleAddUpdateBookFormSubmit}/>}
      {displayAddPassage && <Popup_Add_Update_Passage/>}
      {displayUpdatePassage && <Popup_Add_Update_Passage/>}
      {displayDelete && <Popup_Delete/>}
      {displayLogout && <Popup_Delete/>}
    </>
  )
}

export default App
