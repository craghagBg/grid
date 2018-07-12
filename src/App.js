import React, { Component } from 'react';
import './Styles/App.css';
import Header from "./Components/Header";

class App extends Component {
  render() {
    return (
      <div className="Wrapper">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
