import React from 'react';
import styled from 'styled-components';

import './SearchBar.css';

const Header = styled.header `
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 15px 4%;
    border-bottom: 1px solid lightgrey;
`;

const LogoHeader = styled.div ` 
    display: flex;
    align-items: center;
`;

const LineHeader = styled.div `
    border-right: 1px solid black;
    height: 35px;
    margin: 0 13%;
`;

const Logo = styled.h1 `
    font-size: 1.8rem;
    font-family: 'Lobster', cursive;
`;

const Search = styled.input `
    position: relative;
    margin-left: 5%;
    text-align: center;
    padding: 2% 11%;
    background: #FAFAFA;
    border: 1px solid lightgrey;
    border-radius: 3px;
    font-size: .9rem;
    &:focus {
        text-align: start;
        z-index: 3;
    }
    &::placeholder {
        color: #C9CACC;
        font-weight: bold;
    }
`;

const Icons = styled.div `
    display: flex;
    font-size: 1.6rem;
    width: 8%;
`;

function SearchBar(props){
    return (
        <Header>
            <LogoHeader>
                <i className="fab fa-instagram"></i>
                <LineHeader />
                <Logo>Instagram</Logo>
            </LogoHeader>
            <div className="search">
                <i className="fas fa-search"></i>
                <Search 
                    placeholder="Search"
                    value={props.filterPost}
                    onChange={props.handleSearch}
                />
            </div>
            <Icons className="icons">
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
               <span onClick={() => {localStorage.removeItem('User');window.location.reload()}}><i className="far fa-user"></i></span>
            </Icons>
        </Header>
    );
}

export default SearchBar;