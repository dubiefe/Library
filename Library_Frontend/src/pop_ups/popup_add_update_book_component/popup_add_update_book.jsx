import './popup_add_update_book.css'
import '../popup.css'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from '../../button_component/button';

function Popup_Add_Update_Book(props) {

  // define initialvalues
  const initialValues = props.update
    ? { title: props.update.title, author: props.update.author, id: props.update.id }
    : { title: "", author: "" };

  // validation schema
  const validationSchema = Yup.object().shape({
      title: Yup.string()
        .required('Title required')
        .max(30, "Title must be less than 30 characters"),
      author: Yup.string()
        .required('Author required')
        .max(40, "Author must be less than 40 characters"),
  });

  return (
    <>
      <div id="popup">
        <div id="popupAddUpdateBook">
            {props.add && <h2>Add a book</h2>}
            {props.update && <h2>Update a book</h2>}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.handleSubmit}>
                <Form>
                  <div id="form_container">
                    <Field id="title" name="title" placeholder="Title" />
                    <ErrorMessage name="title" component="p" className="error" />
                    <Field id="author" name="author" placeholder="author" />
                    <ErrorMessage name="author" component="p" className="error" />
                    <div class="divButtons">
                      <Button text="Cancel" type="button" img="cancel" onClick={props.handleCLose}/>
                      <Button text="Submit" type="submit" img="validate"/>
                    </div>
                  </div>
                </Form>
            </Formik>
        </div>
    </div>
    </>
  )
}

export default Popup_Add_Update_Book