import React, {useEffect, useState} from 'react'


// import global pages / components
import Navbar from '../pages/global/navbar/Navbar'
import Footer from '../pages/global/footer/Footer'


import { connect } from 'react-redux'

// import actions
import {checkAuthenticated, load_user} from '../actions/auth'



const MainLayout = (props) => {

  useEffect(() => {
      props.checkAuthenticated();
      props.load_user();
  }, [])


  return (
    <>  
        <Navbar />
            {props.children}
        {/* <Footer /> */}
    </>
  )
};

export default connect(null, {checkAuthenticated, load_user})(MainLayout);