import React from "react"
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <h1>Erreur 404</h1>
            <p>Page non trouvé <NavLink exact to="/dashboard"><a> Revenir au dashboard</a></NavLink></p>
        </div>
    )
}

export default NotFound;