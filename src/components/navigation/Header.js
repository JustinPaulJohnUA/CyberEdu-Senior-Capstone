import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS */
import { Link } from 'react-router-dom';

/*ASSET IMPORTS*/
import spywareIcon from '../../assets/spyware.svg';

/*STYLE IMPORTS*/
import '../../styles/Header.css';

export default class Header extends Component {
    render() {
        return (
            <div id="header-wrapper">
                <Link to="/">
                    <img id="header-home-logo" src={spywareIcon} />
                </Link>
                <p id="header-text">Cyber EDU</p>
            </div>
        )
    }
}
