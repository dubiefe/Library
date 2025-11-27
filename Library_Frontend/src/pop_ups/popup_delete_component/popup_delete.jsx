import './popup_delete.css'
import '../popup.css'

import Button from '../../button_component/button'

function Popup_Delete(props) {

  return (
    <>
      <div id="popup">
          <div id="popupDeleteLogout">
              {props.logout && <h2>Are you sure you want to logout?</h2>}
              {props.deleteBook && <h2>Are you sure you want to delete the book {props.deleteBook.title}?</h2>}
              {props.deletePassage && <h2>Are you sure you want to delete this passage?</h2>}
              <div class="divButtons">
                  <Button text="Cancel" img="cancel" onClick={props.handleCLose}/>
                  {props.logout && <Button text="Logout" img="validate" onClick={props.handleLogout}/>}
                  {props.deleteBook && <Button text="Delete" img="validate" onClick={() => {props.handleDeleteBookPassage(props.deleteBook.id)}}/>}
                  {props.deletePassage && <Button text="Delete" img="validate" onClick={() => {props.handleDeleteBookPassage(props.deletePassage[0].id, props.deletePassage[1].id)}}/>}
              </div>
          </div>
      </div>
    </>
  )
}

export default Popup_Delete