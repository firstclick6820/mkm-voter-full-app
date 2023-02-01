import React, {useEffect} from 'react'


// import global pages / components
import Navbar from '../pages/global/navbar/Navbar'
import Footer from '../pages/global/footer/Footer'


import { connect } from 'react-redux'

// import actions
import {checkAuthenticated, load_user} from '../actions/auth'



const MainLayout = ({ checkAuthenticated, load_user, children }) => {

  useEffect(() => {
     checkAuthenticated();
     load_user();
  }, [])


  return (
    <>  
        <Navbar />
            {children}
        {/* <Footer /> */}
    </>
  )
};

export default connect(null, {checkAuthenticated, load_user})(MainLayout);




