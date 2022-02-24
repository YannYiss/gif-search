import React from 'react';
import './SearchBar.css';
import Button from 'react-bootstrap/Button';

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
                <Button variant='primary' size='lg' type='button' onClick={() => {
                    this.props.searchTrigger(this.state.search)}
                    }>Search</Button>
            </div>
        )
    }
}