import React from "react";
import { Link } from "react-router-dom";

export default function( props ) {
    return (
        <Link className="text-blue-800 underline" {...props}>{ props.children }</Link>
    )
}