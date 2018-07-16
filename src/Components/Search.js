import React, {Component} from 'react';
import config from '../config';
import axios from 'axios';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            searchType: 'Video'
        }
    }

    updateInputValue (e) {
        e.preventDefault();
        this.setState({inputValue: e.target.value});
    }

    updateSelectValue (e) {
        e.preventDefault();
        this.setState({searchType: e.target.value});
    }

    buildUrl(query){
        let { url, queryParams } = this.state.searchType === config.searchType.video ? config.video : config.picture;
        queryParams.map(x=>{
            url += `${x.key}=${x.value}&`;
        });
        url += `q=${query}`;
        return url;
    }

    submit (e) {
        e.preventDefault();
        let url = this.buildUrl(this.state.inputValue);

        axios.get(url)
            .then(function (response) {
                this.props.responseCallBack(response.data.items || {}, this.state.inputValue, this.state.searchType)
            }.bind(this))

        // fetch(url)
        //     .then(function(response) {
        //         return response.json();
        //     })
        //     .then(function(json) {
        //             this.props.responseCallBack(json.items || {}, this.state.inputValue, this.state.searchType);
        //     }.bind(this));
    }

    render () {
        return (
            <div>
                <form onSubmit={(e) => this.submit(e)}>
                    <span className='searchContainer'>
                        <input type='text' placeholder='Search' onChange={this.updateInputValue.bind(this)}/>
                        <input type="submit"/>
                    </span>
                    <select onChange={this.updateSelectValue.bind(this)}>
                        <option>Video</option>
                        <option>Pictures</option>
                    </select>
                </form>
            </div>
        );
    }
}

export default Search;

