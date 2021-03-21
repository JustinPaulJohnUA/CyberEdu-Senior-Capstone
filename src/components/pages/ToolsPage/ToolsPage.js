import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';

/*COMPONENT IMPORTS */
import Footer from '../../navigation/footer/Footer.js';
import Header from '../../navigation/header/Header.js';
import PasswordGenerator from './password_generator/PasswordGenerator.js';
import FileEncrypter from './file_encrypter/FileEncrypter.js'
import Card from '../../cards/Card.js'
import ToolsPageText from "../../../assets/ToolsPageAssets/text/ToolsPageText.json"

/* STYLE IMPORTS*/
import './ToolsPage.css'

export default class ToolsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="tools-page-content-wrapper">
                    <div className="password-generator-wrapper">
                        <h2 className="password-generator-title">Password Generator</h2>
                        <div className="password-generator-description">
                            Create a psuedo-random password string of 4 - 20 characters. Randomly generated passwords are a great way to practice cybersecurity on only level, as they are harder to crack by software. Store the password in a password manager for further security. 
                            <ol>
                                <li>Enter a password length from 4 to 20</li>
                                <li>Select your desired password-characters</li>
                                <li>Click the "generate password" button</li>
                                <li>Click the clipboard button to copy the generated password</li>
                                <li>Store your password in a secure place, such as a password manager</li>
                            </ol>
                        </div>
                        <div className="password-generator-applet">
                            <PasswordGenerator />
                        </div>
                    </div>
                    <div className="file-encrypter-wrapper">
                        <h2 className="file-encrypter-title">File Encrypter</h2>
                        <p className="file-encrypter-description">
                            Encrypt a file via AES encryption. Your file will be converted into a hashed-string based on a secret password (a key) that you provide. Use the key to decrypt your file back to its original composition.
                        </p>
                        <div className="file-encrypter-applet">
                            <FileEncrypter />
                        </div>
                    </div>
                    <div className="tools-resources-wrapper">
                        <h2 className="tools-resources-title">External Tools</h2>
                        <div className="tools-resources-content">
                            <Card
                                title={ToolsPageText.bitwarden.title}
                                img={ToolsPageText.bitwarden.img}
                                link={ToolsPageText.bitwarden.link}
                                description={ToolsPageText.bitwarden.description}
                            />
                            <Card
                                title={ToolsPageText.antivirus.title}
                                img={ToolsPageText.antivirus.img}
                                link={ToolsPageText.antivirus.link}
                                description={ToolsPageText.antivirus.description}
                            />
                            <Card
                                title={ToolsPageText.vpn.title}
                                img={ToolsPageText.vpn.img}
                                link={ToolsPageText.vpn.link}
                                description={ToolsPageText.vpn.description}
                            />
                        </div>
                    </div>  
                </div>

                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
