import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <span className='searchContainer'>
                    <input type='text' placeholder='Search'/><input type="submit"/>
                </span>

                <select>
                    <option>Video</option>
                    <option>Pictures</option>
                    <option>Both</option>
                </select>
            </div>
        );
    }
}

export default Search;

