import React, {Component} from 'react';

class Grid extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillReceiveProps (props) {
        this.setState({items: props.items, searchType: props.searchType});
    }

    action () {

    }

    buildPosters () {
        if (this.state.searchType) {
            return this.state.items ? this.state.items.map((item)=>{
                let currStyle = {
                    backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
                    width: '320px',
                    height: '180px',
                    margin: '25px',
                    cursor: 'pointer'
                };
                return <li
                    key={(item.snippet.thumbnails.medium.url)}
                    style={currStyle}
                    onClick={ this.action.bind(this) }>
                </li>
            }) : '';
        }

        console.log(this.state.searchType) ;
        //TODO render Pictures
    }

    render () {
        return (
            <div className='grid'>
                <ul className='list'>
                    {this.buildPosters()}
                </ul>
            </div>
        );
    }
}

export default Grid;
