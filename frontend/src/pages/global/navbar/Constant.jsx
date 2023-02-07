import React, {Fragment, useEffect} from "react";

import { Link } from "react-router-dom";


import { loggout } from "../../../actions/auth";

import { useDispatch } from "react-redux";

export const authLinks = (id) => {
     const dispatch = useDispatch();


    return (
        <Fragment>
          <li className="relative hover:text-black">
              <Link  to={`/user/profile/${id}/`}
                    className="hover:underline decoration-2 hover:text-red-600 block py-3 lg:py-7 px-6">Profile</Link>                  
          </li>

          <li className="relative hover:text-black">
              <a onClick={()=> {dispatch(loggout())}}
                 className="hover:underline decoration-2 hover:text-red-600 block py-3 lg:py-7 px-6">Logout</a>                  
          </li>
        </Fragment>
    )
  }


  export const visitorLinks = () => {
    return (
        <Fragment>
            <li className="relative hover:text-black">
                <Link to="/account/login"
                      className="hover:underline decoration-2 hover:text-red-600 block py-3 lg:py-7 px-6 ">Login</Link>
            </li>

            <li className="relative hover:text-black">
                <Link to="/account/register"
                      className="hover:underline decoration-2 hover:text-red-600 block py-3 lg:py-7 px-6 ">Register</Link>
            </li>
        </Fragment>
    )
  }