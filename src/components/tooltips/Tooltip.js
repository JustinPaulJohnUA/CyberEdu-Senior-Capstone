import React, { Component } from 'react'

/*STYLE IMPORTS*/
import './Tooltip.css';

export default class Tooltip extends Component {
    render() {
        return (
            <div id="tooltip-wrapper">
                <h3 id="tooltip-title">{this.props.title}</h3>
                <p id="tooltip-content">{this.props.content}</p>
            </div>
        )
    }
}
