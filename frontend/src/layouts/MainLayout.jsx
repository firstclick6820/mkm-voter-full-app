import React, { useEffect } from 'react';


// redux components
import { useSelector, useDispatch } from 'react-redux';



// import global pages / components
import Navbar from '../pages/global/navbar/Navbar';
import Footer from '../pages/global/footer/Footer';



// import actions
import { checkAuthenticated, load_user } from '../actions/auth';


import { loadPolls } from '../actions/polls';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const authenticated = useSelector(state => state.auth.authenticated);

  useEffect(() => {
    dispatch(checkAuthenticated());
    dispatch(load_user());
    dispatch(loadPolls());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;

