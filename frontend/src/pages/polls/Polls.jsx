import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'


// import loadPOlls Action

import {loadPolls} from '../../actions/polls'


// import custom components
import { PollCard, PollShowCase, VoteCard } from '../../components'

const Polls = () => {
  const polls = useSelector(state => state.polls.polls)
 

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadPolls())
  }, [dispatch])

  return (
    <>
      <div className="section relative z-0 py-16 md:pt-32 pt-32 md:pb-20">
        <div className="container xl:max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-5">All <span className="text-red-600">Polls</span></h2>
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

export default Polls
