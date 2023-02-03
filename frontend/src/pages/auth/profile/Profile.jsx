import React, {useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux';

import { Link, useParams , Navigate} from 'react-router-dom'

import { load_user_profile } from '../../../actions/auth';


// import custom components
import { ProfileCard } from '../../../components';




const Profile = () => {
  const dispatch = useDispatch();
  const profiler = useSelector(state => state.auth.userProfile)
  const  { uid } = useParams();



    useEffect(() => {
        dispatch(load_user_profile(uid))
    }, [dispatch, uid])


    if(profiler === null) return null;

    return (
        <>
            <main id='content' className="grid grid-cols-1 pt-20">
                    <div className="section relative z-0 py-16 md:pt-12 md:pb-20 item">
                    <ProfileCard profile={profiler} />
                    </div>
            </main>
        </>
      )
  }

  


export default Profile