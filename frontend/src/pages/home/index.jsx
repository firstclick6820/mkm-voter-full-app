import React from 'react'


import { useSelector } from 'react-redux'


// import custom components
import {PollShowCase} from '../../components'



const Home = () => {
  const polls = useSelector(state => state.polls.polls)  


  return (
    <>
    {/* Hero Section */}
      <div className="section relative z-0 py-16 md:pt-32 pt-32 md:pb-20">
          <div className="container xl:max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-5">Welcome to Super <span className="text-red-600">Voter.com</span></h2>
              <p>
              The ultimate platform for creating and voting on polls. Easily create custom polls on the topics you care about and engage with a community of like-minded individuals. Track results in real-time and drive change by making your voice heard. Join our community of engaged and informed citizens today.
              </p>
          </div>
      </div>


      {/* Polls Sextion */}
      <div className="section relative z-0 py-16 md:pt-32 pt-32 md:pb-20">
        <div className="container xl:max-w-6xl mx-auto px-4 text-center">
          {polls && polls.length > 0 ? (
            polls.map((poll, id) => (
              <PollShowCase key={id} poll={poll} />
            ))
          ) : (
            <h1>No Data To Display</h1>
          )}
        </div>
      </div>
    </>
  )
}

export default Home