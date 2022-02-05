import React from "react"
import { NavLink } from "react-router-dom";
import "../css/navbar.css"
import "https://kit.fontawesome.com/b99e675b6e.js"

const Navbar = () => {
    return(
        <div className="navItem navbarBox">
            <p>Downway</p>
            <ul>
                <NavLink exact to="/dashboard">
                    <li><i className="fas fa-home fa-2x"><a> Home</a></i></li>
                </NavLink>
                <NavLink exact to="/catalog">
                    <li><i className="fas fa-list-ul fa-2x"><a> Catalog</a></i></li>
                </NavLink>
                <NavLink exact to="/server">
                    <li><i className="fas fa-server fa-2x"><a> Server</a></i></li>
                </NavLink>
                <NavLink exact to="/settings">
                    <li><i className="fas fa-cog fa-2x"><a> Settings</a></i></li>
                </NavLink>
                <NavLink exact to="/profile">
                    <li><i className="fas fa-user fa-2x"><a> Profile</a></i></li>
                </NavLink>
            </ul>

        </div>
    )
}

export default Navbar;