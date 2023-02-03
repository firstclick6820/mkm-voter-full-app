import React, {Fragment} from "react"
import { Link } from "react-router-dom"

export const AuthUserLinks = (to) => {
    return (
        <Fragment>
            <Link   to={to}
                    className="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">
                    Edit
            </Link>
        </Fragment>
    )

}


export const VisitorUserLinks = () => {
    return (
        <Fragment>    
            <Link  to="/"
                   className="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">
                   Contact
            </Link>
            <Link to="/"
                  className="text-white py-3 px-3 hover:underline decoration-2 rounded bg-red-600 hover:bg-white hover:text-red-600 cursor-pointer shadow hover:shadow-lg font-bold transition">
                  Follow
            </Link>
        </Fragment>
    )

}