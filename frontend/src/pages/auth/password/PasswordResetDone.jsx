import React from 'react'

import { Link } from 'react-router-dom'

const PasswordResetDone = () => {
  return (
        <main id='content'> 
            <div className="section relative z-0 py-16 md:pt-32 md:pb-20 bg-gray-50">
                <div className="container xl:max-w-7xl mx-auto px-4 text-center">
                    <div className="container p-5">
                        <h2 className="font-weight-bold mt-3">Password Reset Instructions Sent</h2>
                        
                        <hr className="mb-6 border-t" />
                        <p>We've emailed you instructions for setting your password, if an account exists with the email you entered. You should receive them shortly.<br />If you don't receive an email, please make sure you've entered the address you registered with, and check your spam folder.</p>
                        <p><Link to="/"
                                 className="hover:text-red-600 hover:underline decoration-2 cursor-pointer text-indigo-600 mt-10">
                                Go Home
                           </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
  )
}

export default PasswordResetDone