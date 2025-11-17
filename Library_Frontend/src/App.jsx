import './App.css'
import Library from './library_component/library'
import Closed_Book from './book/closed_book_component/closed_book'
import Opened_Book from './book/opened_book_component/opened_book'

import { Library_Static } from "../../Library_Backend/library_static"
import { Library_Backend } from '../../Library_Backend/library_backend'

import { useEffect, useState } from 'react'

function App() {
  const [ username, setUsername ] = useState("user1")

  const [ libraryInstance, setLibraryInstance ] = useState(null);
  const [ libraryContent, setLibraryContent ] = useState(null);
  const [ isUpdated, setIsUpdated ] = useState(false);

  const [ openedBookId, setOpenedBookId ] = useState();
  const [ openedBookDetails, setOpenedBookDetails ] = useState();

  useEffect(() => {
    const initLibrary = async () => {
      const lib = new Library_Backend(username);
      await lib.getFile();
      setLibraryInstance(lib);
      const allBooks = await lib.getAllSortedBooksTitle();
      setLibraryContent(allBooks);
    } 
    initLibrary();
  }, []);

  useEffect(() => {
    if (!libraryInstance) return;
    const getBooks = async () => {
      const allBooks = await libraryInstance.getAllSortedBooksTitle();
      setLibraryContent(allBooks);
    } 
    getBooks();
  }, [isUpdated]);

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

  return (
    <>
      <h2>My Small Library</h2>
      <div id='main_component'>
        {libraryContent && <Library libraryContent={libraryContent} handleClickBook={handleClickBook}/>}
        {!libraryContent && <Library libraryContent={[]}/>}
        {openedBookDetails && <Opened_Book book_details={openedBookDetails}/>}
        {!openedBookDetails && <Closed_Book/>}
      </div>
    </>
  )
}

export default App
