import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'

class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({
            searchField: e.target.value
        })
    }

    render() {

        return (
            <div>
                <SearchBar handleSearch={this.handleSearch}/>
            </div>
        )
    }


}

export default Book