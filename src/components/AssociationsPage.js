import React, { Component } from 'react'
/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from './ParticleJS.js';

/*COMPONENT IMPORTS */
import Footer from './Footer.js';
import Header from './navigation/Header.js';
import Tooltip from './tooltips/Tooltip.js';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';

/*ASSETS IMPORTS*/
import binocularIcon from '../assets/binocular.svg';

/* STYLE IMPORTS*/
import '../styles/AssociationsPage.css';

export default class AssociationsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="associations-page-wrapper">
                    <div className="associations-page-title-wrapper">
                        <img id="associations-page-title-icon" src={binocularIcon} />
                        <div>Cybersecurity Associations</div>
                    </div>
                    <div className="associations-page-search-wrapper">
                        Search...
                    </div>
                    <div className="associations-page-content-wrapper">
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                    </div>
                
                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
