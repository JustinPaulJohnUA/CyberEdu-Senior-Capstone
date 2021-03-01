import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../ParticleJS.js';
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';

/*COMPONENT IMPORTS */
import Footer from '../../Footer.js';
import Header from '../../navigation/Header.js';
import Tooltip from '../../tooltips/Tooltip.js';
import Accordion from '../../navigation/Accordion.js';

/*ASSET IMPORTS*/
import phishingIcon from '../../../assets/phishing.svg';
import hackerIcon from '../../../assets/hacker.svg';
import wormIcon from '../../../assets/worm.svg';

/*STYLE IMPORTS*/
import '../../../styles/LearnPhishing.css'

/*TEXT IMPORTS*/
import learnContent from '../../../text/text.json';

export default class LearnSocialEngineering extends Component {
    render() {
        return (
            <div>
                <Header />

                <div className="topic-content-container">
                    <div className="topic-icon">
                        <img className="topic-icon" src={ hackerIcon }/>
                    </div>
                    <div className="topic-menu-wrapper">
                        <div className="topic-menu">
                            <h3>Navigation</h3>
                            <Accordion title="Impersonation" />
                            <Accordion title="Shoulder Surfing"/>
                            <Accordion title="Tailgaiting / Mantraps" />
                            <Accordion title="Dumpster Diving" />
                            <Accordion title="Watering Holes" />
                        </div>
                    </div>
                    <div className="topic-content-wrapper">
                        <h2 className="topic-content-title">Social Engineering</h2>
                        <div className="topic-content">

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">How do you know you're taking part in social engineering?</h3>
                                <p className="text-content">{ learnContent.se1 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">What can social engineering look like?</h3>
                                <p className="text-content">{ learnContent.se2 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">I think I'm a target of a social engineering scheme. What do I do?</h3>
                                <p className="text-content">{ learnContent.se3 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">Is there any software that I can use to filter these schemes?</h3>
                                <p className="text-content">{ learnContent.se4 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">I think I've fallen too deep into a social engineering scam, or my data may have been compromised.</h3>
                                <p className="text-content">{ learnContent.se5 }</p>
                            </div>
                        </div>
                    </div>
                    <div className="previous-button">
                        <button>Replace with an Arrow</button>
                    </div>
                    <div className="next-button">
                        <button>Replace with an Arrow</button>
                    </div>
                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}