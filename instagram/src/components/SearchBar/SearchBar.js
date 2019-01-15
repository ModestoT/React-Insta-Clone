import React from 'react';
import './SearchBar.css';
function SearchBar(props){
    return (
        <header>
            <div className="logo">
                <i class="fab fa-instagram"></i>
                <div className="line"/>
                <h1>Instagram</h1>
            </div>
            <div className="search">
                <i className="fas fa-search"></i>
                <input 
                    className="searchBar" 
                    placeholder="Search"
                />
            </div>
            <div className="icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </header>
    );
}

export default SearchBar;