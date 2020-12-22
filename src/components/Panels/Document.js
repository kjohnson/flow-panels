import React from "react";
import { Link } from "react-router-dom"
import Panel from "../Panel"
import Hyperlink from "../Hyperlink"

export default function Document() {
    return (
        <>
            <h3>Subject Matter Export</h3>
            <div className="mt-4">
                <Hyperlink to="/document/user">Victoria</Hyperlink>
            </div>

            <h3 className="mt-8">Content</h3>
            <textarea
                className="w-full h-96 p-8 border border-gray-400 rounded"
                defaultValue="Doloribus vitae sit eligendi. Magnam eos totam animi optio doloribus. Et impedit pariatur aut voluptatem cumque iste. Dicta fugit labore ipsum ut iusto. Sunt minima blanditiis quia error."
            />

            <h3 className="mt-8">Open Issues</h3>
            <ul className="list-disc">
                <li>
                    <Hyperlink to="/document/issue">Typo is second to last paragraph.</Hyperlink>
                </li>
            </ul>
        </>
    )
}