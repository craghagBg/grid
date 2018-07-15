import React, {Component} from 'react';
import Search from "./Search";
import Nav from "./Nav";
import '../Styles/Header.css';

class Header extends Component {

    constructor (props) {
        super(props);
    }
    render() {

        return (
            <header className="app-header">
                <Nav {...this.props}/>
                <h1 className="app-title">Grid of Posters and Video</h1>
                <Search {...this.props}/>
            </header>
        );
    }
}

export default Header;