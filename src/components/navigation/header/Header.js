/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React, { Component } from 'react'

import News from '../../news/News.js';

/*LIBRARY COMPONENT IMPORTS */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

/*ASSET IMPORTS*/
import spywareIcon from '../../../assets/spyware.svg';

/*STYLE IMPORTS*/
import './Header.css';


/*
    Description:
        - Describes the makeup of the header component found on most pages of the site
        - Clicking the icon image within the header will link back to the Home route
*/

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
export default class Header extends Component {
    render() {
        return (
            <motion.div
                id="header-wrapper"
                variants={wrapperAnimation}
                animate="show"
                initial="initial"
                exit="exit">
                <Link to="/">
                    <img id="header-home-logo" src={spywareIcon} />
                </Link>
                <p id="header-text">CyberWise</p>
                <News />
            </motion.div>
        )
    }
}
