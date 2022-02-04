import React from "react"
import { NavLink } from "react-router-dom";
import "../css/navbar.css"
import "https://kit.fontawesome.com/b99e675b6e.js"
import "../scripts/navbar"

const Navbar = () => {
    return(

        <div className="wrapper hover_collapse">
            <div className="top_navbar">
                <div className="logo">Downway</div>
                <div className="menu">
                    <div className="hamburger">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="profile_wrap">
                        <div className="profile">
                            <img src="profile.png" alt="profile_pic" />
                                <span className="name">Alex John</span>
                                <span className="icon">
						<i className="fas fa-angle-down"></i>
					</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sidebar">
                <div className="sidebar_inner">
                    <ul>
                        <li>
                            <NavLink exact to="/dashboard">
                            <a>
                                <span className="icon"><i className="fas fa-home"></i></span>
                                <span className="text">Home</span>
                            </a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/catalog">
                            <a>
                                <span className="icon"><i className="fas fa-file-video"></i></span>
                                <span className="text">Catalogue</span>
                            </a>
                                </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/server">
                            <a>
                                <span className="icon"><i className="fas fa-server"></i></span>
                                <span className="text">Server Series</span>
                            </a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/profile">
                            <a>
                                <span className="icon"><i className="fas fa-user"></i></span>
                                <span className="text">Profile</span>
                            </a>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/settings">
                            <a>
                                <span className="icon"><i className="fas fa-sliders-h"></i></span>
                                <span className="text">Options</span>
                            </a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

                )
}

export default Navbar;