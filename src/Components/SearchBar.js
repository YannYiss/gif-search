import React from 'react';
import './SearchBar.css';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            search: ''
        }
    }

    render() {
        return(
            <div className='searchBar'>
                <input type='text' placeholder='Search for a gif' name='search' onChange={(event) => this.setState({search: event.target.value})}></input>
                <br/>
                <button className='searchButton' type='button' onClick={() => {
                    this.props.searchTrigger(this.state.search)}
                    }>Search</button>
            </div>
        )
    }
}