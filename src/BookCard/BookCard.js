import React from 'react'

const BookCard = (props) => {
    return (
        <div className="bookCardContainer">
            <img src={props.image} alt="Book cover"/>
            <div className="bookCard">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
            </div>
        </div>
    )
}






export default BookCard