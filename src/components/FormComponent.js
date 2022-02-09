import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CONTAINER = styled.div`

    .form-check-input:checked[type=checkbox]{
        background-color: #007ACC;
    }
    .btn-custom {
    background-color: #007ACC;
    color: white;
    }

    .btn-custom:hover {
        background-color: #05548A;
        color: white;
    }   

  .form-group {
    margin-bottom: 2.5em;
  }

  .error {
    border: 2px solid #FF6565;
  }

  .error-message {
    color: #FF6565;
    padding: .2em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
`;

const MYFORM = styled(Form)`
`;

// Schema for yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
  .email("*Must be a valid email address")
  .min(2, "*Names must have at least 2 characters")
  .max(100, "*Names can't be longer than 100 characters")
  .required(""),
  password: Yup.string()
  .max(100, "*Email must be less than 100 characters")
  .required("The user name and password do not match, please try again"),
});

const BasicForm = () => {
  return (
    <CONTAINER>
      <Formik
        initialValues={{ email:"", password:""}}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting, resetForm}) => {
            // When button submits form and form is in the process of submitting, submit button is disabled
            setSubmitting(true);

            // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {/* Callback function containing Formik state and helpers that handle common form actions */}
      {( {values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting }) => (
        <MYFORM onSubmit={handleSubmit} className="mx-auto">
          {console.log(values)}
          <Form.Group className="mb-2" controlId="formName">
            <Form.Control
              type="text"
              /* This name property is used to access the value of the form element via values.nameOfElement */
              name="email"
              placeholder="Email"
              /* Set onChange to handleChange */
              onChange={handleChange}
              /* Set onBlur to handleBlur */
              onBlur={handleBlur}
              /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
              value={values.email}
              /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
              className={touched.name && errors.name ? "error" : null}
              />
              {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
              {touched.email && errors.email ? (
                <div className="error-message">{errors.name}</div>
              ): null}
          </Form.Group>
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={touched.password && errors.password ? "error" : null}
            />
            {touched.password && errors.password ? (
                <div className="error-message">{errors.password}</div>
              ): null}
          </Form.Group>

          <Form.Group className="mb-4" id="formGridCheckbox">
                <Form.Check className="custom small" type="checkbox" label="Remember Me" />
            </Form.Group>

          <div className="d-grid gap-2 mb-4">
          <Button variant="custom" type="submit" disabled={isSubmitting}>
            Submit
          </Button>
          </div>
        </MYFORM>
      )}
      </Formik>
    </CONTAINER>
  );
}


export default BasicForm;