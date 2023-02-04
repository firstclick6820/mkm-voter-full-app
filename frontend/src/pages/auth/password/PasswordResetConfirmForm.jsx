import React, {useState} from 'react'

import { Formik, Form, Field } from 'formik';
import * as yup from "yup";


import { Link, Navigate, useParams} from 'react-router-dom';


function PasswordResetConfirmForm({action}) {
  const { uid, token } = useParams();
  const [done, setDone] = useState(false)

  const handleFormSubmit = (values, {resetForm}) => {
   
        // const uid = match.params.uid;
        // const token = match.params.token;
        
        const new_password = values['password']
        const re_new_password = values['confirm_password']

        action(uid, token, new_password, re_new_password)
        resetForm();
        setDone(true)

  }

  if(done) {
    return <Navigate to="/account/password_confirm/complete" />
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
            <Form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            htmlFor='password'>Password</label>
                        <Field
                            required
                            id="password"
                            label="Password"
                            name='password'
                            placeholder="********"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                            error={touched.password && errors.password}
                            helpertext={touched.password && errors.password}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />

                            {errors.password && touched.password ? (
                                    <div className="text-red-500">{errors.password}</div>) : null}
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 "
                            htmlFor='confirm_password'>Confirm Password</label>
                        <Field
                            required
                            id="confirm_password"
                            label="confirm_password"
                            name='confirm_password'
                            placeholder="********"
                            type="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.confirm_password}
                            error={touched.confirm_password && errors.confirm_password}
                            helpertext={touched.confirm_password && errors.confirm_password}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />

                            {errors.confirm_password && touched.confirm_password ? (
                                    <div className="text-red-500">{errors.confirm_password}</div>) : null}
                    </div>

                    <div className="mb-6 text-center">
                      

                        <button type="submit" 
                            disabled={Object.keys(errors).length > 0 || !values.password || !values.confirm_password}
                            className={`${errors && Object.keys(errors).length ? "bg-red-200" : "bg-red-600"} w-full text-white hover:bg-primary-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                            Confirm Changes
                    </button>


                    </div>



                  <div className="text-center">
                      Already have an account? 
                      <Link className="inline-block text-sm text-gray-500 align-baseline  hover:underline decoration-2 hover:text-red-600 ml-2"
                          to="/account/login">
                          Login
                      </Link>
                  </div> 


                </div>
            </Form>
      )}
    </Formik>
  );
}

export default PasswordResetConfirmForm;

const checkoutSchema = yup.object().shape({

    password:  yup
                 .string()
                 .required("Password is required")
                 .min(8, 'Password must be at least 8 characters.')
                 .max(32, "Password must not be more then 32 characters.")
                 .matches(/[0-9]/, 'Password must contain at least one digit')
                 .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
                 .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                 .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                 .matches(/[0-9]/, 'Password must contain at least one number')
                 .notOneOf([yup.ref('username'), yup.ref('email')], 'Password cannot be the same as username or email')
                 .required('Password is required'),
    
  confirm_password: yup
                 .string()
                 .required("Confirm password is required")
                 .oneOf([yup.ref('password'), null], "Passwords must match!")
  
  
  });
  


const initialValues = {
    password: "",
    confirm_password: "",
  };


