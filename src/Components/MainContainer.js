import React, {Component} from 'react';
import '../Styles/MainContainer.css';

class MainContainer extends Component {
    render() {
        return (
            <div className='main-container'>
                <gcse:searchresults></gcse:searchresults>
            </div>
        );
    }
}

export default MainContainer;