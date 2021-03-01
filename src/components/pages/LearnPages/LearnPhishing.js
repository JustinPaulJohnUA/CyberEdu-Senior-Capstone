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

/*ASSET IMPORTS*/
import phishingIcon from '../../../assets/phishing.svg';
import hackerIcon from '../../../assets/hacker.svg';
import wormIcon from '../../../assets/worm.svg';

/*STYLE IMPORTS*/
import '../../../styles/LearnPhishing.css'

/*TEXT IMPORTS*/
import learnContent from '../../../text/text.json';

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
                            <Accordion title="Email" />
                            <Accordion title="Vishing"/>
                            <Accordion title="Spear"/>
                        </div>
                    </div>
                    <div className="topic-content-wrapper">
                        <h2 className="topic-content-title">Phishing</h2>
                        <div className="topic-content">

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">Where does phishing take place?</h3>
                                <p className="text-content">{ learnContent.p1 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">What does phishing look like?</h3>
                                <p className="text-content">{ learnContent.p2 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">How do they get my information?</h3>
                                <p className="text-content">{ learnContent.p3 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">What can I do to protect myself?</h3>
                                <p className="text-content">{ learnContent.p4 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">This is a lot to look for. Is there any way to make this easier?</h3>
                                <p className="text-content">{ learnContent.p5 }</p>
                            </div>

                            <div className="text-content-wrapper">
                                <h3 className="text-content-title">I think I have been a target of a phishing scam. What do I do?</h3>
                                <p className="text-content">{ learnContent.p6 }</p>
                            </div>

                        </div>
                    </div>
                    <div className="previous-button">
                        <button>Previous Section</button>
                    </div>
                    <div className="next-button">
                        <button>Next Section</button>
                    </div>
                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
