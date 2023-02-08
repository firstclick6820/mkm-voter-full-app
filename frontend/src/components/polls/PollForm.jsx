import React, {useState, useEffect} from 'react'

import { Formik, Form, Field } from 'formik';
import * as yup from "yup";


import { Link, Navigate, useNavigate } from 'react-router-dom';

import axios from '../../assets/api/api'
import { useSelector , useDispatch} from 'react-redux';
import { loadPolls } from '../../actions/polls';


function PollForm() {
    const history = useNavigate();
    const dispatch = useDispatch();
    const[pollCreated, setPollCreated] = useState(false)
    const authUser = useSelector(state=> state.auth.user)
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)


  const handleFormSubmit= (values, {resetForm}) => {
        const choices = []
        
        const choice_1 = {'choice_text': values['choice_1']}
        const choice_2 = {'choice_text': values['choice_2']}
        // const choice_3 = {'choice_text': values['choice_3']}
        // const choice_4 = {'choice_text': values['choice_4']}
        choices.push(choice_1)
        choices.push(choice_2)
        // choices.push(choice_3)
        // choices.push(choice_4)
       

        const created_by = authUser !== null ? authUser : ""
        const question = values['question']
        const days=values['days']
        const hours = values['hours']
        const minutes= values['minutes']
        const body = {question, days, hours, minutes, created_by, choices}
        axios.post('/api/polls/create/', body)
        .then((res)=> {
            
            if(res.data.success === 'Poll created successfully'){
                
                setPollCreated(true)
                resetForm()

            }
        })
        .catch((err)=> {
            console.log(err)
        })
  }


  useEffect(() => {
    pollCreated ? history('/polls/') : ""
    setPollCreated(false)
    dispatch(loadPolls())
  }, [pollCreated, dispatch]);


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


                    {/* Question Filed */}
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                               htmlFor="question">Question</label>
                        <Field
                            id='question'
                            required
                            label="Question"
                            placeholder="e.g What is your favorite Place?"
                            type="text"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.question}
                            error={touched.question && errors.question}
                            helpertext={touched.question && errors.question}
                            className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
        
                            {errors.question && touched.question ? (
                                    <div className="text-red-500">{errors.question}</div>) : null}
                    </div>
              
                    {/* Date  Fields */}
                    <div className="grid grid-cols-3 gap-2">
                          <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900"
                                    htmlFor="days">Days</label>
                              <Field
                                  as="select"
                                  id='days'
                                  required
                                  label="Days"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.days}
                                  error={touched.days && errors.days}
                                  helpertext={touched.days && errors.days}
                                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" >
                                  {[...Array(8).keys()].map(num => (
                                      <option key={num} value={num}>{num}</option>
                                  ))}
                              </Field>
                                  {errors.days && touched.days ? (
                                      <div className="text-red-500">{errors.days}</div>) : null}
                          </div>
                          <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900"
                                    htmlFor="hours">Hours</label>
                              <Field
                                  as="select"
                                  id='hours'
                                  required
                                  label="Hours"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.hours}
                                  error={touched.hours && errors.hours}
                                  helpertext={touched.hours && errors.hours}
                                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" >
                                  {[...Array(24).keys()].map(num => (
                                      <option key={num} value={num}>{num}</option>
                                  ))}
                              </Field>
                                  {errors.hours && touched.hours ? (
                                      <div className="text-red-500">{errors.hours}</div>) : null}
                          </div>
                          <div>
                              <label className="block mb-2 text-sm font-medium text-gray-900"
                                    htmlFor="minutes">Minutes</label>
                              <Field
                                  as="select"
                                  id='minutes'
                                  required
                                  label="Minutes"
                                  onBlur={handleBlur}
                                  onChange={handleChange}
                                  value={values.minutes}
                                  error={touched.minutes && errors.minutes}
                                  helpertext={touched.minutes && errors.minutes}
                                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" >
                                  {[...Array(60).keys()].map(num => (
                                      <option key={num} value={num}>{num}</option>
                                  ))}
                              </Field>
                                  {errors.minutes && touched.minutes ? (
                                      <div className="text-red-500">{errors.minutes}</div>) : null}
                          </div>
                          
                    </div>

                    {/* Choices Fields */}
                    <div className="grid grid-cols-1 gap-2 justify-between">
                        <div className="item">
                            <label className="block mb-2 text-sm font-medium text-gray-900"
                                  htmlFor="choice_1">Choice  *</label>
                            <Field
                                id='choice_1'
                                required
                                label="Choice 1"
                                placeholder="Kabul"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.choice_1}
                                error={touched.choice_1 && errors.choice_1}
                                helpertext={touched.choice_1 && errors.choice_1}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
            
                                {errors.choice_1 && touched.choice_1 ? (
                                        <div className="text-red-500">{errors.choice_1}</div>) : null}
                        </div>


                        <div className="item">
                            <label className="block mb-2 text-sm font-medium text-gray-900"
                                  htmlFor="choice_*">Choice  *</label>
                            <Field
                                id='choice_2'
                                required
                                label="Choice 2"
                                placeholder="Logar"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.choice_2}
                                error={touched.choice_2 && errors.choice_2}
                                helpertext={touched.choice_2 && errors.choice_2}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
            
                                {errors.choice_2 && touched.choice_2 ? (
                                        <div className="text-red-500">{errors.choice_2}</div>) : null}
                        </div>


                        {/* <div className="item hidden">
                            <label className="block mb-2 text-sm font-medium text-gray-900"
                                  htmlFor="3">Choice *</label>
                            <Field
                                id='choice_3'
                                required
                                label="Choice 3"
                                placeholder="Khost"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.choice_3}
                                error={touched.choice_3 && errors.choice_3}
                                helpertext={touched.choice_3 && errors.choice_3}
                                className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
            
                                {errors.choice_3 && touched.choice_3 ? (
                                        <div className="text-red-500">{errors.choice_3}</div>) : null}
                        </div> */}


                        {/* <div className="item hidden">
                            <label className="block mb-2 text-sm font-medium text-gray-900"
                                  htmlFor="choice_4">Choice *</label>
                            <Field
                                id='choice_4'
                                required
                                label="Choice 4"
                                placeholder="Mazar"
                                type="text"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.choice_4}
                                error={touched.choice_4 && errors.choice_4}
                                helpertext={touched.choice_4 && errors.choice_4}
                                className=" bg-gray-50 border  border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
            
                                {errors.choice_4 && touched.choice_4 ? (
                                        <div className="text-red-500">{errors.choice_4}</div>) : null}
                        </div> */}
                    </div>

                    <div className="item">
                            <label className="block mt-7"></label>
                        <button type="submit"
                                disabled={( errors.length > 0  
                                            || !values.choice_1 
                                            || !values.choice_2 
                                            || !values.days 
                                            || !values.hours
                                            || !values.minutes
                                            || !values.question ) ? true : false}
                                className={`${( errors.length > 0  
                                            || !values.choice_1 
                                            || !values.choice_2 
                                            || !values.days 
                                            || !values.hours
                                            || !values.minutes
                                            || !values.question ) ? "bg-red-200" : "bg-red-600"} w-full text-white hover:bg-primary-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center `}>
                                Create Poll
                        </button>
                    </div>

                  
                </div>
            </Form>
      )}
    </Formik>
  );
}

export default PollForm;

const checkoutSchema = yup.object().shape({

  
    question:     yup
                 .string()
                 .required("Question is required!"),

    choice_1:     yup
                 .string()
                 .required("Choice is required!"),
    choice_2:     yup
                 .string()
                 .required("Choice is required!"),
    // choice_3:     yup
    //              .string()
    //              .required("Choice is required!"),
    
    // choice_4:     yup
    //              .string()
    //              .required("Choice is required!"),
             

  
  });
  


const initialValues = {
    question: "",
    days: "",
    hours: "",
    minutes: "",
    choice_1: "",
    choice_2: "",
    // choice_3: "",
    // choice_4: "",
  };