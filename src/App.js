import React, {Component} from 'react';
import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            items: {},
            searchType: 'Video',
            inputValue: ''
        };
    }

    getResponse(items, inputValue, searchType, updateHeader){
        if (items && items.length > 0) items.map((item) => item.searchType = searchType);

        this.setState({items ,inputValue, searchType, updateHeader})
    }

    render() {
        return (
            <div className="Wrapper">
                <Header responseCallBack={
                    this.getResponse.bind(this)}
                    items={this.state.items}
                    inputValue={this.state.inputValue}
                    searchType={this.state.searchType}
                    updateHeader={this.state.updateHeader}/>

                <MainContainer
                    items={this.state.items}
                    searchType={this.state.searchType}/>
            </div>
        );
    }
}

export default App;
