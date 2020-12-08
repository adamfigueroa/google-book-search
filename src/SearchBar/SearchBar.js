import React from 'react'

const SearchBar = (props) => {

    return (
        <div className="searchBar">
            <form className="searchArea" onSubmit={props.snagBookInfo}>
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Search</button>
                <select onChange={props.handleFilter}>
                <option value="">Choose Filter</option>
                    <option value="partial">partial</option>
                    <option value="full">full</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="ebooks">ebooks</option>
                </select>
            </form>
        </div>
    )
}

export default SearchBar