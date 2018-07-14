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

