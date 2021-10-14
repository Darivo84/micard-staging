import React, { useContext, useRef } from 'react'
// import { Formik, Form } from 'formik';
import TextField  from '../textFields/TextField';
// import * as Yup from 'yup';
import { loginCall } from '../../api/ApiCalls';
import {AuthContext} from '../../context/AuthContext';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function LoginForm() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, dispatch } = useContext(AuthContext)

  // Validation 
  // ========================================================================== 
  // const validate = Yup.object({
  //   email: Yup.string()
  //     .email('Email is invalid! Please try again!')
  //     .required('Email is required!'),
  //   password: Yup.string()
  //     .min(6, 'Password must contain at least 6 characters.')
  //     .required('Password is required!'),
  // });


  // Login function
  // ========================================================================== 
  const handleClick = (values) => {
    loginCall({...values}, dispatch)
  }
  // const login = async (values, formikActions) => {
    // const res = await client
    //   .post('/login', {
    //     ...values,
    //   })
      // .then(history.push('/info'));

    // console.log(res.data);
    // formikActions.resetForm();
    // formikActions.setSubmitting(false);
  // };

  // React.useEffect(() => {
  //   login();
  // });

  console.log(user);

  return (
    // <Formik
    //   // Initial values
    //   initialValues={{
    //     email: '',
    //     password: '',
    //   }}
    //   validationSchema={validate}
    //   onSubmit={handleClick}
    // >
    //   {({
    //     values,
    //     errors,
    //     touched,
    //     isSubmitting,
    //     handleChange,
    //     handleBlur,
    //     handleSubmit,
    //   }) => {
    //     const { email, password } = values;

        // return (
          <div>
            <h4
              className="mv-4 font-weight-bold-display-4"
              style={{
                fontSize: '18px',
                color: '#733bc3',
                fontFamily: 'Nunito',
                fontWeight: 'bold',
                textAlign: 'center',
              }}
            >
              Welcome Back! Please Login.
            </h4>
            <form onSubmit={handleClick}>
              <TextField
                ref={email}
                type="email"
                label="Email"
                name="email"
                required
                placeholder="Your email address..."
              />
              <TextField
                ref={password}                
                type="password"
                label="Password"
                name="password"
                required
                placeholder="Your password..."
              />
              {isFetching ? 
              <Box sx={{ width: '100%' }}>
                <LinearProgress color="inherit"  />
              </Box>  : 
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
                Login
              </button>
              }
            </form>
          </div>
        );
    //   }}
    // </Formik>
  // )
}
