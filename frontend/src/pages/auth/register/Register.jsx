import React from 'react'

import { Link , Navigate} from 'react-router-dom'
import { connect, useSelector } from 'react-redux'


// import actions
import {signup} from './../../../actions/auth'

// import SingUp Form
import SignUpForm from './SignUpForm'





const Register = () => {
  const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)


  if(isAuthenticated) {
      return <Navigate to="/" />
  }
  else {
      return (
        <main id="content">
          <div className="section pt-24 pb-8 md:pt-16 md:pb-0 bg-white min-h-96">
                <div className="container xl:max-w-6xl mx-auto px-4">
                    <section className="">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                        Create and account
                                    </h1>

                                    <SignUpForm/>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
          </div>
        </main>
      )

  }
};




export default Register;


