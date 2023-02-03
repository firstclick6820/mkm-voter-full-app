import React, {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux';

import { Link, useParams , Navigate} from 'react-router-dom'

import { load_user_profile } from '../../../actions/auth';


// import custom components
import { ProfileCard } from '../../../components';




const Profile = () => {
  
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const profiler = useSelector(state => state.auth.userProfile)
  const  { uid } = useParams();

  

 

 useEffect(() => {
    dispatch(load_user_profile(uid))
 }, [dispatch])


  if(!isAuthenticated) {
    return <Navigate to="/account/login" />
  }
  else {
    return (
        <>
            <main id='content' className="grid grid-cols-1">
                    <div className="mt-5 item">
                        <div className="w-full">
                            <div className="flex py-4 px-16">
                                <Link to="/" className="flex gap-1">
                                    
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                    </svg>
                                    <p className="m-auto text-xl font-semibold text-center text-gray-800">Back to Polls Lists</p>
                                </Link>
                            </div>
                        </div>
                    </div>
    
    
                    <div className="section relative z-0 py-16 md:pt-10 md:pb-20  item">
                        <div className="container xl:max-w-6xl mx-auto px-4 text-center">
    
                            <ProfileCard profile={profiler} />
                        </div>
                    </div>
            </main>
        </>
      )
  }

  
}

export default Profile