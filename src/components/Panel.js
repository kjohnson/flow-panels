import React from "react";

export default function({ title, children }) {
    return (
        <div className="flex-1 p-6">
            <h2 className="mt-4 mb-4 text-4xl">
                { title }
            </h2>
            { children }
        </div>
      )
}