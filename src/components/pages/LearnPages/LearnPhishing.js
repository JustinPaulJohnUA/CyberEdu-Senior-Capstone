import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';
import { motion } from 'framer-motion'

/*COMPONENT IMPORTS */
import Footer from '../../navigation/footer/Footer.js';
import Header from '../../navigation/header/Header.js';
import Accordion from '../../navigation/accordion/Accordion.js';
import LearnInPageNav from '../LearnPages/LearnInPageNav.js';

/*ASSET IMPORTS*/
import phishingIcon from '../../../assets/phishing.svg';

/*STYLE IMPORTS*/
import './LearnPage.css'

/*TEXT IMPORTS*/
import text from '../../../assets/LearnAssets/text/PhishingText.json';


const wrapperAnimation = {
    initial: {
        opacity: 0,
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.2
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.2
        }
    },
    exit: {
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.2
        }
    }
}

const linkAnimations = {
    initial: { opacity: 0, y: -1000 },
    show: {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
        }
    },
    exit: {
        opacity: 0,
        y: -700,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
        }
    }
}

const navAnimations = {
    initial: { opacity: 0, x: -1000 },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 25,
        },
        staggerChildren: 0.1
    },
    exit: {
        opacity: 0,
        x: -1000,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
        }
    }
}

const categoriesAnimations = {
    initial: { opacity: 0 },
    show: {
        opacity: 1,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
        }
    },
    exit: { opacity: 0 }
}


export default class LearnPhishing extends Component {
    render() {
        return (
            <motion.div
                variants={wrapperAnimation}
                animate="show"
                initial="initial"
                exit="exit">
                <Header />
                <LearnInPageNav />
                <div className="topic-content-container">

                    <motion.div
                        className="topic-icon"
                        variants={linkAnimations}>
                        <img className="topic-icon" src={ phishingIcon }/>
                    </motion.div>

                    <motion.div
                        className="topic-menu-wrapper"
                        variants={navAnimations}>
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
                    </motion.div>

                    <motion.div
                        className="topic-content-wrapper"
                        variants={categoriesAnimations}>
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
                    </motion.div>

                </div>
                <Footer />
                <ParticleJS />
            </motion.div>
        )
    }
}
