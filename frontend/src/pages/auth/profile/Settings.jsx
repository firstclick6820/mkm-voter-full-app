import React from 'react'

import {useSelector } from 'react-redux';

import {useParams , Navigate} from 'react-router-dom'


import SettingsForm from './SettingsForm'



const Settings = () => {
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    const {uid} = useParams()
    const authUser = useSelector(state=> state.auth.user)
    const authoirzed = (authUser !== null && authUser.id && authUser.id === uid) ? true : false
    

    // check if the user is not authorized and not authenticated then return them to the login page.
    if(!isAuthenticated && !authoirzed){
        return <Navigate to="/account/login/" />
    }

    return (
        <>
            <main id='content' className="grid grid-cols-1">
                <div className=" min-h-screen pt-2 font-mono my-16">
                    <div className="container mx-auto">
                        <div className="inputs w-full max-w-6xl p-6 mx-auto">
                            <SettingsForm />   
                        </div>
                    </div>
                </div>
            </main>
        </>
      )
}

export default Settings