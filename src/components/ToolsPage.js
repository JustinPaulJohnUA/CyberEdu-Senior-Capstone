import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from './ParticleJS.js';

/*COMPONENT IMPORTS */
import Footer from './Footer.js';
import Header from './navigation/Header.js';
import PasswordGenerator from '../components/PasswordGenerator.js';
import Tooltip from './tooltips/Tooltip.js';
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';

/* STYLE IMPORTS*/
import '../styles/ToolsPage.css'

export default class ToolsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="tools-page-content-wrapper">
                    <div className="password-generator-applet-wrapper">
                        <PasswordGenerator />
                    </div>
                    <div className="password-generator-title-wrapper">
                        <h2 className="paswword-generator-title">Password Generator</h2>
                    </div>
                    <div className="password-generator-description-wrapper">
                        <p>Using a strong and diverse password on any website you sign up for is one the best ways to upkeep your business or personal cybersecurity.</p>
                        <ul>
                            <li>Enter a password length from 4 to 20</li>
                            <li>Select your desired password-characters</li>
                            <li>Click the "generate password" button</li>
                            <li>Click the clipboard button to copy the generated password</li>
                            <li>Store your password in a secure place, such as a password manager</li>
                        </ul>
                    </div>
                    <div className="file-encrypt-applet-wrapper">
                        
                    </div>
                    <div className="file-encrypt-title-wrapper">
                        <h2 className="file-encrypt-title">Encrypt File</h2>
                    </div>
                    <div className="file-encrypt-description-wrapper"></div>
                    <div className="resources-title-wrapper">
                        <h2 className="resources-title">Resources</h2>
                    </div>
                    <div class="resources-content-wrapper"></div>
                </div>

                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
