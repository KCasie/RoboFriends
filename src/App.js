import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: '',
        }
    }

    onSearchChange() {
        
    }

    render() {
        return (
            <div className='tc'>
                <h1>CatFriends</h1>
                <SearchBox />
                <CardList robots={this.state.robots}/>
            </div>
        );
    }
}

export default App;


/* 
const App = () => {
    return (
        <div className='tc'>
            <h1>CatFriends</h1>
            <SearchBox />
            <CardList robots={robots}/>
        </div>
    );
}
*/