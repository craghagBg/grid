import React, {Component} from 'react';
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            response: {}
        };
    }

    getResponse(resp){
        this.setState({response:resp})
    }

    render() {
        return (
            <div className="Wrapper">
                <Header responseCallBack={this.getResponse.bind(this)}/>
                <MainContainer items={this.state.response}/>
            </div>
        );
    }
}

export default App;
