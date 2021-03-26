import React from 'react'

/*SYTLE IMPORTS*/
import './FileEncrypter.css'

/* LIBRARY COMPONENT IMPORTS */
import CryptoJS from 'crypto-js'
import { motion } from 'framer-motion'

export default function FileEncrypter() {

    let decision = '';
    var currentStep = 'encrypt-decrypt-wrapper';
    var password = '';
    var key = '';
    var fileObj = '';
    var fileURL = '';
    var encrypted = '';
    var decrypted = '';
    var fileToDecrypt = '';

    const reader = new FileReader();

    function setPassword(e) {
        password = String(e.target.value)
        var btn = document.getElementById("encrypt-button");

        if (password.length > 0) {
            btn.style.display = "block"
        } else {
            btn.style.display = 'none'
        }
    }

    function setDecryptionKey(e) {
        key = String(e.target.value)
        var btn = document.getElementById('decrypt-button')
        if (key.length > 0) {
            btn.style.display = 'block'
        } else {
            btn.style.display = 'none'
        }
    }

    async function setFile(e) {
        if (e.target.files.length > 0) {
            fileObj = e.target.files[0]
            if (decision === 'decrypt') {
                reader.readAsText(fileObj)
                reader.onload = await function (obj) {
                    fileToDecrypt = obj.target.result
                    currentStep = 'decrypt-input-wrapper'
                    showDecryptPassphrase()
                }
            } else if (decision === 'encrypt') {
                reader.readAsDataURL(fileObj)
                reader.onload = await function () {
                    fileURL = reader.result
                    currentStep = 'password-input-wrapper'
                    showPassphrase();
                }
            }
        } 
    }

    function showUpload(e) {
        currentStep = 'file-upload-wrapper'
        if (e.target.id === 'encrypt') {
            decision = 'encrypt'
        } else if (e.target.id === 'decrypt') {
            decision = 'decrypt'
        }

        var encryptDecryptDiv = document.getElementById('encrypt-decrypt-wrapper')
        var fileInputDiv = document.getElementById('file-upload-wrapper')

        encryptDecryptDiv.style.display = 'none'
        fileInputDiv.style.display = 'flex';
        fileInputDiv.style.flexDirection = 'column';
    }

    function showPassphrase() {
        currentStep = 'password-input-wrapper'
        var uploadDiv = document.getElementById('file-upload-wrapper')
        var passphraseDiv = document.getElementById('password-input-wrapper')

        uploadDiv.style.display = 'none';
        passphraseDiv.style.display = 'flex';
        passphraseDiv.style.flexDirection = 'column';
        passphraseDiv.style.alignItems = 'center'
    }

    function showDecryptPassphrase() {
        currentStep = 'decrypt-input-wrapper'
        var uploadDiv = document.getElementById('file-upload-wrapper')
        var passphraseDecryptDiv = document.getElementById('decrypt-input-wrapper')

        uploadDiv.style.display = 'none';
        passphraseDecryptDiv.style.display = 'flex';
        passphraseDecryptDiv.style.flexDirection = 'column';
        passphraseDecryptDiv.style.alignItems = 'center'
    }

    function showEncryptionDownload() {
        currentStep = 'download-wrapper'
        var passphraseDiv = document.getElementById('password-input-wrapper')
        var downloadDiv = document.getElementById('download-wrapper')
        passphraseDiv.style.display = 'none';
        downloadDiv.style.display = 'flex';
        downloadDiv.style.flexDirection = 'column'
        downloadDiv.style.alignItems = 'center'
        downloadDiv.style.justifyContent = 'center'

        makeEncryption()
        downloadEncryptedFile()
    }

    function showDecryptionDownload() {
        makeDecryption()
        downloadDecryptedFile()

        if(!/^data:/.test(decrypted)){
            alert("Invalid pass phrase or file! Please try again.");
            return false;
        } else {
            currentStep = 'download-wrapper'
            var passphraseDiv = document.getElementById('decrypt-input-wrapper')
            var downloadDiv = document.getElementById('download-wrapper')
            passphraseDiv.style.display = 'none';
            downloadDiv.style.display = 'flex';
            downloadDiv.style.flexDirection = 'column'
            downloadDiv.style.alignItems = 'center'
            downloadDiv.style.justifyContent = 'center'
        }
    }

    var makeEncryption = (e) => {
        encrypted = CryptoJS.AES.encrypt(fileURL, password)
    }

    var makeDecryption = (e) => {
        console.log('decryption key is ', key)
        decrypted = CryptoJS.AES.decrypt(fileToDecrypt, key).toString(CryptoJS.enc.Latin1)
    }

    function downloadFile() {
        currentStep = 'download-wrapper'
        if (decision === 'encrypt') {
            var downloadButton = document.getElementById("download-link")
            downloadButton.href = 'data:application/octet-stream,' + encrypted
            downloadButton.download = fileObj.name + '.encrypted'
        } else if (decision === 'decrypt') {
            var downloadButton = document.getElementById("download-link")
            downloadButton.href = decrypted;
            downloadButton.download = fileObj.name.replace('.encrypted', '')
        }
    }

    var downloadEncryptedFile = (e) => {
        var downloadButton = document.getElementById("download-link")
        downloadButton.href = 'data:application/octet-stream,' + encrypted
        downloadButton.download = fileObj.name + '.encrypted'
    }

    async function downloadDecryptedFile(e) {
        var downloadButton = document.getElementById("download-link")
        downloadButton.href = decrypted;
        downloadButton.download = fileObj.name.replace('.encrypted', '')
    }

    function restartEncryption(e) {
        var siblingWrapper = document.getElementById(currentStep);
        var encryptDecryptDiv = document.getElementById("encrypt-decrypt-wrapper");

        siblingWrapper.style.display = "none";
        encryptDecryptDiv.style.display = "flex";
        encryptDecryptDiv.style.flexDirection = "column";
        encryptDecryptDiv.style.alignItems = "center";

        document.getElementById('file-upload-input').value = null;

        currentStep = 'encrypt-decrypt-wrapper'
    }

    const buttonAnimations = {
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

    return (
        <div id="encrypter-applet-content-wrapper">
            <div style={{display:"flex", justifyContent: "space-between"}}>
                <h2 className="encrypter-applet-content-title">AES Encrypter</h2>
                <motion.button
                    id="restartButton"
                    style={{
                        width: "100px",
                        height: "40px",
                        verticalAlign: "center",
                        backgroundColor: "#3b3b98",
                        border: "none",
                        color: "white",
                        borderRadius: "5px"
                    }}
                    onClick={(e) => restartEncryption(e)}
                    whileHover="hover"
                    variants={buttonAnimations}>Restart</motion.button>
            </div>
            

            <div id="encrypt-decrypt-wrapper" className="overlay">
                <h3 id="encrypt-decrypt-title">Select an Option</h3>
                <motion.button onClick={ (e) => showUpload(e) } id="encrypt" whileHover="hover" variants={buttonAnimations}>Encrypt</motion.button>
                <motion.button onClick={ (e) => showUpload(e) } id="decrypt" whileHover="hover" variants={buttonAnimations}>Decrypt</motion.button>
            </div>

            <div id="file-upload-wrapper">
                <h3 id="file-upload-title">Upload a File</h3>
                <input onChange={(e) => setFile(e)} id="file-upload-input" type="file" />
            </div>

            <div id="password-input-wrapper">
                <h3 id="password-title">Enter your Secret Password</h3>
                <input onChange={(e) => setPassword(e)} id="password-input" type="text" />

                <motion.button onClick={ (e) => showEncryptionDownload(e)} id="encrypt-button" whileHover="hover" variants={buttonAnimations}>Encrypt</motion.button>
            </div>

            <div id='decrypt-input-wrapper'>
                <h3>Enter your Decryption Key</h3>
                <input onChange={(e) => setDecryptionKey(e)} id="decryption-key-input" type="text" />
                <motion.button onClick={(e) => showDecryptionDownload(e)} id="decrypt-button" whileHover="hover" variants={buttonAnimations}>Decrypt</motion.button>
            </div>
            
            <div id="download-wrapper" className="overlay">
                <h3 id="download-title">Download your File</h3>
                <motion.a onClick={ (e) => downloadFile(e) } href="#" id="download-link" whileHover="hover" variants={buttonAnimations}>Download</motion.a>
            </div>

        </div>
    )
}
