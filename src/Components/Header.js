import React, {Component} from 'react';
import Search from "./Search";

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <div className="tabs">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">+</a></li>
                    </ul>
                </div>
                <h1 className="App-title">Grid of Posters and Video</h1>
                <Search/>
            </header>
        );
    }
}

export default Header;