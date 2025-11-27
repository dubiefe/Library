import './popup_login.css'
import '../popup.css'
import { useState } from 'react';

import { Login_Backend } from '../../../../Library_Backend/login_backend';

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import bcrypt from 'bcryptjs'

import Button from '../../button_component/button';

function Popup_Login( props ) {

  const [ newAccount, setNewAccount ] = useState(false); 
  const [ wrongPassword, setWrongPassword ] = useState(false);
  const [ hash, setHash ] = useState(bcrypt.genSaltSync(10));

  // define initialvalues
  const initialValuesOld = { username: "", password: "" };
  const initialValuesNew = { email:"", username: "", password: "" }

  // validation schemas
  const validationSchemaOld = Yup.object().shape({
      username: Yup.string()
        .required('Username required'),
      password: Yup.string()
        .required('Password required'),
  });
  const validationSchemaNew = Yup.object().shape({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email required'),
      username: Yup.string()
        .required('Username required')
        .max(20, "Username must be less than 30 characters"),
      password: Yup.string()
        .required('Password required')
        .min(6, "Password must at least have 8 characters"),
  });

  // handle submit
  const handleSubmitOld = async (values) => {
    const instance = new Login_Backend;
    const loginData = await instance.getLoginData(values.username);
    if(bcrypt.compareSync(values.password, loginData.password)) { 
      props.onClick(values.username)
    }
  }
  const handleSubmitNew = async (values) => {
    const hashedPassword = bcrypt.hashSync(values.password, hash)
    const instance = new Login_Backend;
    await instance.saveLoginData(values.username, hashedPassword, values.email);
    props.onClick(values.username)
  }

  return (
    <>
    <div id="popup">
        <div id="popupLogin">
            <h2>Welcome in your small library!</h2>
            {!newAccount && 
              <Formik initialValues={initialValuesOld} validationSchema={validationSchemaOld} onSubmit={handleSubmitOld}>
                <Form>
                  <div id='form_container'>
                    <h3>Login into your account</h3>
                    <Field name="username" placeholder="username" />
                    <ErrorMessage name="username" component="p" className="error" />
                    <Field name="password" type="password" placeholder="password" />
                    <ErrorMessage name="password" component="p" className="error" />
                    <p id='txtIndicator' onClick={() => {setNewAccount(true)}}>New here ?</p>
                    <div class="divButtons">
                        <Button text="Login" type="submit" img="validate"/>
                    </div>
                  </div>
                </Form>
              </Formik>
            }
            {newAccount && 
              <Formik initialValues={initialValuesNew} validationSchema={validationSchemaNew} onSubmit={handleSubmitNew}>
                <Form>
                  <div id='form_container'>
                    <h3>Create your account</h3>
                    <Field name="email" type="email" placeholder="email" />
                    <ErrorMessage name="email" component="p" className="error" />
                    <Field name="username" placeholder="username" />
                    <ErrorMessage name="username" component="p" className="error" />
                    <Field name="password" type="password" placeholder="password" />
                    <ErrorMessage name="password" component="p" className="error" />
                    <p id='txtIndicator' onClick={() => {setNewAccount(false)}}>Already an account ?</p>
                    <div class="divButtons">
                        <Button text="Login" type="submit" img="validate"/>
                    </div>
                  </div>
                </Form>
              </Formik>
            }
        </div>
    </div>
    </>
  )
}

export default Popup_Login