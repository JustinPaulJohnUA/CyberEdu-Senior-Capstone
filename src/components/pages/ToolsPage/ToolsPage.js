import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';
import { motion } from "framer-motion";

/*COMPONENT IMPORTS */
import Footer from '../../navigation/footer/Footer.js';
import Header from '../../navigation/header/Header.js';
import PasswordGenerator from './password_generator/PasswordGenerator.js';
import FileEncrypter from './file_encrypter/FileEncrypter.js'
import Card from '../../cards/Card.js'
import ToolsPageText from "../../../assets/ToolsPageAssets/text/ToolsPageText.json"

/* STYLE IMPORTS*/
import './ToolsPage.css'

const cardAnimationa = {
    hover: {
        scale: 1.2
    },
    initial: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.1
        }
    }
}

const wrapperAnimation = {
    initial: {opacity: 0},
    show: {
        opacity: 1,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.1
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

const appletTextAnimations = {
    initial: {
        x: -900,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
        }
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

const appletAnimations = {
    initial: {
        x: 1000,
        opacity: 0
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            type: "spring",
            stiffness: 25,
        }
    },
    exit: {
        opacity: 0,
        x: 1000,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
        }
    }
}

export default class ToolsPage extends Component {
    render() {
        return (
            <motion.div
                initial="initial"
                animate="show"
                exit="exit"
                variants={wrapperAnimation}
                >
                <Header />
                <div className="tools-page-content-wrapper">

                    <div className="password-generator-wrapper">
                        <motion.h2 className="password-generator-title" variants={appletTextAnimations}>Password Generator</motion.h2>
                        <motion.div className="password-generator-description" variants={appletTextAnimations}>
                            Create a psuedo-random password string of 4 - 20 characters. Randomly generated passwords are a great way to practice cybersecurity on only level, as they are harder to crack by software. Store the password in a password manager for further security. 
                            <ol>
                                <li>Enter a password length from 4 to 20</li>
                                <li>Select your desired password-characters</li>
                                <li>Click the "generate password" button</li>
                                <li>Highlight and copy the generated password</li>
                                <li>Store your password in a secure place, such as a password manager</li>
                            </ol>
                        </motion.div>

                        <motion.div
                            className="password-generator-applet"
                            variants={appletAnimations}>
                            <PasswordGenerator />
                        </motion.div>
                    </div>
                    
                    <div className="file-encrypter-wrapper">
                        <motion.h2
                            className="file-encrypter-title"
                            variants={appletTextAnimations}
                            >File Encrypter</motion.h2>
                        <motion.p
                            className="file-encrypter-description"
                            variants={appletTextAnimations}>
                            Encrypt a file via AES encryption. Your file will be converted into a hashed-string based on a secret password (a key) that you provide. Use the key to decrypt your file back to its original composition.
                        </motion.p>
                        <motion.div
                            className="file-encrypter-applet"
                            variants={appletAnimations}>
                            <FileEncrypter />
                        </motion.div>
                    </div>

                    <div className="tools-resources-wrapper">
                        <h2 className="tools-resources-title">External Tools</h2>
                        <motion.div className="tools-resources-content">
                            <motion.div
                                whileHover="hover"
                                variants={cardAnimationa}>
                                <Card
                                    title={ToolsPageText.bitwarden.title}
                                    img={ToolsPageText.bitwarden.img}
                                    link={ToolsPageText.bitwarden.link}
                                    description={ToolsPageText.bitwarden.description}
                                />
                            </motion.div>

                            <motion.div
                                whileHover="hover"
                                variants={cardAnimationa}>
                                <Card
                                    title={ToolsPageText.antivirus.title}
                                    img={ToolsPageText.antivirus.img}
                                    link={ToolsPageText.antivirus.link}
                                    description={ToolsPageText.antivirus.description}
                                />
                            </motion.div>

                            <motion.div
                                whileHover="hover"
                                variants={cardAnimationa}>
                                <Card
                                    title={ToolsPageText.vpn.title}
                                    img={ToolsPageText.vpn.img}
                                    link={ToolsPageText.vpn.link}
                                    description={ToolsPageText.vpn.description}
                                />
                            </motion.div>
                        </motion.div>
                    </div>  
                </div>

                <Footer />
                <ParticleJS />
            </motion.div>
        )
    }
}
