import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';
import { Link } from 'react-router-dom';

/*COMPONENT IMPORTS */
import Footer from '../../navigation/footer/Footer.js';
import Header from '../../navigation/header/Header.js';
import Tooltip from '../../tooltips/Tooltip.js';
import Tippy from '@tippyjs/react';

/*ASSET IMPORTS*/
import phishingIcon from '../../../assets/phishing.svg';
import hackerIcon from '../../../assets/hacker.svg';
import wormIcon from '../../../assets/worm.svg';

/* STYLE IMPORTS */
import './LearnHome.css';

export default class LearnHome extends Component {
    render() {
        return (
            <div id="Learn-Home-Wrapper">
                <Header />
                <h1 id="learn-home-title">Topics in Cybercrime</h1>
                <div id="Learn-Home-Topic-Links">
                    <Tippy
                        theme="translucent" 
                        placement="bottom" 
                        animation="scale"
                        content={<Tooltip title="Heads Up" content="Phishing involves scamming or impersonating others over email, chat or phone in order to steal someone's money, data, or credentials. Click on the icon to learn more."/>}>
                        <div className="img-link-container">
                            <h2 className="img-link-title">Phishing</h2>
                            <Link to="/learn/phishing">
                                <img className="img-link" src={phishingIcon} />
                            </Link>
                            
                        </div>
                    </Tippy>

                    <Tippy
                        theme="translucent" 
                        placement="bottom" 
                        animation="scale"
                        content={<Tooltip title="Heads Up" content="Social Engineering involves tricking users into trusting cyver criminals (both online and in-person). Click the icon above to learn more."/>}>
                        <div className="img-link-container">
                            <h2 className="img-link-title">Social Engineering</h2>
                            <Link to="/learn/social-engineering">
                                <img className="img-link" src={hackerIcon} />
                            </Link>
                        </div>
                    </Tippy>

                    <Tippy
                        theme="translucent"
                        placement="bottom"
                        animation="scale"
                        content={<Tooltip title="Heads Up" content="Malware is 'Malicious Software' that is designed to damage or steal data from a user's system. Click the icon about to learn more." />}>
                        <div className="img-link-container">
                            <h2 className="img-link-title">Malware</h2>
                            <Link to="/learn/malware">
                                <img className="img-link" src={ wormIcon }/>
                            </Link>
                        </div>
                    </Tippy>

                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
