import React, {Component} from 'react';
import tools from '../tools';
import config from "../config";

class Grid extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    componentWillReceiveProps (props) {
        this.setState({items: props.items, searchType: props.searchType, present: false, content: ''});
    }

    buildPosters () {
        let key = 0;
        let currStyle = {};

        return this.state.items && this.state.items.length > 0 ? this.state.items.map((item)=>{
            if (this.state.searchType === config.searchType.video) {
                currStyle = {
                    backgroundImage: `url(${tools.has(['snippet', 'thumbnails', 'medium', 'url'], item)})`,
                    width: '320px',
                    height: '180px',
                    margin: '25px',
                    cursor: 'pointer'
                };
                return <li
                    key={++key}
                    style={currStyle}
                    currcontent={item.id.videoId}
                    onClick={ this.play.bind(this) }>
                </li>
            } else {
                let image = tools.has(['link'], item);
                currStyle = {
                    backgroundImage: `url(${image})`,
                    backgroundSize: '320px',
                    resizeMode: 'cover',
                    width: '320px',
                    height: '180px',
                    margin: '25px',
                    cursor: 'pointer'
                };
                return <li
                    key={++key}
                    currcontent={ image }
                    style={currStyle}
                    onClick={ this.play.bind(this) }>
                </li>
            }
        }) : '';

    }

    play (e) {
        if (e.target.localName === 'li') {
            this.setState({present: true, content: e.target.attributes.currcontent.nodeValue});
        } else {
            this.setState({present: false});
        }
    }

    buildFrame (content) {
        const src = this.state.searchType === config.searchType.video ? "https://www.youtube.com/embed/" + content + '?rel=0&autoplay=1' : content;

        return <iframe
            id="player"
            width="700"
            height="480"
            allowFullScreen="true"
            src={src}
            frameBorder="0"/>
    }

    render () {
        let items = this.state.present ?
            <div className="player">
                {this.buildFrame(this.state.content)}
                <button className='close-video' onClick={this.play.bind(this)}>Close</button>
            </div>
            : <ul className='list'> {this.buildPosters()} </ul>;

        return (
            <div className='grid'>
                {items}
            </div>
        );
    }
}

export default Grid;
