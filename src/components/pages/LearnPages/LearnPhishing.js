import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../ParticleJS.js';

/*COMPONENT IMPORTS */
import Footer from '../../Footer.js';
import Header from '../../navigation/Header.js';
import Tooltip from '../../tooltips/Tooltip.js';
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';

/*ASSET IMPORTS*/
import phishingIcon from '../../../assets/phishing.svg';
import hackerIcon from '../../../assets/hacker.svg';
import wormIcon from '../../../assets/worm.svg';

/*STYLE IMPORTS*/
import '../../../styles/LearnPhishing.css'

export default class LearnPhishing extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="topic-content-container">
                    <div className="topic-icon">
                        <img className="topic-icon" src={ phishingIcon }/>
                    </div>
                    <div className="topic-menu-wrapper">
                        <div className="topic-menu">
                            <h3>Navigation</h3>
                            <a href="#">Email</a>
                            <a href="#">Phone</a>
                            <a href="#">Online</a>
                        </div>
                    </div>
                    <div class="topic-content-wrapper">
                        <h2 class="topic-content-title">Phishing</h2>
                        <div class="topic-content">
                            Coming Soon!
                        </div>
                    </div>
                    <div class="previous-button">
                        <button>Replace with an Arrow</button>
                    </div>
                    <div class="next-button">
                        <button>Replace with an Arrow</button>
                    </div>
                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
