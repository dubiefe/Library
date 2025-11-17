import './popup_add_update_book.css'
import '../popup.css'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button_Validate from "../buttons/button_validate_component/button_validate"
import Button_Cancel from "../buttons/button_cancel_component/button_cancel"

function Popup_Add_Update_Book(props) {

  // define initialvalues
  const initialValues = props.update
    ? { title: props.book_title, author: props.book_author }
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
                  <div id="fromAddUpdateBook">
                    <label for="title">Title:</label>
                    <Field id="title" name="title" placeholder="Title" />
                    <ErrorMessage name="title" component="p" className="error" />
                    <label for="author">Author:</label>
                    <Field id="author" name="author" placeholder="author" />
                    <ErrorMessage name="author" component="p" className="error" />
                  </div>
                  <div class="divButtons">
                      <Button_Cancel text="Cancel"/>
                      <Button_Validate text="Validate" type="submit"/>
                  </div>
                </Form>
            </Formik>
        </div>
    </div>
    </>
  )
}

export default Popup_Add_Update_Book