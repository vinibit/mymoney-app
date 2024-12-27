import React from "react"
import Navbar from "./Navbar"

const Header = props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo-mini">My Money</span>        
            <span className="logo-lg">
                <i className="fa fa-money"></i>
                <b> My</b> Money
            </span>
        </a>
        <nav className="navbar navbar-static-top">
            <a href="/#/" className="sidebar-toggle" data-toggle="offcanvas"></a>
            <Navbar />
        </nav>
    </header>
)

export default Header