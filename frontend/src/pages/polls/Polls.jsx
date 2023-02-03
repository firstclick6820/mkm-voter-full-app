import React, { useEffect } from 'react'

import { useSelector } from 'react-redux'



// import custom components
import {VoteCard, PollCard , PostCard} from '../../components'



const Polls = () => {
  const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
  const authUser = useSelector(state => state.auth.user)
  const polls = useSelector(state => state.polls.polls)

  return (
    <>
        <div className="section relative z-0 py-16 md:pt-20 pt-20 md:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
            
                  {/* First Column   */}
                  <div className="lg:col-span-3 col-span-1">
                    <div className="lg:sticky relative top-24">
                          <PostCard />
                    </div>
                  </div>

                  {/* Second colum / */}
                  <div className="lg:col-span-9 col-span-1 gap-2">
                  {polls && polls.length > 0 ? (
                      polls.map((poll, id) => {
                        
                        let emailFound = false;
                        if (isAuthenticated && poll.voters && poll.voters.includes(authUser.email)) {
                          emailFound = true;
                        }
                        return emailFound ? <PollCard key={id} poll={poll} voted={true}/> : <PollCard key={id} poll={poll} voted={false} />;
                      })
                    ) : (
                      <h1>No Data To Display</h1>
                    )}

            
                  </div>
            </div>
        </div>
    </>
  )
}

export default Polls;


