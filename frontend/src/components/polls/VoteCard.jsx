import React from 'react'

const PollCard = () => {
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
                                                <p className="font-bold hover:underline decoration-2 hover:text-red-600 "><a href="{% url 'userProfile' poll.created_by.id %}">Admin</a></p>
                                                <p className="text-sm text-gray-700 mt-1">Creator</p>
                                            </div>
                                        </div>
                                    </div>
                            
                                    
                                    <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4 flex justify-start">
                                        <a className="hover:underline decoration-2 hover:text-red-600" href="">What is the capital of Afghaistan?</a>
                                    </div>
                            
                                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                        <form className="w-full" method="POST" action="{% url 'votePoll' poll.id %}">
                                            
                                            <div className="border rounded-lg p-2 bg-gray-200 mb-1" style={{ width :"100%"}}>
                                                <label className="font-medium text-gray-700 mb-2 flex justify-start cursor-pointer gap-2">
                                                    <input 
                                                            type="radio" 
                                                            name="choice" 
                                                            value="Kabul" 
                                                            className="form-radio text-indigo-600" />        
                                                </label>
                                            </div>
                                            <div className="border rounded-lg p-2 bg-gray-200 mb-1" style={{ width :"100%"}}>
                                                <label className="font-medium text-gray-700 mb-2 flex justify-start cursor-pointer gap-2">
                                                    <input 
                                                            type="radio" 
                                                            name="choice" 
                                                            value="Kabul" 
                                                            className="form-radio text-indigo-600" />        
                                                </label>
                                            </div>


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

export default PollCard