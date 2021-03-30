/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/


import React, { Component } from 'react'
import { Link } from 'react-router-dom';


/* STYLE IMPORTS */
import './Footer.css';

/* ASSET IMPORTS */
import spywareIcon from '../../../assets/spyware.svg';


/* 
    Description
        - Describes the makeup of the website's footer
        - The footer can link back to any page on the site (Site Map) via react-router Links 
        - The footer also contains are context of use and resources/credits pages 
*/
export default class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                
                <div className="footer-logo-wrapper">
                    <img className="footer-icon" src={spywareIcon} />
                    <h2 className="footer-site-name">CyberWise</h2>
                </div>
     
                <div className="site-map-wrapper">
                    <h2 className="site-map-header">Site Map</h2>
                    <ul className="site-map-ul">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/tools">Tools</Link>
                        </li>
                        <li>
                            <Link to="/learn">Learning</Link>
                        </li>
                        <li>
                            <Link to="/associations">Explore</Link>
                        </li>
                        <li>
                            <Link to="/data">Data</Link>
                        </li>
                    </ul>
                </div>

                <div className="licenses-wrapper">
                    <h2 className="licenses-header">Licenses &amp; Credit</h2>
                    <ul className="licenses-ul">
                        <li>
                            <a href="https://docs.google.com/document/d/1A-04AmYePv-Q7hfNMs_pA4zfDAxoYIg8eN7KM-oPYSI/edit?usp=sharing" target="_blank">Credit &amp; Resources Used</a>
                        </li>
                    </ul>
                </div>

                <div className="copyright-wrapper">
                    <h2 className="copyright-header">About Us</h2>
                    <ul className="copyright-ul">
                        <li>
                            <Link to="/about-us">
                                Meet the Team
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
