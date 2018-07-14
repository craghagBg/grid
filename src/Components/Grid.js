import React, {Component} from 'react';

class Grid extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillReceiveProps (props) {
        this.setState({items: props.items});
    }

    render () {
        return (
            <div className='grid'>
                <ul className='list'>
                    {this.state.items ? this.state.items.map((item)=>{
                        let currStyle = {
                            backgroundImage: `url(${item.snippet.thumbnails.medium.url})`,
                            width: '320px',
                            height: '180px',
                            margin: '25px',
                            cursor: 'pointer'
                        };
                        return <li
                            key={(item.snippet.thumbnails.medium.url)}
                            style={currStyle}>
                        </li>
                    }) : ''}
                </ul>
            </div>
        );
    }
}

export default Grid;
