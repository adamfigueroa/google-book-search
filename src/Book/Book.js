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
        this.setState({
            searchField: e.target.value
        })
    }

    snagBookInfo = (e) => {
        e.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&key=AIzaSyB_jtEQDJbEHSE759u8F-XnPTlvWdHT158`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
    }

    render() {

        return (
            <div>
                <SearchBar handleSearch={this.handleSearch} snagBookInfo={this.snagBookInfo}/>
            </div>
        )
    }


}

export default Book