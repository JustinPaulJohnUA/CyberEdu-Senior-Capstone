import React, { Component } from 'react'

/*ASSET IMPORTS*/
import spywareIcon from '../../assets/spyware.svg';

/*STYLE IMPORTS*/
import '../../styles/Header.css';

export default class Header extends Component {
    render() {
        return (
            <div id="header-wrapper">
                <img id="header-home-logo" src={spywareIcon} />
                <p id="header-text">Cyber EDU</p>
            </div>
        )
    }
}
