import React, {Component} from 'react';
import '../Styles/MainContainer.css';
import Grid from "./Grid";

class MainContainer extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <Grid {...this.props}/>
        );
    }
}

export default MainContainer;