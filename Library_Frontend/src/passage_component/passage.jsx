import './passage.css'
import pencil from '../assets/images/pencil.png'
import trash from '../assets/images/trash.png'

function Passage(props) {

  return (
    <>
      <div id='passage_container'>
        <div>
          {props.passage.pages.length == 1 && <h2>At p.{props.passage.pages[0]}</h2>}
          {props.passage.pages.length != 1 && <h2>From p.{props.passage.pages[0]} to p.{props.passage.pages[1]}</h2>}
          <div id='options_passage_container'>
            <img src={pencil} alt="editPassage" title="edit the passage"/>
            <img src={trash} alt="deletePassage" title="delete the passage"/>
          </div>
        </div>
        <p>{props.passage.comment}</p>
      </div>
    </>
  )
}

export default Passage