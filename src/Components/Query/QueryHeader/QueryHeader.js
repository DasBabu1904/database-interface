import React from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import './QueryHeader.css'
const QueryHeader = () => {
    const navigate = useNavigate();
    return (

        <div className='query-header' >
            <Routes>
                <Route></Route>
            </Routes>
            <div className='Queryselect' onClick={() => { navigate('/') }}>
                Search Book By Title
            </div>
            <div className='Queryselect' onClick={() => { navigate('/') }}>
                Search User By User ID
            </div>
            <div className='Queryselect' onClick={() => { navigate('/') }}>
                See All the available books
            </div>
        </div>
    );
};

export default QueryHeader;