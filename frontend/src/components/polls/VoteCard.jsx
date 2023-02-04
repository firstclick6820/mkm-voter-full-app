import React, {useEffect, useState} from 'react'
import { Link , Navigate, useNavigate} from 'react-router-dom'


import { CapitalizedFirstLetter } from '../../utils/General'

import { useSelector, useDispatch} from 'react-redux'

import axios from '../../assets/api/api'

import { loadPolls } from '../../actions/polls'



const VoteCard = ({poll}) => {
    const [voted, setVoted] = useState(false)
    const history = useNavigate();
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(state=> state.auth.isAuthenticated)
    const authUser = useSelector(state=> state.auth.user)
    const uid = authUser && authUser.email ? authUser.id : ""

    const [selectedValue, setSelectedValue] = useState(null);

  
 
    
  
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!selectedValue) return;
        const choice= poll.choices.find(c => c.choice_text === selectedValue);
        if (!choice) return;

        

        const body ={"user_id":uid,"choice_id": choice.id}
        
        axios.post(`api/polls/${poll.id}/vote/`, body)
            .then((res) => {
                if(res.data.success){
                    setVoted(true)
                }
            })
            .catch((error) => {
                setVoted(false)
                console.log(error.message)
            });
        
        };
  
    useEffect(()=> {
        dispatch(loadPolls())
        voted ? history(`/polls/`): history(`/polls/${poll.id}/`)  
    }, [dispatch,voted])



    if(!isAuthenticated) {
        return <Navigate to="/account/login/" />
    }
    else { 
        return (
            <>
                <main id='content'>
                    <div className="section relative z-0">
                        <div className="container xl:max-w-6xl mx-auto text-center">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-10 justify-start">
                                <div className="bg-gray-200 px-6 py-4">
                                    <div className="flex items-center pt-3">
                                            <div className="bg-red-600 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">AD</div>
                                            <div className="ml-4">
                                                <p className=" font-sm hover:underline decoration-2 hover:text-red-600 ">
                                                    <Link to={`/user/profile/${poll.created_by.id}/`}>
                                                        {poll.created_by.email}
                                                    </Link>
                                                </p>
                                                <p className="text-sm text-gray-700 mt-1">({CapitalizedFirstLetter(poll.created_by.account_type)})</p>
                                            </div>
                                    </div>
                                </div>

                                    
                                            
                                <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4 flex justify-start">
                                    <Link   to={`/polls/${poll.id}/`}
                                            className="hover:underline decoration-2 hover:text-red-600">
                                            {poll.question}
                                    </Link>
                                </div>
                                    
                                <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                                <form className="w-full" method="POST" onSubmit={handleSubmit}>
                                                        {poll.choices && poll.choices.length > 0  ? (
                                                            poll.choices.map((choice, id) => (
                                                                <div key={id} className="border rounded-lg p-2 bg-gray-200 mb-1" style={{ width :`${choice.vote_percentage}%`}}>
                                                                    <label className="font-medium text-gray-700 mb-2 flex justify-start cursor-pointer gap-2">
                                                                    <input
                                                                        value={choice.choice_text}
                                                                        type="radio" 
                                                                        checked={selectedValue === choice.choice_text}
                                                                        onChange={() => setSelectedValue(choice.choice_text)}
                                                                        name="choice"
                                                                        className="form-radio text-indigo-600" 
                                                                    />  
                                                                    <span  style={{ whiteSpace: "nowrap"}}>{choice.choice_text} </span>    
                                                                    </label>
                                                                </div>
                                                            ))
                                                        ) : (
                                                            <h2>No Data</h2>
                                                        )}
                                                        <div className="mb-6 mt-12 text-center">
                                                            <button
                                                            className="w-full px-4 py-2 font-bold text-white bg-red-400 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                                            type="submit">
                                                            Vote
                                                            </button>
                                                        </div>
                                                </form>                    
                                </div>

                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }



}

export default VoteCard