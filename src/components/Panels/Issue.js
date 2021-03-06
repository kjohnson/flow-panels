import React from "react"
import Panel from "../Panel"
import Hyperlink from "../Hyperlink"

export default function Issue() {
    return (
        <>
            <h3 className="mt-8">Assigned User</h3>
            <Hyperlink to="/issue/user">Victoria</Hyperlink>

            <h3 className="mt-8">Description</h3>
            <p>Typo is second to last paragraph.</p>

            <h3 className="mt-8">Related Document</h3>

            <Hyperlink to="/issue/document">Intro Document</Hyperlink>
        </>
    )
}