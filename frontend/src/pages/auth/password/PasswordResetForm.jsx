import React, {useState} from 'react'

import { Formik, Form, Field } from 'formik';
import * as yup from "yup";


import { Link, Navigate } from 'react-router-dom';


function PasswordResetForm({password_reset}) {
  const [sent, setSent] = useState(false)
  const handleFormSubmit = (values, {resetForm}) => {
        const email = values['email']
        password_reset(email)
        resetForm();
        setSent(true)      
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
                            error={!!touched.email && !!errors.email}
                            helpertext={touched.email && errors.email}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        
                            {errors.email && touched.email ? (
                                    <div className="text-red-500">{errors.email}</div>) : null}
                    </div>
              


                    
                    <div className="mb-6 text-center">
                        <button
                            className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                            type="submit">
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

const checkoutSchema = yup.object().shape({

  
    email:     yup
                 .string()
                 .email('Invalid email')
                 .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email')
                 .required("Email is required!"),
                //  .test('email', 'This email is already taken.', validateEmail),
  
  
  });
  


const initialValues = {
    email: "",
    password: "",
  };