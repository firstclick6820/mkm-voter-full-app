import React, {useState} from 'react'

import { Formik, Form, Field } from 'formik';
import * as yup from "yup";


import axios from '../../../assets/api/api'

import { Link, Navigate } from 'react-router-dom';

import { reset_password } from '../../../actions/auth';

import {useDispatch} from 'react-redux'

function PasswordResetForm() {
      const [sent, setSent] = useState(false)
      const dispatch = useDispatch();




      const handleFormSubmit = (values, {resetForm}) => {
            const email = values['email']
            
            dispatch(reset_password(email))
            .then((response) => {
                if (response) {
                    setSent(true)
                    resetForm()
                } else {
                    console.log('Error')
                    // setLoginfailed(true);
                    // setTimeout(() => {
                    // setLoginfailed(false);
                    // }, 2000);
                }
            });
      }

  if(sent){
    return <Navigate to="/account/password_reset/done" />
  }



  return (
    <Formik
    
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      validationSchema={checkoutSchema}
    >
      {({ values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
            <Form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                               htmlFor="email">Email</label>
                        <Field
                            id='email'
                            required
                            label="Email"
                            name='email'
                            placeholder="example@example.com"
                            type="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.email}
                            error={touched.email && errors.email}
                            helpertext={touched.email && errors.email}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
        
                            {errors.email && touched.email ? (
                                    <div className="text-red-500">{errors.email}</div>) : null}
                    </div>
              


                    
                    <div className="mb-6 text-center">
                        <button type="submit" 
                            disabled={Object.keys(errors).length > 0 || !values.email}
                            className={`${(Object.keys(errors).length > 0 || !values.email) ? "bg-red-200" : "bg-red-600"} w-full text-white hover:bg-primary-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                            
                            Reset Password
                        </button>
                    </div>
                                    
                    <hr className="mb-6 border-t" />

                    <div className="text-center">
                        Don't have an account?
                        <Link to="/account/register"
                            className="inline-block text-sm text-gray-500 align-baseline  hover:underline decoration-2 hover:text-red-600 ml-2">
                            Create one
                        </Link>
                    </div>

                                    
                                    

                    <div className="text-center">
                        Already have an account? 
                        <Link to="/account/login"
                              className="inline-block text-sm text-gray-500 align-baseline  hover:underline decoration-2 hover:text-red-600 ml-2">
                              Login
                        </Link>
                    </div>
                </div>
            </Form>
      )}
    </Formik>
  );
}

export default PasswordResetForm;



const validateEmail = async (email) => {

  const response = await axios.get(`api/users/check_email_exists/${email}/`);
  const isEmailAvailable = response.data.exists;
    
    if (!isEmailAvailable) {
      throw new yup.ValidationError('No such account found associated with this email.', email, 'email');
    }

    return response
  };



const checkoutSchema = yup.object().shape({

  
    email:     yup
                 .string()
                 .email('Invalid email')
                 .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email')
                 .required("Email is required!")
                 .test('email', 'No such account found associated with this email.', validateEmail),
  
  
  });
  


const initialValues = {
    email: "",
  };