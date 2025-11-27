import './button_validate.css'
import '../button.css'

import validate_icon from '../../../assets/images/validate.png'

function Button_Validate(props) {

  return (
    <>
        <div id="button_container">
            <button id="button_validate" type={props.type}>
                {props.text}
                <img src={validate_icon} alt="validate"/>
            </button>
        </div>
    </>
  )
}

export default Button_Validate