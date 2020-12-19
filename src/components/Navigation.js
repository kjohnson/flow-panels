import React from "react";
import {
  Link,
} from "react-router-dom";

export default function() {
    return (
        <ul>
            <Item to="/">Dashboard</Item>
            <Item to="/document">Document</Item>
            <Item to="/user">Users</Item>
            <Item to="/issue">Issues</Item>
        </ul>
    )
}

function Item({ to, children }) {
    return (
        <li className="mb-4">
            <Link to={to}>{children}</Link>
        </li>
    )
}