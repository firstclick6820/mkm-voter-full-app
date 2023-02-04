import React, {useContext, useState, useEffect} from 'react'



// import formik and yup
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";



// import react router dom components
import { Link , Navigate} from 'react-router-dom';



function LoginForm({login}) {

  const handleFormSubmit = (values, {resetForm}) => {
    const email = values['email']
    const pwd = values['password']


    if(login(email, pwd)){
      resetForm()
      return  <Navigate to='/' />
    }
    else {
            console.log('Incorrect Password')
    }
    
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
                        <label className="block mb-2 text-sm font-medium text-gray-900"
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
                                
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900"
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
                            error={touched.email && errors.email}
                            helpertext={touched.password && errors.password}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />

                            {errors.password && touched.password ? (
                                    <div className="text-red-500">{errors.password}</div>) : null}
                    </div>

                    <div>
                        <Link to="/account/password_reset"  
                              className="hover:underline decoration-2 hover:text-red-600">
                              Forgot Password
                        </Link>
                    </div>


                    
                    <button type="submit" 
                            disabled={Object.keys(errors).length > 0 || !values.email || !values.password}
                            className={`${errors && Object.keys(errors).length ? "bg-red-200" : "bg-red-600"} w-full text-white hover:bg-primary-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center `}>
                            
                            Login
                    </button>


        



                    <p className="text-sm font-light text-gray-500 ">Don't have an account?
                        <Link   to="/account/register" 
                                className="hover:underline decoration-2 hover:text-red-600 ml-2">
                                Create one
                        </Link>
                    </p>
                </div>
            </Form>
      )}
    </Formik>
  );
}

export default LoginForm;

const checkoutSchema = yup.object().shape({

  
    email:     yup
                 .string()
                 .email('Invalid email')
                 .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email')
                 .required("Email is required!"),
                //  .test('email', 'This email is already taken.', validateEmail),
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
  
  
  });
  


const initialValues = {
    email: "",
    password: "",
  };