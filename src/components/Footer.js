import React, { Component } from 'react'

import '../styles/Footer.css';
import spywareIcon from '../assets/spyware.svg';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-wrapper">
                
                <div className="footer-logo-wrapper">
                    <img className="footer-icon" src={spywareIcon} />
                    <h2 className="footer-site-name">Site Name</h2>
                </div>
     
                <div className="site-map-wrapper">
                    <h2 className="site-map-header">Site Map</h2>
                    <ul className="site-map-ul">
                        <li>Content 1</li>
                        <li>Content 2</li>
                        <li>Content 3</li>
                        <li>Content 4</li>
                    </ul>
                </div>

                <div className="licenses-wrapper">
                    <h2 className="licenses-header">Licenses & Credit</h2>
                    <ul className="licenses-ul">
                        <li>Content 1</li>
                        <li>Content 2</li>
                        <li>Content 3</li>
                        <li>Content 4</li>
                    </ul>
                </div>

                <div className="copyright-wrapper">
                    <h2 className="copyright-header">Copyright</h2>
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
                        <li>Content 1</li>
                        <li>Content 2</li>
                        <li>Content 3</li>
                        <li>Content 4</li>
                    </ul>
                </div>
            </div>
        )
    }
}
