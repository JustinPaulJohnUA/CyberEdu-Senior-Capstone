/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React, { useState, useRef, useEffect } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

/*STYLE IMPORTS*/
import './Home.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/themes/translucent.css';

/*COMPONENT IMPORTS */
import Footer from '../../navigation/footer/Footer.js';
import Tooltip from '../../tooltips/Tooltip.js'
import Header from '../../navigation/header/Header.js';

/*ASSET IMPORTS */
import spywareIcon from '../../../assets/spyware.svg';
import hammerIcon from '../../../assets/hammer.png';
import mapIcon from '../../../assets/map.svg';
import binocularIcon from '../../../assets/binocular.svg';
import folderIcon from '../../../assets/folder.png';


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

export default function Home() {

    return (
        <motion.div className='wrapper'>
            <Header />
            <motion.div
                className="grid-container"
                variants={wrapperAnimation}
                animate="show"
                initial="initial"
                exit="exit">
                
                <motion.div
                    className="LogoIcon"
                    variants={linkAnimations}>
                    <h1 className="homepageHeading">CyberWise</h1>
                    <motion.img src={spywareIcon} />
                </motion.div>

                <motion.div
                    className="ToolsIcon"
                    variants={linkAnimations}
                    >
                    <Tippy 
                    theme="translucent" 
                    followCursor={true} 
                    plugins={[followCursor]} 
                    placement="top" 
                    animation="scale" 
                    content={<Tooltip title="Tools" content="Explore useful tools that will enhance the cybersecurity of your system" />}>
                        <Link to="/tools">
                            <motion.img id="homeToolsIcon" src={hammerIcon} />
                        </Link>
                    </Tippy>
                </motion.div>

                <motion.div
                    className="ExploreIcon"
                    variants={linkAnimations}
                    >
                    <Tippy 
                    theme="translucent" 
                    followCursor={true} 
                    plugins={[followCursor]} 
                    placement="top" 
                    animation="scale" 
                    content={<Tooltip title="Explore" content="Get connected with various Cybersecurity Associations based on location or affiliation." />}>
                        <Link to="/associations">
                            <motion.img id="homeExploreIcon" src={binocularIcon} />
                        </Link>  
                    </Tippy>
                </motion.div>

                <motion.div
                    className="LearnIcon"
                    variants={linkAnimations}
                    >
                    <Tippy 
                    theme="translucent" 
                    followCursor={true} 
                    plugins={[followCursor]} 
                    placement="top" 
                    animation="scale" 
                    content={<Tooltip title="Learn" content="Learn more about various topics in Cyber Crime and how to effectively avoid or mitigate them." />}>
                        <Link to="/learn">
                            <motion.img id="homeLearnIcon" src={mapIcon} />
                        </Link>
                    </Tippy>
                </motion.div>


                <motion.div
                    className="DiscoverIcon"
                    variants={linkAnimations}
                    >
                    <Tippy 
                    theme="translucent" 
                    followCursor={true} 
                    plugins={[followCursor]} 
                    placement="top" 
                    animation="scale" 
                    content={<Tooltip title="Live Feed" content="View cybercrime in realtime or report your own cyber crime to the site." />}>
                        <Link to="/data">
                            <motion.img id="homeDiscoverIcon" src={folderIcon} />
                        </Link>
                    </Tippy>
                </motion.div>  
            </motion.div>

            <Footer />
            <ParticleJS/>
        </motion.div>
    )
}

