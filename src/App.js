import React, {Component} from 'react';
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            response: {},
            searchType: 'Video'
        };
    }

    getResponse(resp, searchString, searchType){
        console.log(searchType);
        this.setState({response:resp, searchType: searchType})
    }

    render() {
        return (
            <div className="Wrapper">
                <Header responseCallBack={this.getResponse.bind(this)}/>
                <MainContainer items={this.state.response} searchType={this.state.searchType}/>
            </div>
        );
    }
}

export default App;
