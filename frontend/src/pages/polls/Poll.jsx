import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'



// import custom components
import {VoteCard, PollCard , PostCard} from '../../components'

import { load_a_poll } from '../../actions/polls'

const Poll = () => {
    const dispatch = useDispatch();
    const {pid} = useParams();

    const authUser = useSelector(state => state.auth.user)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const poll = useSelector(state => state.polls.poll)
   


   useEffect(()=> {
     dispatch(load_a_poll(pid))
   }, [dispatch])

   
   
   if(poll === null) return null;

    return (
      <>
          <div className="section relative z-0 py-16 md:pt-20 pt-20 md:pb-20">
              <div className="grid grid-cols-1 gap-2 mt-4">
              
                  
                      {

                        (isAuthenticated && poll.voters && poll.voters.includes(authUser.email)) ?  <PollCard poll={poll} voted={true} />: <VoteCard poll={poll} />
                          // return emailFound ? <PollCard key={id} poll={poll} voted={true}/> : <PollCard key={id} poll={poll} voted={false} />;
                        }
              </div>
          </div>
      </>
    )
}

export default Poll;


