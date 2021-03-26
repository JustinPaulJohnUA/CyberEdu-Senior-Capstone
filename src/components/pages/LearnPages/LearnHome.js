import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

export default class LearnHome extends Component {
    render() {
        return (
            <motion.div
                id="Learn-Home-Wrapper"
                variants={wrapperAnimation}
                animate="show"
                initial="initial"
                exit="exit">
                
                <Header />

                <motion.h1 id="learn-home-title" variants={linkAnimations}>Topics in Cybercrime</motion.h1>

                <div
                    id="Learn-Home-Topic-Links"
                    variants={linkAnimations}>
                    <Tippy
                        theme="translucent" 
                        placement="bottom" 
                        animation="scale"
                        content={<Tooltip title="Heads Up" content="Phishing involves scamming or impersonating others over email, chat or phone in order to steal someone's money, data, or credentials. Click on the icon to learn more."/>}>
                        <motion.div
                            className="img-link-container"
                            variants={linkAnimations}>
                            <h2 className="img-link-title">Phishing</h2>
                            <Link to="/learn/phishing">
                                <img className="img-link" src={phishingIcon} />
                            </Link>
                            
                        </motion.div>
                    </Tippy>

                    <Tippy
                        theme="translucent" 
                        placement="bottom" 
                        animation="scale"
                        content={<Tooltip title="Heads Up" content="Social Engineering involves tricking users into trusting cyver criminals (both online and in-person). Click the icon above to learn more."/>}>
                        <motion.div
                            className="img-link-container"
                            variants={linkAnimations}>
                            <h2 className="img-link-title">Social Engineering</h2>
                            <Link to="/learn/social-engineering">
                                <img className="img-link" src={hackerIcon} />
                            </Link>
                        </motion.div>
                    </Tippy>

                    <Tippy
                        theme="translucent"
                        placement="bottom"
                        animation="scale"
                        content={<Tooltip title="Heads Up" content="Malware is 'Malicious Software' that is designed to damage or steal data from a user's system. Click the icon about to learn more." />}>
                        <motion.div
                            className="img-link-container"
                            variants={linkAnimations}>
                            <h2 className="img-link-title">Malware</h2>
                            <Link to="/learn/malware">
                                <img className="img-link" src={ wormIcon }/>
                            </Link>
                        </motion.div>
                    </Tippy>

                </div>
                <Footer />
                <ParticleJS />
            </motion.div>
        )
    }
}
