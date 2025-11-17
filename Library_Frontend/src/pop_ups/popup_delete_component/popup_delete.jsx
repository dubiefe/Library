import './popup_delete.css'
import '../popup.css'

import Button_Validate from "../buttons/button_validate_component/button_validate"
import Button_Cancel from "../buttons/button_cancel_component/button_cancel"

function Popup_Delete(props) {

  return (
    <>
      <div id="popup">
          <div id="popupDeleteLogout">
              {props.logout && <h2 id="titleDeleteLogout">Are you sure you want to logout?</h2>}
              {props.deleteBook && <h2 id="titleDeleteLogout">Are you sure you want to delete the book {props.book_title}?</h2>}
              {props.deletePassage && <h2 id="titleDeleteLogout">Are you sure you want to delete this passage?</h2>}
              <div class="divButtons">
                  {props.logout && <Button_Cancel text="Logout"/>}
                  {!props.logout && <Button_Cancel text="Delete"/>}
                  <Button_Validate text="Cancel"/>
              </div>
          </div>
      </div>
    </>
  )
}

export default Popup_Delete