import '../book.css'
import './opened_book.css'
import opened_book from '../../assets/images/opened_book.png'
import pencil from '../../assets/images/pencil.png'
import trash from '../../assets/images/trash.png'
import add_passage from '../../assets/images/addPassage.png'
import change_page from '../../assets/images/changePage.png'

import { useState } from 'react'

function Opened_Book(props) {

  const [ passages, setPassages ] = useState(props.book_details)

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
                            <img src={pencil} alt="editBook" title="edit the book" id="editBook"/>
                            <img src={trash} alt="deleteBook" title="delete the book" id="deleteBook"/>
                        </div>
                    </div>
                    <div id="addPassageDiv">
                        <img src={add_passage} alt="addPassage" title="Add a passage" id="addPassage"/>
                        <p>Add a new favorite passage in the book</p>
                    </div>
                    <hr/>
                </div>
                <div class="page" id="right_page">

                </div>
            </div>
            <img src={change_page} alt="changePageBookLeft" title="Change page" id="changePageBookLeft" prev_page="0"/>
            <p id="pageIndicatorBookLeft" current_page="1">1 / 2</p>
            <p id="pageIndicatorBookRight" current_page="2">2 / 2</p>
            <img src={change_page} alt="changePageBookRight" title="Change page" id="changePageBookRight" next_page="3"/>
        </div>
      </div>
    </>
  )
}

export default Opened_Book