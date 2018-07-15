import React, {Component} from 'react';
import tools from '../tools';
import config from "../config";

class Grid extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillReceiveProps (props) {
        this.setState({items: props.items, searchType: props.searchType, action: false});
    }

    play (e) {
        console.log(e.target);
        this.setState({action: true});
    }

    buildPosters () {
        if (this.state.searchType === config.searchType.video) {
            let key = 0;
            return this.state.items ? this.state.items.map((item)=>{
                let currStyle = {
                    backgroundImage: `url(${tools.has(['snippet', 'thumbnails', 'medium', 'url'], item)})`,
                    width: '320px',
                    height: '180px',
                    margin: '25px',
                    cursor: 'pointer'
                };
                return <li
                    key={++key}
                    style={currStyle}
                    onClick={ this.play.bind(this) }>
                </li>
            }) : '';
        }
    }

    render () {
        let content = this.state.action ?
            <div className="player">
                <iframe
                    id="player"
                    width="640"
                    height="390"
                    allowFullScreen="true"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    frameBorder="0"/>
            </div>

            : <ul className='list'>
                {this.buildPosters()}
              </ul>;

        return (
            <div className='grid'>
                {content}
            </div>
        );
    }
}

export default Grid;
