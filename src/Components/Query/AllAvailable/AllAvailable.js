import React from 'react';
import './AllAvailable.css'
const AllAvailable = () => {
    const handleAllBook = () => {
        console.log("all book")
    }
    return (
        <div className='SearchAllBooks-component'>
            <h1>Available BOOk</h1>
            <div className='SearchAllBooks' onClick={handleAllBook}>Get Books</div>
        </div>
    );
};

export default AllAvailable;