import React from 'react'
// import React router Component
import { Link , Navigate} from 'react-router-dom';

import LoginForm from './LoginForm';


import { connect, useSelector } from 'react-redux';





const Login = () => {
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)





    if(isAuthenticated){
        return  <Navigate to='/' />
    }
    else {

        return (
            <main id="content">
                <div id="services" className="section  pt-24 pb-8 md:pt-16 md:pb-0 bg-white min-h-96">
                    <div className="container xl:max-w-7xl mx-auto px-4">
                        <section>
                            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                            Login
                                        </h1>
                                        <LoginForm />
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

// const mapStateToProps = state => {
//     return {
//         isAuthenticated: state.auth.isAuthenticated
//     };
// };

// export default connect(mapStateToProps, { login })(Login);
export default Login;
