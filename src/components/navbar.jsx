import React, { Component } from 'react';
// import Counter from "./components/counter";

const NavBar = ({ totalCounters }) => {
    console.log("NavBar rendered");
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">navbar
                <span className="badge badge-pill badge-secondary">{totalCounters}
                </span>
            </a>
        </nav>
    );
};


export default NavBar;
