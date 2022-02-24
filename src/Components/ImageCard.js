import React, { Component } from 'react';
import './ImageCard.css'

export default class ImageCard extends Component {

    render() {
        return (
            <div className='imageContainer'>
                <img src={this.props.url} alt='' className='imageDisplay'/>
            </div>
        )
    }
}
