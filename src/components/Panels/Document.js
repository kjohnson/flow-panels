import React from "react";
import { Link } from "react-router-dom"
import Panel from "../Panel"
import EditorJs from 'react-editor-js'
import Hyperlink from "../Hyperlink"

export default function Document() {
    return (
        <>
            <h3>Subject Matter Export</h3>
            <div className="mt-4">
                <Hyperlink to="/document/user">Victoria</Hyperlink>
            </div>

            <h3 className="mt-8">Content</h3>
            <Hyperlink to="/document/edit">Edit document</Hyperlink>

            <h3 className="mt-8">Open Issues</h3>
            <ul className="list-disc">
                <li>
                    <Hyperlink to="/document/issue">Typo is second to last paragraph.</Hyperlink>
                </li>
            </ul>
        </>
    )
}