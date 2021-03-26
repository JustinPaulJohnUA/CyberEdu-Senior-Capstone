import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';
import { motion } from 'framer-motion';

/*COMPONENT IMPORTS */
import Footer from '../../navigation/footer/Footer.js';
import Header from '../../navigation/header/Header.js';
import Accordion from '../../navigation/accordion/Accordion.js';
import LearnInPageNav from '../LearnPages/LearnInPageNav.js';

/*ASSET IMPORTS*/
import hackerIcon from '../../../assets/hacker.svg';

/*STYLE IMPORTS*/
import './LearnPage.css'

/*TEXT IMPORTS*/
import text from '../../../assets/LearnAssets/text/SocialEngineeringText.json';

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

export default class LearnSocialEngineering extends Component {
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
                        <img className="topic-icon" src={ hackerIcon }/>
                    </motion.div>

                    <motion.div
                        className="topic-menu-wrapper"
                        variants={navAnimations}>
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
                    </motion.div>

                    <motion.div
                        className="topic-content-wrapper"
                        variants={categoriesAnimations}>
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
                    </motion.div>
                </div>
                <Footer />
                <ParticleJS />
            </motion.div>
        )
    }
}
