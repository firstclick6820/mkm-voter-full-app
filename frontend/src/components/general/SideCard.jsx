import React, {useState, useEffect} from 'react'

import { Link } from 'react-router-dom'


// import Axios
import axios from 'axios'




const SideCard = () => {

  return (
    <div className="bg-white/90 shadow-lg rounded-lg  p-8 pb-2  mb-24 lg:mb-4">
      <h3 className="text-xl mb-2 font-semibold border-b   border-red-200  pb-2">Archive</h3>
      
        {/* Static and Fixed Link used to show all the category link */}
        <Link to={`/polls`}>
            <span className={`cursor-pointer block mb-2 hover:underline decoration-2 hover:text-red-600 `}>All</span>
        </Link>

        
    
          <Link to={`/blogs/categories/`} className="flex gap-1  items-start justify-between">
            <span className={`cursor-pointer block mb-2 hover:underline decoration-2 hover:text-red-600 `}></span>
            <span></span>
          </Link>
          
    </div>
  )
}

export default SideCard;