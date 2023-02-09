import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import {HumanReadableDate, CapitalizedFirstLetter, partialLetters} from '../../utils/General'
import { useSelector, useDispatch } from 'react-redux'


// import custom components
import PollModel from './PollModel'
import PollEditModel from './PollEditModel'

const PollCard = ({poll, voted}) => {
    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    const authUser = useSelector(state=> state.auth.user)



    const [showDeleteModel, setDeleteModelShow] = useState(false)
    const [showEditModel, setEditModel] = useState(false)


    const handleDeleteModel = () => {
        setDeleteModelShow(!showDeleteModel)    }

    const handleEditModel = () => {
        setEditModel(!showEditModel)
    }

  return (
    <>
        <main id='content'>
            <div className="section relative z-0">
                <div className="container xl:max-w-6xl mx-auto text-center">
                    <div className="grid grid-cols-1">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10 justify-start">

                                    <div className="bg-gray-200 px-6 py-4">
                                        <div className="flex justify-between items-center gap-2 pt-3">

                                            <div className="flex  items-center">
                                                <div className="bg-red-600 w-12 h-12 rounded-full uppercase font-bold flex justify-center items-center text-center text-white">{partialLetters(poll.created_by.account_type, 2)}</div>
                                                <div className="flex ml-3">
                                                    <p className="hover:underline decoration-2 hover:text-red-600 ">
                                                        <Link to={`/user/profile/${poll.created_by.id}`}>{poll.user_details.first_name === null ?  poll.created_by.email : poll.user_details.first_name  }</Link></p>
                                                    <p className="text-sm text-gray-700 mt-1 ml-2 lg:block hidden">
                                                        ({CapitalizedFirstLetter(poll.created_by.account_type)})
                                                    </p>
                                                </div>
                                            </div>

                                            {(poll !== (null || undefined ) && isAuthenticated && authUser && authUser !== null && authUser.email === poll.created_by.email) ? 
                                            (
                                                <div className="right">
                                                    <div className="flex justify-center gap-2 items-center">
                                                            <p className="text-gray-400 hover:underline decoration-2 hover:text-red-600 cursor-pointer ">
                                                                <a onClick={handleEditModel} >Edit</a>
                                                            </p>

                                                            <p className="text-gray-400 hover:underline decoration-2 hover:text-red-600 cursor-pointer ">
                                                                <a onClick={handleDeleteModel} >Delete</a>
                                                                {/* data-modal-target="popup-modal" data-modal-toggle="popup-modal" */}
                                                            </p>
                        
                                                        </div>
                                                    </div>
                                                ): ""
                                            }

                                            
                                            

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
                                        <p>{<HumanReadableDate date={poll.end_date} />}</p>
                                    </div>

                                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                        <p>Votes:  <span className="ml-2 font-bold">{poll.total_votes}</span></p>
                                      
                                        <p>Status:<span className="ml-2 font-bold">{poll.is_active ? " Active" : " InActive"} </span></p>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {(poll !== (null || undefined ) && isAuthenticated && authUser && authUser !== null && authUser.email === poll.created_by.email) ? 
                    (   <>
                            <PollModel show={showDeleteModel} handleClose={handleDeleteModel} poll_id={poll.id}/>
                            <PollEditModel show={showEditModel} handleClose={handleEditModel} poll={poll}/>
                        </>
                    ): ""
        }
        
    </>
  )
}



export default PollCard