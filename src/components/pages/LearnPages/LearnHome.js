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

/* STYLE IMPORTS */
import '../../../styles/LearnHome.css';

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
                            <img className="img-link" src={phishingIcon} />
                        </div>
                    </Tippy>

                    <Tippy
                        theme="translucent" 
                        placement="bottom" 
                        animation="scale"
                        content={<Tooltip title="Heads Up" content="Social Engineering involves tricking users into trusting cyver criminals (both online and in-person). Click the icon above to learn more."/>}>
                        <div className="img-link-container">
                            <h2 className="img-link-title">Social Engineering</h2>
                            <img className="img-link" src={hackerIcon} />
                        </div>
                    </Tippy>

                    <Tippy
                        theme="translucent"
                        placement="bottom"
                        animation="scale"
                        content={<Tooltip title="Heads Up" content="Malware is 'Malicious Software' that is designed to damage or steal data from a user's system. Click the icon about to learn more." />}>
                        <div className="img-link-container">
                            <h2 className="img-link-title">Malware</h2>
                            <img className="img-link" src={ wormIcon }/>
                        </div>
                    </Tippy>

                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
