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
import '../styles/DataPage.css'

export default class DataPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="data-page-wrapper">
                    <div id="live-map-wrapper">
                        <iframe width="900" height="620" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0"></iframe>
                    </div>

                    <div id="live-map-description">
                        More Coming Soon... Add Graphs and descriptions.
                    </div>
                    
                </div>
                
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
