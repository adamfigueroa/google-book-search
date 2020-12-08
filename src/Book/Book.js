import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import BookList from '../BookList/BookList'

class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    handleSearch = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }

    snagBookInfo = (e) => {
        e.preventDefault();
        let url = ""
        if (this.state.sort === "") {
            url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&key=AIzaSyB_jtEQDJbEHSE759u8F-XnPTlvWdHT158`
        } else {
            url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}&filter=${this.state.sort}&key=AIzaSyB_jtEQDJbEHSE759u8F-XnPTlvWdHT158`
        }
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            this.setState({
                books: [...data.items]
            })
        })
    }

    handleFilter = (e) => {
        this.setState({
            sort: e.target.value
        })
    }

    render() {

        return (
            <div>
                <SearchBar 
                handleSearch={this.handleSearch} 
                snagBookInfo={this.snagBookInfo}
                handleFilter={this.handleFilter}
                />
                <BookList books={this.state.books}/>
            </div>
        )
    }


}

export default Book