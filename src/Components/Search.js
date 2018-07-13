import React, {Component} from 'react';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }
    updateInputValue (e) {
        e.preventDefault();
        this.setState({inputValue: e.target.value});
    }

    submit (e) {
        e.preventDefault();
        console.log(this.state.inputValue);
    }

    render () {
        return (
            <form onSubmit={(e) => this.submit(e)}>
                <span className='searchContainer'>
                    <input type='text' placeholder='Search' onChange={this.updateInputValue.bind(this)}>
                        <gcse:searchbox></gcse:searchbox>
                    </input>
                    <input type="submit"/>
                </span>

                <select>
                    <option>Video</option>
                    <option>Pictures</option>
                    <option>Both</option>
                </select>
            </form>
        );
    }
}

export default Search;

