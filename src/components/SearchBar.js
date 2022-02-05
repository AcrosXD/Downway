import React from "react"
import "../css/searchBar.css"
import '../pages/Catalog'

const SearchBar = (props) => {
    return(
            <div className="re">
            <div className="searchInputs">
                <form action="" onSubmit={props.handleSubmit}></form>
                <input type="text" placeholder="Recherche..." onChange={props.handleChange}></input>
            </div>
            </div>
    )

}

export default SearchBar;