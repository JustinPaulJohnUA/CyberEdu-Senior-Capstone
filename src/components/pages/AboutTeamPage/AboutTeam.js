import React from 'react'

import Header from '../../navigation/header/Header.js';
import Footer from '../../navigation/footer/Footer.js';
import ParticleJS from '../../effects/ParticleJS.js';
import './AboutTeam.css'

import avatar from '../../../assets/avatar-placeholder.gif'

import { motion } from 'framer-motion'

import Justin from './pictures/justin.jpg'
import Christine from './pictures/christine.jpg'

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

const sectionAnimations = {
    initial: { opacity: 0},
    show: {
        opacity: 1,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
        }
    }
}

export default function AboutTeam() {
    return (
        <motion.div
            id="about-us-wrapper"
                variants={wrapperAnimation}
                animate="show"
                initial="initial"
                exit="exit">
            <Header />
            <motion.div
                id="about-us-content-wrapper"
            variants={sectionAnimations}>
                <motion.div className="about-us-section-desc">
                    <h1>About the Team</h1>
                    <p>
                        CyberWise is a beginner-friendly cybersecurity knowledge-base that novice computer users can use to improve their
                        personal network or device security. This site was made as a collaborative effort between a group of undergrad
                        students for the purpose of completing the University of Arizona's iSchool capstone project. Descriptions about
                        each group member and their roles in the development of this wesbite are as follows.
                        
                    </p>
                </motion.div>

                <motion.div className="about-us-section">
                    <h2>Justin John</h2>
                    <div className="about-us-section-content">
                        <img src={Justin} />
                        <p>
                            <h3>Roles: Web Developer, Editor</h3>
                            My name is Justin John. I am a senior ISTA student, with a minor in Computer
                            Science, who will be graduating from the University of Arizona this Spring semester. As an
                            Information Security Intern and avid lover of technology, I am thrilled to be working on this
                            project and will be putting my best efforts towards the creation of our Cyber Security Website. I
                            have spent most of my time at the University of Arizona taking classes related to data
                            science/data engineering, software development and web development, so my portion of the
                            project will mostly focus on the creation of the website itself. This will include the
                            implementation of the front-end design, creation of any back-end services, and management of
                            any databases or use of external APIs. 
                        </p>
                    </div>

                </motion.div>
                <motion.div className="about-us-section">
                    <h2>Chris Huerta</h2>
                    <div className="about-us-section-content">
                        <img src={avatar}/>
                        <p>
                            <h3>Roles: Content Writer</h3>
                            My name is Chris Huerta and I am a senior in ISTA with minors in Spanish and
                            Sports Management. This will be my final semester as I am graduating in May, so I want to put a
                            lot of work into this great final project that we have. In my college studies, I have focused mainly
                            on data science, especially data mining, database management and numerous other classes about
                            manipulation and use of data to make conclusions/predictions. I have a pretty good knowledge of
                            using R and Python, which will help in our various data science related aspects of the project.
                            For the project, I will be doing a lot of work of getting databases with raw cybercrime
                            information and using these databases to make graphs and conclusions that will be shown on the
                            website. I will also be helping with the drafting of the final report and the creation of our final
                            slide presentation, which will include many graphs and information on cybercrime using the data
                            we have collected. I have done a bit in the realm of web design on my own, so I do not have very
                            much experience on that part, nevertheless I will still try my best to help.
                        </p>
                    </div>

                </motion.div>
                <motion.div className="about-us-section">
                    <h2>Hisham Alhindawi</h2>
                    <div className="about-us-section-content">
                        <img src={avatar}/>
                        <p>
                            <h3>Roles: Content Writer</h3>
                            I am a senior in ISTA with a minor in Business Administration and a
                            Cybersecurity Certificate through UA South, hopefully graduating in May 2021. I have focused
                            heavily on data science and cybersecurity throughout my college career and want to make a great
                            final project. For this project, I will try to focus on helping make sure all the information is
                            accurate and with helping as much as possible with research, development, and editing/creation
                            of video. 
                        </p>
                    </div>

                </motion.div>
                <motion.div className="about-us-section">
                    <h2>Christine Heaton</h2>
                    <div className="about-us-section-content">
                        <img src={Christine}/>
                        <p>
                            <h3>Roles: Content Writer</h3>
                            I am a senior in ISTA with a dual major in Japanese, graduating in May
                            2021. I have taken a wide variety of courses in the ISTA department, from data analytics to game
                            design to cybercrime. I will be focusing on research and content creation for this project, as a
                            large part of my college career has focused on effective research methods, both quantitative and
                            qualitative.
                        </p>
                    </div>
                </motion.div>
            </motion.div>
            <Footer />
            <ParticleJS/>
        </motion.div>
    )
}
