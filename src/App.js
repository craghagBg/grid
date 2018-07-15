import React, {Component} from 'react';
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: {},
            searchType: 'Video'
        };
    }

    getResponse(items, searchString, searchType){
        items.map((item) => item.searchType = searchType);
        this.setState({items:items, searchType: searchType})
    }

    render() {;
        return (
            <div className="Wrapper">
                <Header responseCallBack={this.getResponse.bind(this)}/>
                <MainContainer items={this.state.items} searchType={this.state.searchType}/>
            </div>
        );
    }
}

export default App;
