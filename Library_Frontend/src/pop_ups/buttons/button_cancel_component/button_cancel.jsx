import './button_cancel.css'
import '../button.css'

import cancel_icon from '../../../assets/images/cancel.png'

function Button_Cancel(props) {

  return (
    <>
        <div id="button_container">
            <button id="button_cancel">
                {props.text}
                <img src={cancel_icon} alt="cancel"/>
            </button>
        </div>
    </>
  )
}

export default Button_Cancel