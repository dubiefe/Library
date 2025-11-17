import '../book.css'
import './closed_book.css'
import closed_book from '../../assets/images/closed_book.png'

import { useState } from 'react'

function Closed_Book(props) {

  const [ passages, setPassages ] = useState(props.book_details)

  return (
    <>
      <div id='book_container'>
        <div id="closed_book">
            <img src={closed_book} alt="closed_book"/>
            <div id="closed_book_content">
                <h2>Open me!</h2>
                <p>Choose one of your book to (re)discover your favorite parts</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Closed_Book