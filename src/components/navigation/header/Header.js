/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS */
import { Link } from 'react-router-dom';

/*ASSET IMPORTS*/
import spywareIcon from '../../../assets/spyware.svg';

/*STYLE IMPORTS*/
import './Header.css';


/*
    Description:
        - Describes the makeup of the header component found on most pages of the site
        - Clicking the icon image within the header will link back to the Home route
*/
export default class Header extends Component {
    render() {
        return (
            <div id="header-wrapper">
                <Link to="/">
                    <img id="header-home-logo" src={spywareIcon} />
                </Link>
                <p id="header-text">CyberWise</p>
            </div>
        )
    }
}
