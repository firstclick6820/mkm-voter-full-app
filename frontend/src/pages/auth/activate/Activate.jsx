import React, { useState } from 'react'
// import React router Component
import { Link , Navigate} from 'react-router-dom';




import { connect } from 'react-redux';
import { verify } from '../../../actions/auth';




const Activate = ({verify, match}) => {
  const [verified , setVerified] = useState(false)
    

  const verify_account =  e => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token)
    setVerified(true)
  }
    if(verified){
        return  <Navigate to="/user/profile" />
    
    }
    else {

        return (
            <main id="content">
                <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white min-h-96">
                    <div className="container xl:max-w-7xl mx-auto px-4">
                        <section className=" dark:bg-gray-900">
                            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Activate Account
                                        </h1>
                                        <a    href="#" 
                                              onClick={verify_account}
                                              className="">
                                        </a>
                                      
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
        </main>
        )
    };
};


export default connect(null, { verify })(Activate);
