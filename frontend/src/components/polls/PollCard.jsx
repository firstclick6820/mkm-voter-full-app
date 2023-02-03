import React from 'react'
import { Link } from 'react-router-dom'

import {HumanReadableDate, CapitalizedFirstLetter} from '../../utils/General'

const PollCard = ({poll, voted}) => {




  return (
    <>
        <main id='content'>
            <div className="section relative z-0">
                <div className="container xl:max-w-6xl mx-auto text-center">
                    <div className="grid grid-cols-1">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10 justify-start">

                                    <div className="bg-gray-200 px-6 py-4">
                                        <div className="flex items-center pt-3">
                                            <div className="bg-red-600 w-12 h-12 rounded-full uppercase font-bold text-white">AD</div>
                                            <div className="ml-3 flex justify-start">
                                                <p className="hover:underline decoration-2 hover:text-red-600 ">
                                                    <Link to={`/user/profile/${poll.created_by.id}`}>{poll.created_by.email}</Link></p>
                                                <p 
                                                    className="text-sm text-gray-700 mt-1 ml-2">
                                                        ({CapitalizedFirstLetter(poll.created_by.account_type)})
                                                </p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="text-gray-700 text-lg px-6 py-4 flex justify-between">
                                        <Link   to={`/polls/${poll.id}/`}
                                                className="hover:underline decoration-2 hover:text-red-600 font-bold">{poll.question}</Link>
                                        {voted ? 
                                                  <span className="text-gray-400 font-bold">Voted</span> 
                                               :  <Link to={`/polls/${poll.id}/`} className="text-red-600 font-bold decoration-2 hover:underline">Vote</Link>} 
                                    </div>

                                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                        <div className="w-full">
                                                    {poll.choices && poll.choices.length > 0 ? (
                                                        poll.choices.map((choice, id) => (
                                                            <div key={id} className="border rounded-lg bg-red-200 p-2 mb-1" style={{ width:`${choice.vote_percentage}%`}} >
                                                                <p className="flex justify-between gap-2">
                                                                    <span style={{ whiteSpace: "nowrap"}}>{choice.choice_text}</span><span>({choice.vote_percentage}%)</span>
                                                                </p>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <h1>No choice to select</h1>
                                                    )}
                                        </div>
                                    </div>

                                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                        <p className="font-bold">Poll Ends: </p>
                                        <p>{HumanReadableDate(poll.end_date)}</p>
                                    </div>

                                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                        <p>Votes:  <span className="ml-2 font-bold">{poll.total_votes}</span></p>
                                        {/* <p>Views:  <span className="font-bold">{poll.views} </span></p> */}
                                        <p>Status:<span className="ml-2 font-bold">{poll.is_active ? " Active" : " InActive"} </span></p>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default PollCard