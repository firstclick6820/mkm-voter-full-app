import React from 'react'


// impot react router components
import {Link} from 'react-router-dom'


import {HumanReadableDate, CapitalizedFirstLetter, EmailFirstSecondLetters} from '../../utils/General'


const PollShowCase = ({poll}) => {



  return (
    <>
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-4 ml-2 justify-start">

            <div className="bg-gray-200 px-6 py-4">
                <div className="flex items-center pt-3">
                    <div className="bg-red-600 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">AD</div>
                    <div className="ml-4">
                        <p className=" font-sm hover:underline decoration-2 hover:text-red-600 ">
                            <Link to={`/user/profile/${poll.created_by.id}/`}>{EmailFirstSecondLetters(poll.created_by.email)}</Link></p>
                        <p className="text-sm text-gray-700 mt-1">({CapitalizedFirstLetter(poll.created_by.account_type)})</p>
                    </div>
                </div>
            </div>

            <div className="font-bold text-gray-700 text-lg px-6 py-4 flex justify-start">
                <Link   to={`/polls/${poll.id}`}
                        className="hover:underline decoration-2 hover:text-red-600">{poll.question}</Link>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <p className="">Options to vote</p>
                <p>{poll.choices.length }</p>
            </div>


            <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <p className="">Poll Ends: </p>
                <p>{HumanReadableDate(poll.end_date)}</p>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <p>Votes:  <span className="ml-2 font-bold">{poll.total_votes}</span></p>
                <p>Status: <span className="ml-2 font-bold">{poll.is_active ? "Active" : "Inactive"} </span></p>
            </div>
        </div>
    </>
  )
}

export default PollShowCase