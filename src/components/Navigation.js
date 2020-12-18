import React from "react";
import {
  Link,
} from "react-router-dom";

export default function() {
    return (
        <ul>
            <Item to="/">Dashboard</Item>
            <Item to="/documents">Documents</Item>
            <Item to="/teams">Teams</Item>
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