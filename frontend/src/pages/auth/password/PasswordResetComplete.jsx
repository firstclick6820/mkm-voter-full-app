import React from 'react'

import { Link } from 'react-router-dom'

const PasswordResetComplete = () => {
  return (
    <>
        <main id='content'>
            <div className="section relative z-0 py-16 md:pt-32 md:pb-20 ">
                <div className="container xl:max-w-7xl mx-auto px-4 text-center">
                    <div className="container p-5">
                        <h2 className="font-weight-bold mt-3 text-2xl font-bold mb-5">Password Reset Done</h2>
                            <p className='mb-10'>Your password has been set. You may go ahead and log in now!</p>                 
                            <p>
                                <Link   to="/account/login"
                                        className="hover:text-red-600 hover:underline decoration-2 cursor-pointer text-indigo-600 mt-20">Login
                                </Link>
                            </p>
                
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default PasswordResetComplete


