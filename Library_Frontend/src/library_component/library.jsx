import './library.css'
import library_template from '../assets/images/library.png'
import add_book_template from '../assets/images/addBook.png'
import change_page from '../assets/images/changePage.png'

import Single_Book from '../single_book_component/single_book'

import { useState } from 'react'

function Library(props) {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ nbPage, setNbPage ] = useState(Math.ceil(props.libraryContent.length / 29));

  return (
    <>
      <div id='library_container'>
          <div id="library">
              <img src={library_template} alt="library"/>
              <div id="library_content">
                  <div class="shelf" id="shelf1">
                      <img src={add_book_template} onClick={props.handleClickAddBook} alt="addBook" title="Add a book" id="addBook"/>
                      {props.libraryContent.slice((29 * (currentPage - 1)), (29 * (currentPage - 1)) + 9).map((book) => {
                        return (
                            <Single_Book key={book.id}
                                         book_id={book.id}
                                         book_title={book.title}
                                         onClick={() => {props.handleClickBook(book.id)}}/>
                        )
                      })}
                  </div>
                  <div class="shelf" id="shelf2">
                      {props.libraryContent.slice((29 * (currentPage - 1)) + 9, (29 * (currentPage - 1)) + 19).map((book) => {
                        return (
                            <Single_Book key={book.id}
                                         book_id={book.id}
                                         book_title={book.title}
                                         onClick={() => {props.handleClickBook(book.id)}}/>
                        )
                      })}
                  </div>
                  <div class="shelf" id="shelf3">
                      {props.libraryContent.slice((29 * (currentPage - 1)) + 19, (29 * (currentPage - 1)) + 29).map((book) => {
                        return (
                            <Single_Book key={book.id}
                                         book_id={book.id}
                                         book_title={book.title}
                                         onClick={() => {props.handleClickBook(book.id)}}/>
                        )
                      })}
                  </div>
              </div>
              {currentPage != 1 && <img id="changePageLibraryLeft" 
                                        src={change_page} 
                                        onClick={() => {setCurrentPage(currentPage - 1)}} 
                                        alt="changePageLibraryLeft" 
                                        title="Change page"/>}
              {nbPage == 0 && <p>{currentPage} / {nbPage + 1}</p>}
              {nbPage != 0 && <p>{currentPage} / {nbPage}</p>}
              {currentPage < nbPage && <img id="changePageLibraryRight" 
                                              src={change_page} 
                                              onClick={() => {setCurrentPage(currentPage + 1)}} 
                                              alt="changePageLibraryRight" 
                                              title="Change page"/>}
            </div>
      </div>
    </>
  )
}

export default Library


{/* <div id="library_side">
            <div id="library">
                <img src="style/images/library.png" alt="library">
                <!-- Shelves in the library -->
                <div id="library_content">
                    <div class="shelf" id="shelf1">
                        <img src="style/images/addBook.png" alt="addBook" title="Add a book" id="addBook">
                    </div>
                    <div class="shelf" id="shelf2"></div>
                    <div class="shelf" id="shelf3"></div>
                </div>
                <img src="style/images/changePage.png" alt="changePageLibraryLeft" title="Change page" id="changePageLibraryLeft" prev_page="0">
                <p id="pageIndicatorLibrary" current_page="1">1 / 1</p>
                <img src="style/images/changePage.png" alt="changePageLibraryRight" title="Change page" id="changePageLibraryRight" next_page="2">
            </div>
        </div> */}