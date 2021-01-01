import React from "react";
import Navigation from "./Navigation"
import AccountNavigation from "./AccountNavigation"

export default function Layout({ children }) {
    return (
        <div className="h-full flex border-t-8 border-gray-400">
            <nav className="h-full flex flex-col justify-between w-auto p-16 mr-4 border-r-2 bg-gray-200">
                <Navigation />
                <AccountNavigation />
            </nav>
            <main className="flex w-full">
                { children }
            </main>
        </div>
    )
}