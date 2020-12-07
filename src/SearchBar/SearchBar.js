import React from 'react'
// import App from '../App/App'

const SearchBar = (props) => {
    return (
        <div className="searchBar">
            <form className="searchArea" onSubmit={props.snagBookInfo}>
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}



export default SearchBar