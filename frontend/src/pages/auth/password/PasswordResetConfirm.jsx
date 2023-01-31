import React, {useState, useEffect} from 'react'

import PasswordResetConfirmForm from './PasswordResetConfirmForm'


// import react-redux components
import { connect } from 'react-redux'


// import actions
import { reset_password_confirm } from './../../../actions/auth'


const PasswordResetConfirm = ({ match, reset_password_confirm }) => {



    return (
        <div>
            <main id='content'>
                <div className="section relative z-0 py-16 md:pt-12 md:pb-20">
                    <div className="container xl:max-w-7xl mx-auto px-4">
                        <div className="flex justify-center px-6 my-12">
                            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                        
                            
                                <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">

                                    <div className="px-8 mb-4 text-center">
                                        <h3 className="pt-4 mb-2 text-2xl">Reset Your Password</h3>
                                        <p className="mb-4 text-sm text-gray-700">
                                            Your new password must be different from previous used passwords.
                                        </p>
                                    </div>

                                    <PasswordResetConfirmForm match={match} action={reset_password_confirm}/>

                                </div>


                                
                                <div
                                    className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                                    style={{backgroundImage: "url('https://source.unsplash.com/3wPJxh-piRw/600x800')"}}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default connect(null, {reset_password_confirm})(PasswordResetConfirm);

