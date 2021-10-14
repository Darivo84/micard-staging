import React from 'react'
import { Formik, Form } from 'formik';
import TextField  from '../textFields/TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
// import axios  from 'axios';

export default function InfoForm() {
  // Validation 
  // ========================================================================== 
  const validate = Yup.object({
    dob: Yup.string().required('Date of birth is required!'),
    gender: Yup.string()
      .min(4, 'Gender must be at least 4 characters long.')
      .max(6, 'Your gender cannot be more than 6 characters.')
      .required('Your gender is required!'),
    address1: Yup.string().required('Your address is required!'),
    address2: Yup.string().required('Your address is required!'),
    city: Yup.string().required('Your city is required!'),
    state: Yup.string().required('Your state, county or province is required!'),
    country: Yup.string().required('Your country is required!'),
    postalCode: Yup.string().required('Your postal or zip code is required!'),
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

  // Signup function
  // ========================================================================== 
  const handleClick = async (values) => {
    console.log(values)
  }

  return (
    <Formik
      // Initial values
      initialValues={{
        dob: '',
        gender: '',
        address1: '',
        address2: '',
        city: '',
        county: '',
        country: '',
        postalCode: '',
      }}
      validationSchema={validate}
      onSubmit={handleClick}
    >
      
      {(formik) => (
        <div>
          <Form>
            <TextField
              type="text"
              label="Date of Birth"
              name="dob"
              placeholder="dd / mm / yyyy"
            />

            <div className="row">
              <div className="col-sm-4 d-flex justify-content-center">
                <Link to="#" style={{ textDecoration: 'none' }}>
                  {/* <MaleIcon /> */}

                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      textAlign: 'left',
                      color: '#C64156',
                      paddingBottom: 5,
                    }}
                  >
                    Male
                  </p>
                </Link>
              </div>
              <div className="col-sm-4 d-flex justify-content-center">
                <Link to="#" style={{ textDecoration: 'none' }}>
                  {/* <FemaleIcon style={{ color: '#C64156' }} /> */}

                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      textAlign: 'left',
                      color: '#C64156',
                      paddingBottom: 5,
                    }}
                  >
                    Female
                  </p>
                </Link>
              </div>
              <div className="col-sm-4 d-flex justify-content-center">
                <Link to="#" style={{ textDecoration: 'none' }}>
                  {/* <OtherIcon /> */}

                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      textAlign: 'left',
                      color: '#C64156',
                      paddingBottom: 5,
                    }}
                  >
                    Other
                  </p>
                </Link>
              </div>
            </div>

            {/* <TextField
              type="text"
              label="Gender"
              name="gender"
              placeholder="Male / Female / Other"
            /> */}
            <TextField
              type="text"
              label="Address Line 1"
              name="address1"
              placeholder="Your address..."
            />
            <TextField
              type="text"
              label="Address Line 2"
              name="address2"
              placeholder="Your address continued..."
            />
            <TextField
              type="text"
              label="City"
              name="city"
              placeholder="Your city..."
            />
            <TextField
              type="text"
              label="State / County / Province"
              name="state"
              placeholder="Your state, county or province..."
            />
            <TextField
              type="text"
              label="Country"
              name="country"
              placeholder="Your country..."
            />
            <TextField
              type="text"
              label="Postal / Zip Code"
              name="postalCode"
              placeholder="Your postal or zip code..."
            />
            {/* <Link to="/medical"> */}
              <button
                className="btn btn-dark mt-3 col-sm-12"
                // submitting={isSubmitting.toString()}
                // onClick={handleSubmit}
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
            {/* </Link> */}
            <br />
          </Form>
        </div>
      )}
    </Formik>
  )
}
