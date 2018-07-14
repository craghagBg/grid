import React, {Component} from 'react';
import config from '../config';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            url: ''
        }
    }

    updateInputValue (e) {
        e.preventDefault();
        this.setState({inputValue: e.target.value});
    }

    buildUrl(query){
        let { url, queryParams }= config.youtube;
        queryParams.map(x=>{
            url += `${x.key}=${x.value}&`;
        });
        url += `q=${query}`;
        return url;
    }

    submit (e) {
        e.preventDefault();
        let url = this.buildUrl(this.state.inputValue);
        let _this = this;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                    _this.props.responseCallBack(json.items);
                }
            );
    }

    render () {
        return (
            <div>
                <form onSubmit={(e) => this.submit(e)}>
                    <span className='searchContainer'>
                        <input type='text' placeholder='Search' onChange={this.updateInputValue.bind(this)}/>
                        <input type="submit"/>
                    </span>
                    <select>
                        <option>Video</option>
                        <option>Pictures</option>
                    </select>
                </form>
                <div dangerouslySetInnerHTML={{__html:'<gcse:searchbox/>'}} />
            </div>
        );
    }
}

export default Search;

