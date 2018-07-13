import React, {Component} from 'react';
import Search from "./Search";
import Nav from "./Nav";
import '../Styles/Header.css';

class Header extends Component {


    render() {
        return (
            <header className="app-header">
                <Nav />
                <h1 className="app-title">Grid of Posters and Video</h1>
                <Search />
            </header>
        );
    }
}

export default Header;