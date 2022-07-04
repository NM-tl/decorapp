import * as React from "react";
import { Link } from 'react-router-dom';

export function Header() {
    return(
        <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
            <Link to="/calculator">Calculator</Link>
        </header>
    )
}