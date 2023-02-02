import React from 'react'


// impot react router components
import {Link} from 'react-router-dom'




const PollShowCase = ({poll}) => {



  return (
    <>
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden mb-10 ml-2 justify-start">

            <div className="bg-gray-200 px-6 py-4">
                <div className="flex items-center pt-3">
                    <div className="bg-red-600 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">AD</div>
                    <div className="ml-4">
                        <p className="font-bold hover:underline decoration-2 hover:text-red-600 ">
                            <Link to="/">Admin</Link></p>
                        <p className="text-sm text-gray-700 mt-1">creator</p>
                    </div>
                </div>
            </div>

            <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4 flex justify-start">
                <Link   to="/"
                        className="hover:underline decoration-2 hover:text-red-600">{poll.question}</Link>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <p className="font-bold">Options to vote</p>
                <p>2</p>
            </div>


            <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <p className="font-bold">Poll Ends: </p>
                <p>Tomorrow</p>
            </div>

            <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                <p>Votes:  <span className="font-bold">100</span></p>
                <p>Views:  <span className="font-bold"></span></p>
                <p>Status: <span className="font-bold">Active </span></p>
            </div>
        </div>
    </>
  )
}

export default PollShowCase