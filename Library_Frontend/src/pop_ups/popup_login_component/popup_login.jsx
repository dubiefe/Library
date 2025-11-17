import './popup_login.css'
import '../popup.css'

import Button_Validate from "../buttons/button_validate_component/button_validate"

function Popup_Login() {

  return (
    <>
    <div id="popup">
        <div id="popupLogin">
            <h2>Welcome in your small library!</h2>
            <p>Who are you?</p>
            <input type="text" placeholder="username" id="inputUserName"/>
            <div class="divButtons">
                <Button_Validate text="Login"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Popup_Login