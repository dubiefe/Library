import '../book.css'
import './opened_book.css'
import opened_book from '../../assets/images/opened_book.png'
import pencil from '../../assets/images/pencil.png'
import trash from '../../assets/images/trash.png'
import add_passage from '../../assets/images/addPassage.png'
import change_page from '../../assets/images/changePage.png'

import Passage from '../../passage_component/passage'

import { useEffect, useState } from 'react'

function Opened_Book(props) {

  const [ currentPageLeft, setCurrentPageLeft ] = useState(1);
  const [ nbPage, setNbPage ] = useState(1);

  useEffect(() => {
    setCurrentPageLeft(1)
    setNbPage(Math.ceil(props.book_details.passages.length / 7) * 2)
  }, [props.book_details])

  return (
    <>
      <div id='book_container'>
        <div id="opened_book">
            <img src={opened_book} alt="opened_book"/>
            <div id="opened_book_content">
                <div class="page" id="left_page">
                    <div id="title">
                        <div>
                            <h2 id="bookTitle">{props.book_details.title}</h2>
                            <p id="bookAuthor">{props.book_details.author}</p>
                        </div>
                        <div id="optionsBook">
                            <img src={pencil} alt="editBook" title="edit the book" onClick={props.handleClickUpdateBook}/>
                            <img src={trash} alt="deleteBook" title="delete the book" onClick={props.handleClickDeleteBook}/>
                        </div>
                    </div>
                    <hr/>
                    <div id="addPassageDiv">
                        <img src={add_passage} alt="addPassage" title="Add a passage" onClick={props.handleClickAddPassage}/>
                        <p>Add a new favorite passage in the book</p>
                    </div>
                    { props.book_details.passages.slice((7 * Math.floor(currentPageLeft / 2)), (7 * Math.floor(currentPageLeft / 2)) + 3).map((passage) => {
                        return(
                            <Passage key={passage.id}
                                     passage={passage}
                                     book={props.book_details}
                                     handleClickUpdatePassage={props.handleClickUpdatePassage}
                                     handleClickDeletePassage={props.handleClickDeletePassage}/>
                        )
                    })}
                </div>
                <div class="page" id="right_page">
                    { props.book_details.passages.slice((7 * Math.floor(currentPageLeft / 2)) + 3, (7 * Math.floor(currentPageLeft / 2)) + 7).map((passage) => {
                        return(
                            <Passage key={passage.id}
                                     passage={passage}/>
                        )
                    })}
                </div>
            </div>
            {currentPageLeft > 1 && <img src={change_page} 
                                         onClick={() => {setCurrentPageLeft(currentPageLeft - 2)}} 
                                         alt="changePageBookLeft" 
                                         title="Change page" 
                                         id="changePageBookLeft"/>}
            {nbPage == 0 && <p id="pageIndicatorBookLeft">{currentPageLeft} / 1</p>}
            {nbPage != 0 && <p id="pageIndicatorBookLeft">{currentPageLeft} / {nbPage}</p>}
            {currentPageLeft + 1 <= nbPage && <p id="pageIndicatorBookRight">{currentPageLeft + 1} / {nbPage}</p>}
            {currentPageLeft + 1 < nbPage && <img src={change_page} 
                                               onClick={() => {setCurrentPageLeft(currentPageLeft + 2)}} 
                                               alt="changePageBookRight" 
                                               title="Change page" 
                                               id="changePageBookRight"/>}
        </div>
      </div>
    </>
  )
}

export default Opened_Book