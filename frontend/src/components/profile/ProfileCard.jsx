
import React from 'react'

import { Link, useParams } from 'react-router-dom'

import { CapitalizedFirstLetter } from '../../utils/General'



const ProfileCard = ({profile}) => {


  return (
       <>
                        <div className="p-8 bg-white shadow mt-10">
                            <div className="grid grid-cols-1 md:grid-cols-3">

                                <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">

                                    <div>
                                        <p className="font-bold text-gray-700 text-xl">1000</p>
                                        <p className="text-gray-400">Votes</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-700 text-xl">200</p>
                                        <p className="text-gray-400">Polls</p>
                                    </div>

                                    <div>
                                        <p className="font-bold text-gray-700 text-xl">89</p>
                                        <p className="text-gray-400">Followers</p>
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
                             
                                    <Link  to="/"
                                        className="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">Edit</Link>
                                
                                    <Link  to="/"
                                    className="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">Contact</Link>
                                    <Link to="/"
                                        className="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">Follow</Link>

                            </div>

                            </div>
                        
                            <div className="mt-20 text-center border-b pb-12">
                            <h1 className="text-lg font-medium text-gray-700">{!profile.fullname ? "Full Name" : profile.fullname}</h1>
                            <h3 className="text-lg font-medium text-gray-700">({CapitalizedFirstLetter(profile.user.account_type)})</h3>
                            <p className="font-light text-gray-600 mt-3">{profile.address}</p>
                        
                            <p className="mt-8 text-gray-500">{!profile.bio ? "Bio" : profile.bio }</p>
                            <p className="mt-2 text-gray-500">{!profile.summary ? "Summary" : profile.summary}</p>
                            </div>
                        
    
                            <div className="mt-12 flex flex-col justify-center">
                                <div className="section relative z-0 py-16 md:pt-32 md:pb-20">
                                    <div className="container xl:max-w-6xl mx-auto text-center">
                            
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </>
            )
}

export default ProfileCard














                      