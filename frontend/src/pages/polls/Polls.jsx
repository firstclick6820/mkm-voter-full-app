import React from 'react'

import { PollCard, PollShowCase, VoteCard } from '../../components'


const Polls = () => {
  return (
    <>
      <div className="section relative z-0 py-16 md:pt-32 pt-32 md:pb-20">
          <div className="container xl:max-w-6xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-5">All <span className="text-red-600">Polls</span></h2>
              <VoteCard />
              <PollCard />
              <PollShowCase />
          </div>
      </div>
    </>
  )
}

export default Polls