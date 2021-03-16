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
import LearnInPageNav from '../LearnPages/LearnInPageNav.js';

/*ASSET IMPORTS*/
import phishingIcon from '../../../assets/phishing.svg';
import hackerIcon from '../../../assets/hacker.svg';
import wormIcon from '../../../assets/worm.svg';

/*STYLE IMPORTS*/
import '../../../styles/LearnPhishing.css'

/*TEXT IMPORTS*/
import text from '../../../assets/LearnAssets/text/SocialEngineeringText.json';

export default class LearnSocialEngineering extends Component {
    render() {
        return (
            <div>
                <Header />
                <LearnInPageNav />
                <div className="topic-content-container">
                    <div className="topic-icon">
                        <img className="topic-icon" src={ hackerIcon }/>
                    </div>
                    <div className="topic-menu-wrapper">
                        <div className="topic-menu">
                            <h3>Navigation</h3>
                            <Accordion title="Impersonation" anchors={{
                                description: "#impersonation-description",
                                example: "#impersonation-example",
                                mitigation: "#impersonation-mitigation"
                            }} />
                            <Accordion title="Shoulder Surfing" anchors={{
                                description: "#shoulder-surfing-description",
                                example: "#shoulder-surfing-example",
                                mitigation: "#shoulder-surfing-mitigation"
                            }}/>
                            <Accordion title="Tailgaiting / Mantraps" anchors={{
                                description: "#tailgating-mantraps-description",
                                example: "#tailgating-mantraps-example",
                                mitigation: "#tailgating-mantraps-mitigation"
                            }}/>
                            <Accordion title="Dumpster Diving" anchors={{
                                description: "#dumpster-diving-description",
                                example: "#dumpster-diving-example",
                                mitigation: "#dumpster-diving-mitigation"
                            }}/>
                            <Accordion title="Watering Holes" anchors={{
                                description: "#watering-hole-description",
                                example: "#watering-hole-example",
                                mitigation: "#watering-hole-mitigation"
                            }}/>
                        </div>
                    </div>
                    <div className="topic-content-wrapper">
                        <h2 className="topic-content-title">Social Engineering</h2>
                        <div className="topic-content">

                            <div id="impersonation-content">
                                <h4 id="impersonation-title">Impersonation</h4>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="impersonation-description">What is Impersonation?</h3>
                                    <p className="text-content">{ text.impersonation.description }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="impersonation-example">What Does Impersonation Look Like?</h3>
                                    <p className="text-content">{ text.impersonation.example }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="impersonation-mitigation">How Can I Protect Myself Against Impersonation?</h3>
                                    <p className="text-content">{ text.impersonation.mitigation }</p>
                                </div>
                            </div>

                            <div id="shoulder-surfing-content">
                                <h4 id="shoulder-surfing-title">Shoulder Surfing</h4>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="shoulder-surfing-description">What is Shoulder Surfing?</h3>
                                    <p className="text-content">{ text.shouldersurfing.description }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="shoulder-surfing-example">What Does Shoulder Surfing Look Like?</h3>
                                    <p className="text-content">{ text.shouldersurfing.example }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="shoulder-surfing-mitigation">How Can I Protect Myself Against Shoulder Surfing?</h3>
                                    <p className="text-content">{ text.shouldersurfing.mitigation }</p>
                                </div>
                            </div>

                            <div id="tailgating-content">
                                <h4 id="tailgating-title">Tailgating</h4>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="tailgating-description">What is Tailgating / What is a Mantrap?</h3>
                                    <p className="text-content">{ text.tailgating.description }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="tailgating-example">What Do Tailgating / Mantraps Look Like?</h3>
                                    <p className="text-content">{ text.tailgating.example }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="tailgating-mitigation">How Can I Protect Myself Against Tailgating / Mantraps?</h3>
                                    <p className="text-content">{ text.tailgating.mitigation }</p>
                                </div>
                            </div>

                            <div id="dumpster-diving-content">
                                <h4 id="dumpster-diving-title">Dumpster Diving</h4>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="dumpster-diving-description">What is Dumpster Diving?</h3>
                                    <p className="text-content">{ text.dumpsterdiving.description }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="dumpster-diving-example">What Does Dumpster Diving Look Like?</h3>
                                    <p className="text-content">{ text.dumpsterdiving.example }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="dumpster-diving-mitigation">How Can I Protect Myself Against Dumpster Diving?</h3>
                                    <p className="text-content">{ text.dumpsterdiving.mitigation }</p>
                                </div>
                            </div>

                            <div id="watering-hole-content">
                                <h4 id="watering-hole-title">Watering Hole</h4>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="watering-hole-description">What are Watering Holes?</h3>
                                    <p className="text-content">{ text.waterholes.description }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="watering-hole-example">What Do Watering Holes Look Like?</h3>
                                    <p className="text-content">{ text.waterholes.example }</p>
                                </div>
                                <div className="text-content-wrapper">
                                    <h3 className="text-content-title" id="tailgaiting-mitigation">How Can I Protect Myself Against Watering Holes?</h3>
                                    <p className="text-content">{ text.waterholes.mitigation }</p>
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
