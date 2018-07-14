import React, {Component} from 'react';
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

class App extends Component {
    render() {
        return (
            <div className="Wrapper">
                <Header/>
                <MainContainer/>
            </div>
        );
    }
}

export default App;
