import React from 'react';

function SearchBar(props){
    return (
        <header>
            <i class="fas fa-camera"></i>
            <div className="line"/>
            <h1 className="logo">Instagram</h1>
            <input className="searchBar" placeholder="Search"/>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
        </header>
    );
}

export default SearchBar;