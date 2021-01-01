import React from "react";
import { Link } from "react-router-dom"

export default function Panel({ title, back, expand, children }) {
    return (
        <div className="relative flex-1 p-6">
            { !! back &&
                <>
                    <div className="absolute top-2 right-2">
                        <Link to={back}>{'Close'}</Link>
                    </div>
                    <div className="absolute top-2 left-2">
                        <Link to={expand}>{'Expand'}</Link>
                    </div>
                </>
            }
            <h2 className="mt-4 mb-4 text-4xl">
                { title }
            </h2>
            { children }
        </div>
      )
}