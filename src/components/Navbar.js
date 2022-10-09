import React from "react"

export default function Navbar() {
    return (
            <nav>
                <img className="nav-logo" src= { require("../images/react.png") }/>
                 <h3 className="nav--logo_text">React Facts</h3>
                 <h4 className="nav--title">React Course - Project 1</h4>
            </nav>
    )
}