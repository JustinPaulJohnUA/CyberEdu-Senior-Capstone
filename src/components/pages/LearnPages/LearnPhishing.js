import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../ParticleJS.js';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

/*COMPONENT IMPORTS */
import Footer from '../../Footer.js';
import Header from '../../navigation/Header.js';
import Tooltip from '../../tooltips/Tooltip.js';
import Accordion from '../../navigation/Accordion.js';
import LearnInPageNav from '../LearnPages/LearnInPageNav.js';

/*ASSET IMPORTS*/
import phishingIcon from '../../../assets/phishing.svg';
import hackerIcon from '../../../assets/hacker.svg';
import wormIcon from '../../../assets/worm.svg';

/*STYLE IMPORTS*/
import '../../../styles/LearnPhishing.css'

/*TEXT IMPORTS*/
import learnContent from '../../../text/text.json';
import text from '../../../assets/LearnAssets/text/PhishingText.json';

export default class LearnPhishing extends Component {
    render() {
        return (
            <div>
                <Header />
                <LearnInPageNav />
                <div className="topic-content-container">
                    <div className="topic-icon">
                        <img className="topic-icon" src={ phishingIcon }/>
                    </div>
                    <div className="topic-menu-wrapper">
                        <div className="topic-menu">
                            <h3>Navigation</h3>
                            <Accordion title="Email" anchors={{
                                description: "#email-phishing-description",
                                example: "#email-phishing-example",
                                mitigation: "#email-phishing-mitigation"
                            }}/>
                            <Accordion title="Vishing" anchors={{
                                description: "#video-phishing-description",
                                example: "#video-phishing-example",
                                mitigation: "#video-phishing-mitigation"
                            }}/>
                            <Accordion title="Spear Phishing" anchors={{
                                description: "#email-phishing-description",
                                example: "#email-phishing-example",
                                mitigation: "#email-phishing-mitigation"
                            }}/>
                        </div>
                    </div>
                    <div className="topic-content-wrapper">
                        <h2 className="topic-content-title">Phishing</h2>
                        <div className="topic-content">

                            <div id="email-phishing-content">
                                <h4 id="email-phishing-title">Email Phishing</h4>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="email-phishing-description">What is Email Phishing?</h3>
                                    <p className="text-content">{ text.email.decription }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="email-phishing-example">What Does Email Phishing Look Like?</h3>
                                    <p className="text-content">{ text.email.example }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="email-phishing-mitigation">How Can I Protect Myself Against Email Phishing?</h3>
                                    <p className="text-content">{ text.email.mitigation }</p>
                                </div>
                            </div>

                            <div id="email-phishing-content">
                                <h4 id="email-phishing-title">Video Phishing (Vishing)</h4>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="video-phishing-description">What is Vishing?</h3>
                                    <p className="text-content">{ text.vishing.description }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="video-phishing-example">What Does Vishing Look Like?</h3>
                                    <p className="text-content">{ text.vishing.example }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="video-phishing-mitigation">How Can I Protect Myself Against Vishing?</h3>
                                    <p className="text-content">{ text.vishing.mitigation }</p>
                                </div>
                            </div>

                            <div id="email-phishing-content">
                                <h4 id="spear-phishing-title">Spear Phishing</h4>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="spear-phishing-description">What is Spear Phishing?</h3>
                                    <p className="text-content">{ text.spearphishing.description }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="spear-phishing-example">What Does Spear Phishing Look Like?</h3>
                                    <p className="text-content">{ text.spearphishing.example }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="spear-phishing-mitigation">How Can I Protect Myself Against Spear Phishing?</h3>
                                    <p className="text-content">{ text.spearphishing.mitigation }</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
