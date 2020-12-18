import React from "react";

export default function({ title, children }) {
    return (
        <div>
            <h2 className="mt-4 text-4xl">
                { title }
            </h2>
            { children }
        </div>
      )
}