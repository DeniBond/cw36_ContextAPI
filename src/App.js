import './App.css';

import React, {Component} from 'react';
import Nav from "./components/Nav";
import Body from "./components/Body";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y',
                name: 'Monster',
            },
            stats: {
                followers: 10,
                subscribers: 100
            }
        }
    }

    render() {
        return (
            <div className={'app'}>
                <Nav user={this.state.user}/>
                <Body user={this.state.user} stats={this.state.stats}/>
            </div>
        );
    }
}

export default App;