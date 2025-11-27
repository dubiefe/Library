import './button.css'

import validate_icon from '../assets/images/validate.png'
import cancel_icon from '../assets/images/cancel.png'
import logout_icon from '../assets/images/logout.png'

function Button(props) {

  return (
    <>
        <div id="button_container">
            <button id="button" 
                    onClick={props.onClick}
                    type={props.type} 
                    style={
                        props.img === "cancel" ? {"background-color": "coral"} : 
                        props.img === "validate" ? {"background-color": "rgb(127, 211, 127)"} : 
                        {}}>
                {props.text}
                {props.img === "logout" && <img src={logout_icon} alt="logout"/>}
                {props.img === "validate" && <img src={validate_icon} alt="validate"/>}
                {props.img === "cancel" && <img src={cancel_icon} alt="cancel"/>}
            </button>
            {props.img === "cancel" &&
                <style>
                    {`
                        #button {background-color: coral;}
                        #button:hover {background-color: lightcoral;}
                    `}
                </style>
            }
            {props.img === "validate" &&
                <style>
                    {`
                        #button {background-color: rgb(127, 211, 127);}
                        #button:hover {background-color: lightgreen;}
                    `}
                </style>
            }
            {props.img === "logout" &&
                <style>
                    {`
                        #button {background-color: lightgray;}
                        #button:hover {background-color: gray;}
                    `}
                </style>
            }
        </div>
    </>
  )
}

export default Button