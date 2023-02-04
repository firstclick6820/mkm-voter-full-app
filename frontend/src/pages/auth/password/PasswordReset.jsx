import React, {useState} from 'react'


// import React Router Components
import { Link, Navigate } from 'react-router-dom'


import { reset_password } from '../../../actions/auth'
import { connect } from 'react-redux'


import PasswordResetForm from './PasswordResetForm'

const PasswordReset = ({reset_password}) => {
     const [requestSent, setRequestSent] = useState(false)


    if(requestSent){
        
        return  <Navigate to="/account/password_reset/done" />
    }
    else {
        return (
            <main id='content'>
                <div className="section pt-24 pb-8 md:pt-16 md:pb-0 bg-white min-h-96">
                        <div className="container xl:max-w-7xl mx-auto px-4">
                            <div className="flex justify-center px-6 my-12">
                                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                                
                                    <div style={{ backgroundImage: "url('https://source.unsplash.com/oWTW-jNGl9I/600x800')" }}
                                        className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
                                        
                                    </div>
                                
                                    <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">

                                        <div className="px-8 mb-4 text-center">
                                            <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                                            <p className="mb-4 text-sm text-gray-700">
                                                Forgotten your password? Enter your email address below, and we'll email instructions for setting a new one.
                                            </p>
                                        </div>

                                        <PasswordResetForm password_reset={reset_password}/>

                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </main>
        )
    }
};

export default connect(null, {reset_password})(PasswordReset);

