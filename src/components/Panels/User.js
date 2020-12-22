import React from "react"
import Panel from "../Panel"
import Hyperlink from "../Hyperlink"

export default function User() {
    return (
        <Panel title="User">

            <div className="flex">
                <div className="mr-8">
                    <img className="inline-block mt-0 mb-0 h-24 w-24 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
                </div>
                <dl>
                    <dt><strong>Name</strong></dt>
                    <dd>Victoria</dd>
                    <dt><strong>Department</strong></dt>
                    <dd>Marketing</dd>
                </dl>
            </div>

            <h3 className="mt-8">Assigned Documents</h3>
            <ul className="list-disc">
                <li>
                    <Hyperlink to="/user/document">Intro Document</Hyperlink>
                </li>
            </ul>

            <h3 className="mt-8">Assigned Issues</h3>
            <ul className="list-disc">
                <li>
                    <Hyperlink to="/user/issue">Typo is second to last paragraph.</Hyperlink>
                </li>
            </ul>
        </Panel>
    )
}