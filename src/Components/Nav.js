import React, {Component} from 'react';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0,
            tabs: [
                {id: 0, name: 'tab'}
            ]
        }
    }

    addTab() {
        this.setState((prevState) => {
            return {
                active: prevState.tabs.length,
                tabs: prevState.tabs.concat({id: prevState.tabs.length, name:'tab'})
            };
        });
    }

    activate (e) {
        let active = e.target.href.slice(e.target.href.indexOf('#') + 1);
        this.setState({active: active});
    }

    render() {
        let tabs = this.state.tabs.map((tab) => {
            let className = tab.id ===  parseInt(this.state.active) ? 'tab active' : 'tab';

            return (
                <li key={tab.id}>
                    <a className={className} href={'#' + tab.id} onClick={this.activate.bind(this)}>
                        {tab.name}
                        <span className='close' onClick={}>x</span>
                    </a>
                </li>
            )
        });
        return (
            <div className="tabs">
                <ul>
                    {tabs}
                    <li><a className='new-tab' href={'#' + (this.state.tabs.length - 1)} onClick={this.addTab.bind(this)}>+</a></li>
                </ul>
            </div>
        );
    };
}

export default Nav;