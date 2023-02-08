import React, {useState, useEffect} from 'react'

import { Formik, Form, Field } from 'formik';
import * as yup from "yup";


import { Navigate, useNavigate } from 'react-router-dom';

import axios from '../../assets/api/api'

import { useSelector , useDispatch} from 'react-redux';
import { load_a_poll } from '../../actions/polls';


function PollEditForm({poll}) {


    const history = useNavigate();
    const dispatch = useDispatch();
    const[pollUpdated, setPollUpdated] = useState(false)
    const authUser = useSelector(state=> state.auth.user)
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)

    // if there is no poll return null
    if(!poll) return ;

    // if the poll editor is not the poll owner return home page
    if(poll.created_by.email !== authUser.email)return <Navigate to="/" />


    const initialValues = {
        question: poll.question,
        choice_1: poll.choices[0]['choice_text'],
        choice_2: poll.choices[1]['choice_text'],
      };

  const handleFormSubmit= (values, {resetForm}) => {
        const choices = []
        
        const choice_1 = {'choice_text': values['choice_1']}
        const choice_2 = {'choice_text': values['choice_2']}
        choices.push(choice_1)
        choices.push(choice_2)
       
       

        const created_by = authUser !== null ? authUser : ""
        const question = values['question']

        const body = {question, created_by, choices}


        axios.put(`/api/polls/edit/${poll.id}/`, body)
        .then((res)=> {
            
            console.log(res.data)
            if(res.data.success === 'Poll updated successfully'){
                setPollUpdated(true)
                resetForm()

            }
        })
        .catch((err)=> {
            console.log(err)
        })
  }


  useEffect(() => {
    pollUpdated ? history(`/polls/${poll.id}/`) : ""
    setPollUpdated(false)
    dispatch(load_a_poll(poll.id))
  }, [pollUpdated, dispatch]);


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


                     
                    </div>

                    <div className="item">
                            <label className="block mt-7"></label>
                        <button type="submit"
                                disabled={( errors.length > 0  
                                            || !values.choice_1 
                                            || !values.choice_2 
                                            || !values.question ) ? true : false}
                                className={`${( errors.length > 0  
                                            || !values.choice_1 
                                            || !values.choice_2 
                                            || !values.question ) ? "bg-red-200" : "bg-red-600"} w-full text-white hover:bg-primary-700  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center `}>
                                Save Changes
                        </button>
                    </div>

                  
                </div>
            </Form>
      )}
    </Formik>
  );
}

export default PollEditForm;

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


  
  });
  

