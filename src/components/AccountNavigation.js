import React from "react";
import { Link } from "react-router-dom"

export default function AccountNavigation() {
    return (
        <Link to="/account">
            <img className="block m-auto mt-0 mb-0 h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
        </Link>
    )
}