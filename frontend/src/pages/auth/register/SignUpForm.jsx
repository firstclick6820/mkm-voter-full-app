import React , {useState, useEffect} from 'react'


// import formik with yup
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";


import { Link, Navigate } from 'react-router-dom';


// import axios
import axios from '../../../assets/api/api'


function SignUpForm({action}) {
    const [accountCreated, setAccountCreated] = useState(false)



    const handleFormSubmit = (values, {resetForm}) => {
        const email = values['email']
        const password = values['password']
        const re_password = values['re_password']
        const account_type = values['account_type']
        

        action(account_type, email, password, re_password)
        setAccountCreated(true)
        resetForm()
        
    }

    if(accountCreated){
        return <Navigate to="/account/login" />
    }else {
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
                                    htmlFor="email">Account Type</label>
                                <Field
                                    id="account_type"
                                    name="account_type"
                                    component="select"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.account_type}
                                    error={touched.account_type && errors.account_type}
                                    helpertext={touched.account_type && errors.account_type}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                    <option>Select Account Type</option>
                                    <option value="creator">I am a content creator</option>
                                    <option value="supporter">I want to support and vote</option>
                                </Field> 
                                    {errors.account_type && touched.account_type ? (
                                            <div className="text-red-500">{errors.account_type}</div>) : null}
                            </div>


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
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                
                                    {errors.email && touched.email ? (
                                            <div className="text-red-500">{errors.email}</div>) : null}
                            </div>

                                        
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
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

                                    {errors.password && touched.password ? (
                                            <div className="text-red-500">{errors.password}</div>) : null}
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    htmlFor='confirm_password'>Confirm Password</label>
                                <Field
                                    required
                                    label="Confirm Password"
                                    name='re_password'
                                    id='re_password'
                                    placeholder="********"
                                    type="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.re_password}
                                    error={touched.re_password && errors.re_password}
                                    helpertext={touched.re_password && errors.re_password}
                                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

                                    {errors.re_password && touched.re_password ? (
                                            <div className="text-red-500">{errors.re_password}</div>) : null}
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input 
                                            id="terms" 
                                            aria-describedby="terms" 
                                            type="checkbox" 
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                            required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label  htmlFor="terms" 
                                            className="font-light text-gray-500 dark:text-gray-300">I accept the 
                                            <Link to="/"
                                                className="hover:underline decoration-2 hover:text-red-600">
                                                Terms and Conditions
                                            </Link>
                                    </label>
                                </div>
                            </div>

                            
                


                            <button type="submit" 
                                    disabled={Object.keys(errors).length > 0 || !values.account_type || !values.email || !values.password || !values.re_password}
                                    className={`${errors && Object.keys(errors).length ? "bg-red-200" : "bg-red-600"} w-full text-white hover:bg-primary-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}>
                                    Create an account
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">Already have an account?
                                <Link   to="/account/login" 
                                        className="hover:underline decoration-2 hover:text-red-600 ml-2">
                                        Login here
                                </Link>
                            </p>
                        </div>
                    </Form>
            )}
            </Formik>
        );
    }
}

export default SignUpForm;

// create a custom validation function that makes an API call to check if the username is available
const validateEmail = async (email) => {

    const response = await axios.get(`api/users/check_email/${email}/`);
    const isEmailAvailable = response.data.available;
    
    if (!isEmailAvailable) {
      throw new yup.ValidationError('This email is already taken.', email, 'email');
    }
  
    return response
  };
  

  

  

const checkoutSchema = yup.object().shape({
    account_type: yup
                .string()
                .oneOf(['creator', 'supporter'], 'Invalid account type')
                .required('Account type is required'),


  
    email:     yup
                 .string()
                 .email('Invalid email')
                 .matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,'Invalid email')
                 .required("Email is required!")
                 .test('email', 'This email is already taken.', validateEmail),
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
  
  
    re_password: yup
                .string()
                .required("Confirm password is required")
                .oneOf([yup.ref('password'), null], "Passwords must match!")
  
  });
  


const initialValues = {
    account_type:"",
    email: "",
    password: "",
    re_password: "",
  };