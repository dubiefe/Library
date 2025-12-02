import '../book.css'
import './opened_book.css'
import opened_book from '../../assets/images/opened_book.png'
import opened_book_mobile from '../../assets/images/opened_book_mobile.png'
import back_button from '../../assets/images/back_button.png'
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
    if(props.isDesktopOrLaptop) {
        setCurrentPageLeft(1)
        setNbPage(Math.ceil(props.book_details.passages.length / 7) * 2)
    } else if(!props.isDesktopOrLaptop) {
        setCurrentPageLeft(1)
        setNbPage(Math.ceil(props.book_details.passages.length / 3))
    }
  }, [props.book_details])

  return (
    <>
      <div id='book_container'>
        <div id="opened_book">
            {props.isDesktopOrLaptop && <img src={opened_book} alt="opened_book"/>}
            {!props.isDesktopOrLaptop && <img src={opened_book_mobile} alt="opened_book_mobile"/>}
            <div id="opened_book_content">
                {!props.isDesktopOrLaptop && <img id='back_button' src={back_button} alt="back_button" onClick={() => {props.setOpenedBookDetails(null)}}/>}
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
                    {props.isDesktopOrLaptop && props.book_details.passages.slice((7 * Math.floor(currentPageLeft / 2)), (7 * Math.floor(currentPageLeft / 2)) + 3).map((passage) => {
                        return(
                            <Passage key={passage.id}
                                     passage={passage}
                                     book={props.book_details}
                                     handleClickUpdatePassage={props.handleClickUpdatePassage}
                                     handleClickDeletePassage={props.handleClickDeletePassage}/>
                        )
                    })}
                    {!props.isDesktopOrLaptop && props.book_details.passages.slice((3 * Math.floor(currentPageLeft - 1)), (3 * Math.floor(currentPageLeft - 1)) + 3).map((passage) => {
                        return(
                            <Passage key={passage.id}
                                     passage={passage}
                                     book={props.book_details}
                                     handleClickUpdatePassage={props.handleClickUpdatePassage}
                                     handleClickDeletePassage={props.handleClickDeletePassage}/>
                        )
                    })}
                </div>
                {props.isDesktopOrLaptop &&
                    <div class="page" id="right_page">
                        { props.book_details.passages.slice((7 * Math.floor(currentPageLeft / 2)) + 3, (7 * Math.floor(currentPageLeft / 2)) + 7).map((passage) => {
                            return(
                                <Passage key={passage.id}
                                        passage={passage}
                                        book={props.book_details}
                                        handleClickUpdatePassage={props.handleClickUpdatePassage}
                                        handleClickDeletePassage={props.handleClickDeletePassage}/>
                            )
                        })}
                    </div>
                }
            </div>
            {props.isDesktopOrLaptop && currentPageLeft > 1 && <img src={change_page} 
                                         onClick={() => {setCurrentPageLeft(currentPageLeft - 2)}} 
                                         alt="changePageBookLeft" 
                                         title="Change page" 
                                         id="changePageBookLeft"/>}
            {!props.isDesktopOrLaptop && currentPageLeft > 1 && <img src={change_page} 
                                         onClick={() => {setCurrentPageLeft(currentPageLeft - 1)}} 
                                         alt="changePageBookLeft" 
                                         title="Change page" 
                                         id="changePageBookLeft"/>}
            {nbPage == 0 && <p id="pageIndicatorBookLeft">{currentPageLeft} / 1</p>}
            {nbPage != 0 && <p id="pageIndicatorBookLeft">{currentPageLeft} / {nbPage}</p>}
            {props.isDesktopOrLaptop && currentPageLeft + 1 <= nbPage && <p id="pageIndicatorBookRight">{currentPageLeft + 1} / {nbPage}</p>}
            {props.isDesktopOrLaptop && currentPageLeft + 1 < nbPage && <img src={change_page} 
                                               onClick={() => {setCurrentPageLeft(currentPageLeft + 2)}} 
                                               alt="changePageBookRight" 
                                               title="Change page" 
                                               id="changePageBookRight"/>}
            {!props.isDesktopOrLaptop && currentPageLeft < nbPage && <img src={change_page} 
                                               onClick={() => {setCurrentPageLeft(currentPageLeft + 1)}} 
                                               alt="changePageBookRight" 
                                               title="Change page" 
                                               id="changePageBookRight"/>}
        </div>
      </div>
    </>
  )
}

export default Opened_Book