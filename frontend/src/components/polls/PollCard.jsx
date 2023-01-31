import React from 'react'

const PollCard = () => {
  return (
    <>
        <main id='content'>
            <div className="section relative z-0">
                <div className="container xl:max-w-6xl mx-auto text-center">
                    <div className="grid grid-cols-1">
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


                                    <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4 flex justify-between">
                                        <a className="hover:underline decoration-2 hover:text-red-600" href="{% url 'getAPoll' poll.id %}">What is the capital of Afghanistan?</a>
                                        Voted
                                    </div>

                                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                        <div className="w-full">
                                            
                                                <div className="border rounded-lg bg-red-200 p-2 mb-1" style={{ width:"90%"}} >
                                                    <p className="flex justify-between gap-2">
                                                        <span style={{ whiteSpace: "nowrap"}}>Kabul</span><span>90%</span>
                                                    </p>
                                                </div>

                                                <div className="border rounded-lg bg-red-200 p-2 mb-1" style={{ width:"80%"}}>
                                                    <p className="flex justify-between gap-2">
                                                        <span style={{ whiteSpace: "nowrap"}}>Khost</span><span>80%</span>
                                                    </p>
                                                </div>
                                            
                                        </div>
                                    </div>

                                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                        <p className="font-bold">Poll Ends: </p>
                                        <p>Tomorrow</p>
                                    </div>

                                    <div className="px-6 py-4 border-t border-gray-200 flex justify-between">
                                        <p>Votes:  <span className="font-bold">50</span></p>
                                        <p>Views:  <span className="font-bold">100 </span></p>
                                        <p>Status:<span className="font-bold">Active </span></p>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default PollCard