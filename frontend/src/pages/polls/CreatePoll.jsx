import React, { useState } from 'react';



import { PollForm } from '../../components';













const CreatePoll = () => {


  return (

    <main id='content'>
            <div className="section relative z-0 mt-20">
                <div className="container xl:max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 gap-2">
                        <PollForm />
                    </div>
                </div>
            </div>
        </main>
    
  );
};

export default CreatePoll;












// <div className="p-4 mt-20">
//       <h1 className="text-2xl font-bold mb-4">Create a Poll</h1>
    //   <form onSubmit={handleSubmit}>
    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">Question</label>
    //       <input
    //         type="text"
    //         className="border p-2 w-full"
    //         value={question}
    //         onChange={(e) => setQuestion(e.target.value)}
    //       />
    //     </div>

    //     <div className="mb-4">
    //       <label className="block font-bold mb-2">End Date</label>
    //       <input
    //         type="datetime-local"
    //         className="border p-2 w-full"
    //         value={endDate}
    //         onChange={(e) => setEndDate(e.target.value)}
    //       />
    //     </div>

    //     <h2 className="text-lg font-bold mb-4">Choices</h2>

    //     <div className="mb-4">
    //       <form onSubmit={handleChoiceSubmit}>
    //         <input
    //           type="text"
    //           className="border p-2 mr-2"
    //           value={choiceText}
    //           onChange={(e) => setChoiceText(e.target.value)}
    //         />
    //         <button
    //           type="submit"
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded"
    //         >
    //           Add Choice
    //         </button>
    //       </form>
    //     </div>
    //     <div>
    //       {choices.map((choice, index) => (
    //         <div key={index} className="mb-2">
    //           {choice}
    //         </div>
    //       ))}
    //     </div>
    //     <button
    //       type="submit"
    //       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //     >
    //       Submit
    //     </button>
    //   </form>
    // </div>
