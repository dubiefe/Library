import book_1 from "../assets/images/books/book_1.png"
import book_2 from "../assets/images/books/book_2.png"
import book_3 from "../assets/images/books/book_3.png"
import book_4 from "../assets/images/books/book_4.png"
import book_5 from "../assets/images/books/book_5.png"
import book_6 from "../assets/images/books/book_6.png"
import book_7 from "../assets/images/books/book_7.png"
import book_8 from "../assets/images/books/book_8.png"
import book_9 from "../assets/images/books/book_9.png"
import book_10 from "../assets/images/books/book_10.png"
import book_11 from "../assets/images/books/book_11.png"
import book_12 from "../assets/images/books/book_12.png"
import book_13 from "../assets/images/books/book_13.png"
import book_14 from "../assets/images/books/book_14.png"
import book_15 from "../assets/images/books/book_15.png"
import book_16 from "../assets/images/books/book_16.png"
import book_17 from "../assets/images/books/book_17.png"
import book_18 from "../assets/images/books/book_18.png"
import book_19 from "../assets/images/books/book_19.png"
import book_20 from "../assets/images/books/book_20.png"
import book_21 from "../assets/images/books/book_21.png"
import book_22 from "../assets/images/books/book_22.png"
import book_23 from "../assets/images/books/book_23.png"
import book_24 from "../assets/images/books/book_24.png"

const books = [book_1, book_2, book_3, book_4, book_5, book_6, book_7, book_8, book_9, book_10, book_11, book_12, 
               book_13, book_14, book_15, book_16, book_17, book_18, book_19, book_20, book_21, book_22, book_23, book_24]

function Single_Book(props) {

    const coverIndex = props.book_id % 24;
    const coverPath = books[coverIndex];

    return(
        <>
            <img src={coverPath} book_id={props.book_id} title={props.book_title} name="book"></img>
        </>
    )
}

export default Single_Book