import React from "react"
import "../css/searchBar.css"
import '../pages/Catalog'

const SearchBar = (props) => {
    return(
            <div className="re">
            <div className="searchInputs">
                <form action="" onSubmit={props.handleSubmit}>
                    <input type="text" placeholder="Recherche..." onChange={props.handleChange}/>
                </form>
            </div>
            </div>
    )

}

export default SearchBar;