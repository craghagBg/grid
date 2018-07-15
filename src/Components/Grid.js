import React, {Component} from 'react';
import tools from '../tools';
import config from "../config";

class Grid extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillReceiveProps (props) {
        this.setState({items: props.items, searchType: props.searchType, action: false, play: ''});
    }

    play (e) {
        if (e.target.localName === 'li') {
            this.setState({action: true, play: e.target.attributes.videoid.nodeValue});
        } else {
            this.setState({action: false});
        }
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
                    videoid={item.id.videoId}
                    onClick={ this.play.bind(this) }>
                </li>
            }) : '';
        }
    }

    buildVideo (video) {
        const src = "https://www.youtube.com/embed/" + video + '?rel=0&autoplay=1';

        return <iframe
            id="player"
            width="700"
            height="480"
            allowFullScreen="true"
            src={src}
            frameBorder="0"/>
    }

    render () {
        let content = this.state.action ?
            <div className="player">
                {this.buildVideo(this.state.play)}
                <button className='close-video' onClick={this.play.bind(this)}>Close</button>
            </div>
            : <ul className='list'> {this.buildPosters()} </ul>;

        return (
            <div className='grid'>
                {content}
            </div>
        );
    }
}

export default Grid;
