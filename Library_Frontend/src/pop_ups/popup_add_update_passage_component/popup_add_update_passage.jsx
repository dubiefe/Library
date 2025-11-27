import './popup_add_update_passage.css'
import '../popup.css'

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from '../../button_component/button';

function Popup_Add_Update_Passage(props) {

    // define initialvalues
    const initialValues = props.add
    ? { page_mode: "single", page_single: "", page_first: "", page_second: "", comment: "", book_id: props.add.id }
    : props.update[1].pages.length == 1
    ? { page_mode: "single", page_single: props.update[1].pages[0], page_first: "", page_second: "", comment: props.update[1].comment, book_id: props.update[0].id, passage_id: props.update[1].id }
    : { page_mode: "multiple", page_single: "", page_first: props.update[1].pages[0], page_second: props.update[1].pages[1], comment: props.update[1].comment, book_id: props.update[0].id, passage_id: props.update[1].id };

    // validation schema
    const validationSchema = Yup.object().shape({
        page_mode: Yup.string()
            .oneOf(["single", "multiple"])
            .required(),
        page_single: Yup.number()
            .when("page_mode", {
                is: "single",
                then: (schema) => schema.required("Page number is required").min(1),
                otherwise: (schema) => schema.notRequired()
            }),
        page_first: Yup.number()
            .when("page_mode", {
                is: "multiple",
                then: (schema) => schema.required("First page number is required").min(1),
                otherwise: (schema) => schema.notRequired()
            }),
        page_second: Yup.number()
            .when("page_mode", {
                is: "multiple",
                then: (schema) => schema.required("Second page number is required").min(1),
                otherwise: (schema) => schema.notRequired()
            }),
        comment: Yup.string()
            .required('Comment required')
            .max(260, "Comment must have less than 260 characters"),
    });

  return (
    <>
    <div id="popup">
        <div id="popupAddUpdatePassage">
            {props.add && <h2>Add a passage for the book {props.add.title}</h2>}
            {props.update && <h2>Update a passage for the book {props.update.title}</h2>}
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.handleSubmit}>
                {({ values }) => (
                    <Form>
                        <div id="form_container">
                            <div id="divRadioPages">
                                <div>
                                    <label>
                                        <Field type="radio" name="page_mode" value="single" />
                                        Single
                                    </label>
                                    {values.page_mode === "single" && 
                                        <>
                                            <div id="firstChoice">
                                                <h4>p.</h4>
                                                <Field type="number" name="page_single" id="page_single"/>
                                            </div>
                                        </>
                                    }
                                </div>
                                <ErrorMessage name="page_single" component="p" className="error" />
                                <div>
                                    <label>
                                        <Field type="radio" name="page_mode" value="multiple" />
                                        Multiple
                                    </label>
                                    {values.page_mode === "multiple" && 
                                        <>
                                            <div id="secondChoice">
                                                <h4>p.</h4>
                                                <Field type="number" name="page_first" id="page_first"/>
                                                <h4> to </h4>
                                                <Field type="number" name="page_second" id="page_second"/>
                                            </div>
                                        </>
                                    }
                                </div>
                                <ErrorMessage name="page_first" component="p" className="error" />
                                <ErrorMessage name="page_second" component="p" className="error" />
                            </div>
                            <Field id="comment" name="comment" placeholder="comment" />
                            <ErrorMessage name="comment" component="p" className="error" />
                            <div class="divButtons">
                            <Button text="Cancel" type="button" img="cancel" onClick={props.handleCLose}/>
                            <Button text="Validate" type="submit" img="validate"/>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    </div>
    </>
  )
}

export default Popup_Add_Update_Passage