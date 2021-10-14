import React from 'react'
import { Formik, Form } from 'formik';
import TextField  from '../textFields/TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function MedForm() {
  // Validation 
  // ========================================================================== 
  const validate = Yup.object({
    allergies: Yup.string().required(
      'If you do not have any allergies, please answer "No"'
    ),
    illness: Yup.string().required(
      'If you do not suffer from any illness, please answer "No"'
    ),
    medication: Yup.string().required(
      'If you do not use any medications, please answer "No"'
    ),
  });

  return (
    <Formik
      // Initial values
      initialValues={{
        allergies: '',
        illness: '',
        medication: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <Form>
            <TextField
              type="text"
              label="Allergies"
              name="allergies"
              placeholder="If 'Yes', please let us know..."
            />
            <TextField
              type="text"
              label="Illness(es)"
              name="illness"
              placeholder="If 'Yes', please let us know..."
            />
            <TextField
              type="text"
              label="Vitamins, Supplements & Medications"
              name="medication"
              placeholder="If 'Yes', please let us know..."
            />
            <Link to="/profile">
              <button
                className="btn btn-dark mt-3 col-sm-12"
                type="submit"
                style={{
                  padding: 15,
                  backgroundColor: '#C64156',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 15,
                  marginVertical: 5,
                  height: 50,
                  marginBottom: 20,
                  border: 'none',
                  minWidth: '100%',
                }}
              >
                Continue
              </button>
            </Link>
            <br />
          </Form>
        </div>
      )}
    </Formik>
  )
}
