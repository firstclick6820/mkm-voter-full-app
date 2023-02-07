
import React from 'react'
import { useSelector } from 'react-redux'

import { CapitalizedFirstLetter } from '../../utils/General'

import { AuthUserLinks, VisitorUserLinks } from './Constant'


const ProfileCard = ({profile}) => {
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    const authUser =  useSelector(state => state.auth.user)



  
  return (
        <>
            <div className="p-8 bg-white shadow mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3">

                    <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">

                        <div>
                            <p className="font-bold text-gray-700 text-xl">{profile.votes && profile.votes > 0 ? profile.votes : "0"}</p>
                            <p className="text-gray-400">Votes</p>
                        </div>

                        <div>
                            <p className="font-bold text-gray-700 text-xl">{profile.polls && profile.polls > 0 ? profile.polls : "0"}</p>
                            <p className="text-gray-400">Polls</p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="w-48 h-48 bg-slate-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                        
                    <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                        {isAuthenticated && authUser !== null && authUser.email === profile.user.email ? 
                        (
                            
                                AuthUserLinks(`/user/settings/${authUser.id}/`, "Edit")
                        
                        ) 
                                                                                                        : VisitorUserLinks()}
                    </div>

                </div>
                        
                <div className="mt-20 text-center pb-12">
                    <h1 className="text-lg font-medium text-gray-700">{profile.fullname === "None None" ? "Full Name" : profile.fullname}</h1>
                    <h3 className="text-lg font-medium text-gray-700">({CapitalizedFirstLetter(profile.user.account_type)})</h3>
                    <p className="font-light text-gray-600 mt-3">{profile.address}</p>
                        
                    <p className="mt-8 text-gray-500">{!profile.bio ? "Bio" : profile.bio }</p>
                    <p className="mt-2 text-gray-500">{!profile.summary ? "Summary" : profile.summary}</p>
                </div>
                        
    
                
            </div>
                    
        </>
)
}

export default ProfileCard;