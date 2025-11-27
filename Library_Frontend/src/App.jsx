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
  const [ displayAddBook, setDisplayAddBook ] = useState(false);
  const [ displayUpdateBook, setDisplayUpdateBook ] = useState(null);
  const [ displayAddPassage, setDisplayAddPassage ] = useState(null);
  const [ displayUpdatePassage, setDisplayUpdatePassage ] = useState(null);
  const [ displayDeleteBook, setDisplayDeleteBook ] = useState(null);
  const [ displayDeletePassage, setDisplayDeletePassage ] = useState(null);
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

  const handleAddUpdateBookFormSubmit = async (values) => {
    console.log("Form submitted!", values);
    if(displayAddBook) {
      await libraryInstance.addBook(values.title, values.author);
      setDisplayAddBook(false);
      setLibraryContent(await libraryInstance.getAllSortedBooksTitle())
    } else if (displayUpdateBook) {
      await libraryInstance.updateBook(values.id, values.title, values.author);
      setDisplayUpdateBook(null);
    }
  };

  const handleDeleteBookPassage = async (book_id, passage_id=null) => {
    if(displayDeleteBook) {
      await libraryInstance.deleteBook(book_id);
      setDisplayDeleteBook(null);
      setOpenedBookDetails(null);
    } else {
      await libraryInstance.deletePassage(book_id, passage_id);
      setDisplayDeletePassage(null);
    }
    setLibraryContent(await libraryInstance.getAllSortedBooksTitle())
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
        {openedBookDetails && <Opened_Book book_details={openedBookDetails}
                                           handleClickUpdateBook={() => {setDisplayUpdateBook(openedBookDetails)}}
                                           handleClickDeleteBook={() => {setDisplayDeleteBook(openedBookDetails)}}/>}
        {!openedBookDetails && <Closed_Book/>}
      </div>
      {(displayAddBook || displayUpdateBook) && <Popup_Add_Update_Book handleSubmit={handleAddUpdateBookFormSubmit} 
                                                                     add={displayAddBook} 
                                                                     update={displayUpdateBook}
                                                                     handleCLose={() => {setDisplayAddBook(false); setDisplayUpdateBook(false);}}/>}
      {displayAddPassage && <Popup_Add_Update_Passage/>}
      {displayUpdatePassage && <Popup_Add_Update_Passage/>}
      {(displayDeleteBook || displayDeletePassage || displayLogout) && 
        <Popup_Delete logout={displayLogout}
                      deleteBook={displayDeleteBook}
                      deletePassage={displayDeletePassage}
                      handleCLose={() => {setDisplayLogout(false); setDisplayDeleteBook(null); setDisplayDeletePassage(null)}}
                      handleLogout={() => {location.reload(); setDisplayLogout(false);}}
                      handleDeleteBookPassage={handleDeleteBookPassage}/>}
    </>
  )
}

export default App
