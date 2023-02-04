import React, {useEffect, useState} from 'react'

// import formik and yup
import { Formik, Form, Field } from 'formik';
import * as yup from "yup";

import { useSelector, useDispatch } from 'react-redux';
import { load_user_profile } from '../../../actions/auth';


import axios from '../../../assets/api/api'
import { Navigate , useNavigate} from 'react-router-dom';

const SettingsForm = ({id}) => {
    const history = useNavigate();
    const [updated, setUpdated] = useState(false)
    const dispatch  = useDispatch();
    const authUser = useSelector(state=> state.auth.user)
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    const authorized = (authUser !== null && authUser.id === id) ? true : false

    const userProfile = useSelector(state => state.auth.userProfile)


    // Initial Values for the formik form
    const initialValues = {
        account_type: userProfile.user.account_type,
        first_name: userProfile.first_name || "",
        last_name: userProfile.last_name || "",
        bio : userProfile.bio || "",
        summary: userProfile.summary || "",
        address: userProfile.address || ""
      };

      


    const handleFormSubmit = (values, {resetForm}) => {
        if(!values) return ;  

        const first_name = values.first_name;
        const last_name = values.last_name;
        const bio = values.bio;
        const summary = values.summary;
        const address = values.address;

        const body = {
                    'first_name': first_name,
                    'last_name': last_name,
                    'bio': bio,
                    'summary': summary,
                    'address': address }

        axios.patch(`/api/users/settings/${authUser.id}/`, body)
        .then((res)=> {
            if(res.data.success){
                setUpdated(true)
            }
        })
        .catch((err) => {
            setUpdated(false)
            console.log(err)
        })


    }


    useEffect(() => {
        dispatch(load_user_profile(authUser.id))
        updated ? history(`/user/profile/${authUser.id}/`) : history(`/user/settings/${authUser.id}/`)
    }, [dispatch, updated])


    if(userProfile === null && !isAuthenticated && !authorized) return <Navigate to="/account/login/" />;

  return (
    <>
        <Formik
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={checkoutSchema}>
            {({ values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
            }) => (
                <Form className="mt-6 border-gray-400" onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="personal w-full border-gray-400 pt-2">
                            <h2 className="text-2xl text-gray-900 mb-4">Account Settings:</h2>

                            <div className="w-full md:w-full px-3 mb-6">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="account_type">Account Type</label>
                                <Field
                                        id='account_type'
                                        required
                                        label="account_type"
                                        name='account_type'
                                        placeholder="creator"
                                        type="text"
                                        disabled
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.account_type}
                                        error={touched.account_type && errors.account_type}
                                        helpertext={touched.account_type && errors.account_type}
                                        className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                
                                    {errors.account_type && touched.account_type ? (
                                            <div className="text-red-500">{errors.account_type}</div>) : null}
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label  htmlFor='first_name'
                                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >First name</label>
                                    <Field 
                                            className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' 
                                            id='first_name'
                                            required
                                            label="first_name"
                                            name='first_name'
                                            placeholder="John"
                                            type="text"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.first_name}
                                            error={touched.first_name && errors.first_name}
                                            helpertext={touched.first_name && errors.first_name}/>
                                            {errors.first_name && touched.first_name ? (
                                            <div className="text-red-500">{errors.first_name}</div>) : null}
                                </div>
                                <div className='w-full md:w-1/2 px-3 mb-6'>
                                    <label  htmlFor='last_name'
                                            className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Last name</label>
                                    <Field 
                                        className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' 
                                        id='last_name'
                                        required
                                        label="last_name"
                                        name='last_name'
                                        placeholder="Doe"
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.last_name}
                                        error={touched.last_name && errors.last_name}
                                        helpertext={touched.last_name && errors.last_name}/>
                                        {errors.last_name && touched.last_name ? (
                                        <div className="text-red-500">{errors.last_name}</div>) : null}
                                    
                                </div>
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label  htmlFor='address'
                                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Address</label>
                                <Field 
                                        className='rounded-md leading-normal resize-none w-full  py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                                        id='address'
                                        required
                                        label="address"
                                        name='address'
                                        placeholder="Dubai, UAE."
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address}
                                        error={touched.address && errors.address}
                                        helpertext={touched.address && errors.address}/>
                                        {errors.address && touched.address ? (
                                        <div className="text-red-500">{errors.address}</div>) : null}
                            </div>             
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label  htmlFor='bio'
                                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                                <Field 
                                        className='rounded-md leading-normal resize-none w-full  py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                                        id='bio'
                                        required
                                        label="bio"
                                        name='bio'
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.bio}
                                        error={touched.bio && errors.bio}
                                        helpertext={touched.bio && errors.bio}/>
                                        {errors.bio && touched.bio ? (
                                        <div className="text-red-500">{errors.bio}</div>) : null}
                            </div>
                            <div className='w-full md:w-full px-3 mb-6'>
                                <label  htmlFor='summary'
                                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Summary</label>
                                <textarea 
                                        className='rounded-md leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                                        required
                                        component="textarea"
                                        id='summary'
                                        label="summary"
                                        name='summary'
                                        type="text"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.summary}
                                        error={touched.summary && errors.summary}
                                        helpertext={touched.summary && errors.summary}/>
                                        {errors.summary && touched.summary ? (
                                        <div className="text-red-500">{errors.summary}</div>) : null}
                            </div>

                            <div className="flex justify-end">
                                <button 
                                        className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                            </div> 
                           


                          
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    </>
  )
}

export default SettingsForm

const checkoutSchema = yup.object().shape({

  
    first_name:     yup
                 .string()
                 .required("Firstname is required!"),
    last_name:     yup
                 .string()
                 .required("Lastname is required!"),

    bio:     yup
                 .string()
                 .required("Bio is required!"),
    summary:     yup
                 .string()
                 .required("Summary is required!"),
    address:     yup
                 .string()
                 .required("Address is required!"),
  
  
  });
  




{/* <form className="mt-6 border-gray-400" action="" method="POST">             
    <div className='flex flex-wrap -mx-3 mb-6'> 
        <div className="personal w-full border-gray-400 pt-2">
            <h2 className="text-2xl text-gray-900 mb-4">Account Settings:</h2>

                <div className='w-full md:w-full px-3 mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>Account Type</label>
                    <input 
                        className='bg-gray-200 appearance-none block w-full text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' 
                        type='text'  
                        required
                        disabled
                        value="" />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className='w-full md:w-1/2 px-3 mb-6'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >first name</label>
                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' 
                        type='text'  
                        required
                        name='first_name'
                        value="" />
                    </div>
                    <div className='w-full md:w-1/2 px-3 mb-6'>
                        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >last name</label>
                        <input className='appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500' 
                        type='text'  
                        required
                        name='last_name'
                        value="" />
                    </div>
                </div>
                <div className='w-full md:w-full px-3 mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Address</label>
                    <input className='rounded-md leading-normal resize-none w-full  py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                    required
                    type="text"
                    name="address"
                    value=""
                    />
                </div>             
                <div className='w-full md:w-full px-3 mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Bio</label>
                    <input className='rounded-md leading-normal resize-none w-full  py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                    required
                    type="text"
                    name="bio"
                    value=""
                    />
                </div>
                <div className='w-full md:w-full px-3 mb-6'>
                    <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' >Summary</label>
                    <textarea className='rounded-md leading-normal resize-none w-full h-20 py-2 px-3 shadow-inner border border-gray-400 font-medium placeholder-gray-700 focus:outline-none focus:bg-white'  
                    required
                    name="summary"
                    >Summary</textarea>
                </div>
                <div className="flex justify-end">
                    <button className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3" type="submit">save changes</button>
                </div>
        </div>
    </div>
</form> */}