import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import '../Header/Header.css';
const Header = () => {

    return (
        <div className="header-background">
            < div >
                <nav className='Header-box'>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/book-entry">Book Entry</CustomLink>
                    <CustomLink to="/userentry">User Entry</CustomLink>
                    <CustomLink to="/recordentry">Record Entry</CustomLink>
                    <CustomLink to="/query">Query</CustomLink>
                </nav>
            </div >
        </div>
    );
};

export default Header;