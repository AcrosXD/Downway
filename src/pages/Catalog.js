import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import {Component} from "react";

class Catalog extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            searchTerm: ''
        }

        this.apiKey = process.env.REACT_APP_API
    }

    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({ movies: [...data.results]})
            })
    }

    handleChange = (e) =>{
        this.setState({ searchTerm: e.target.value })
    }

    render() {
        return (
            <body>
            <Navbar/>
            <SearchBar handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
            </body>
        )
    }
}

export default Catalog;