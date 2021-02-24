import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from './ParticleJS.js';

/*COMPONENT IMPORTS */
import Footer from './Footer.js';
import Header from './navigation/Header.js';
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
                <div id="tools-page-content-wrapper">
                    <div id="password-generator-wrapper">
                        <h2 className="tools-page-section-header">Password Generator</h2>
                        <div className="password-content">
                            Coming Soon!
                        </div>
                    </div>
                    <div id="encrypt-file-generator-wrapper">
                        <h2 className="tools-page-section-header">Encrypt File</h2>
                        <div className="encrypt-content">
                            Coming Soon!
                        </div>
                    </div>
                    <div id="resources-wrapper">
                        <h2 className="tools-page-section-header">Resources</h2>
                        <div className="resources-content">
                            Make this a grid, change the scrollbar to the right to look nicer
                        </div>
                    </div>

                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
