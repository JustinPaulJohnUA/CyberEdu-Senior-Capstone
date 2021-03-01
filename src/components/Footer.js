import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import '../styles/Footer.css';
import spywareIcon from '../assets/spyware.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                
                <div className="footer-logo-wrapper">
                    <img className="footer-icon" src={spywareIcon} />
                    <h2 className="footer-site-name">Cyber Edu</h2>
                </div>
     
                <div className="site-map-wrapper">
                    <h2 className="site-map-header">Site Map</h2>
                    <ul className="site-map-ul">
                        <li>
                            <Link to="/tools">Tools</Link>
                        </li>
                        <li>
                            <Link to="/learning">Learning</Link>
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
                    <h2 className="licenses-header">Licenses & Credit</h2>
                    <ul className="licenses-ul">
                        <li>Credit Page</li>
                    </ul>
                </div>

                <div className="copyright-wrapper">
                    <h2 className="copyright-header">Group Members</h2>
                    <ul className="copyright-ul">
                        <li>Christine</li>
                        <li>Justin</li>
                        <li>Chris</li>
                        <li>Hisham</li>
                    </ul>
                </div>

                <div className="about-us-wrapper">
                    <h2 className="about-us-header">About Us</h2>
                    <ul className="about-us-ul">
                        <li>Satement of Use Page</li>
                    </ul>
                </div>
            </div>
        )
    }
}
