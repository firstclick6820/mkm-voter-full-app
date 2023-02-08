import React from 'react'
import PollEditForm from './PollEditForm'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


const PollEditModel = ({show, handleClose, poll}) => {
    const authUser = useSelector(state=> state.auth.user)
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    

    if(!isAuthenticated && authUser === null) return <Navigate to="/" />;


    
  return (
    <>
        <div tabIndex="-1" 
             style={{ justifyContent: "center", alignItems: "center"}}
             className={`${show ? "flex": "hidden"} fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
            <div className="relative w-full h-full max-w-md md:h-auto">
                
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">


                    <button onClick={handleClose}
                            type="button" 
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>


                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit Poll</h3>
                        <PollEditForm  poll={poll}/>
                    </div>
                </div>
            </div>
        </div> 

    </>
  )
}

export default PollEditModel