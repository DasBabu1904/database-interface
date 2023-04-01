import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import AllAvailable from '../AllAvailable/AllAvailable';
import SearchBookTitle from '../SearchBookTitle/SearchBookTitle';
import SearchUserByID from '../SearchUserByID/SearchUserByID';
import './QueryHeader.css'
const QueryHeader = () => {
    const navigate = useNavigate();
    return (

        <div className='query-header' >
            <div className='Queryselect' onClick={() => { navigate('/search-with-title') }}>
                Search Book By Title
            </div>
            <div className='Queryselect' onClick={() => { navigate('/search-with-ID') }}>
                Search User By User ID
            </div>
            <div className='Queryselect' onClick={() => { navigate('/search-all-book') }}>
                See All the available books
            </div>
        </div>
    );
};

export default QueryHeader;