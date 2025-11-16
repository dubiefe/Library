import './App.css'
import Library from './library_component/library'
import Book from './book_component/book'

import { Library_Static } from "../../Library_Backend/library_static"

import { useEffect, useState } from 'react'

function App() {
  const [ libraryInstance, setLibraryInstance ] = useState(null);
  const [ libraryContent, setLibraryContent ] = useState(null);
  const [ isUpdated, setIsUpdated ] = useState(false);

  useEffect(() => {
    const initLibrary = async () => {
      const lib = new Library_Static("user1");
      await lib.getFile();
      setLibraryInstance(lib);
    } 
    initLibrary();
    setIsUpdated(true);
  }, []);

  useEffect(() => {
    if (!libraryInstance) return;
    const getBooks = async () => {
      const allBooks = await libraryInstance.getAllSortedBooksTitle();
      setLibraryContent(allBooks);
    } 
    getBooks();
  }, [isUpdated]);

  return (
    <>
      <h2>My Small Library</h2>
      <div id='main_component'>
        {libraryContent && <Library libraryContent={libraryContent}/>}
        <Book/>
      </div>
    </>
  )
}

export default App
