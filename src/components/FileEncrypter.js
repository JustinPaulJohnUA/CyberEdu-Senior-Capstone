import React, { useState, useRef } from 'react'

/* MATERIAL-UI IMPORTS*/
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import CryptoJS from 'crypto-js'
import CryptoAES from 'crypto-js/aes';

/*SYTLE IMPORTS*/
import '../styles/FileEncrypter.css'

/*COMPONENT IMPORTS */


export default function FileEncrypter() {

    const [activeStep, setActiveStep] = useState(0);
    const [fileURI, setFileURI] = useState("");
    const [encryptResult, setEncryptResult] = useState("");
    const [decryptResult, setDecryptResult] = useState("");

    const optionSelectRef = useRef();

    const encryptionOptionsRef = useRef();
    const decryptionOptionsRef = useRef();

    const browseFileEncryptRef = useRef();
    const browseFileDecryptRef = useRef();

    const makeSecretKeyRef = useRef();
    const enterSecretKeyRef = useRef();

    const encryptStep1Ref = useRef();
    const encryptStep2Ref = useRef();
    const encryptStep3Ref = useRef()
    const encryptStep3AnchorRef = useRef();

    const decryptStep1Ref = useRef();
    const decryptStep2Ref = useRef();
    const decryptStep3Ref = useRef();
    const decryptStep3AnchorRef = useRef();

    var encryptedFileResult = "";
    var decryptedFileResult = "";


    function handleEncryptButton() {
        const optionSelect = optionSelectRef.current
        const encryptionOptions = encryptionOptionsRef.current;
        const encryptStep3 = encryptStep3Ref.current;

        optionSelect.style.display = "none";
        encryptStep3.style.display = "none";
        encryptionOptions.style.display = "block";
    }

    function handleDecryptButton() {
        const optionSelect = optionSelectRef.current
        const decryptionOptions = decryptionOptionsRef.current
        const decryptStep3 = decryptStep3Ref.current;

        optionSelect.style.display = "none";
        decryptStep3.style.display = "none"
        decryptionOptions.style.display = "block"


    }

    function handleEncryption(e) {
        const secretKey = makeSecretKeyRef.current.value

        var validKey = validateKey(secretKey)
        var validFile = validateFile(e)

        if (validKey && validFile) {
            encryptFile(secretKey, e)
        }
    }

    function handleDecryption(e) {
        const secretKey = enterSecretKeyRef.current.value;
        var validKey = validateKey(secretKey);
        var validFile = validateFile(e);
        if (validKey && validFile) {
            decryptFile(secretKey, e)
        }
    }

    function validateKey(key) {
        return key!== "" ? true : false
    }

    function validateFile(e) {
        const file = e.target.files[0]
        return file !== "" ? true : false;
    }

    function encryptFile(key, e) {
        var file = e.target.files[0]
        var reader = new FileReader();

        reader.onload = (function (file) {
            return function (e) {
                var encrypted = CryptoAES.encrypt(e.target.result, key).toString();
                encryptedFileResult = encrypted
                showDownloadEncrypt()
            }  
        })(file)
        reader.readAsText(file)
    }

    function decryptFile(key, e) {
        var file = e.target.files[0]
        var reader = new FileReader();

        reader.onload = (function (file) {
            return function (e) {
            var decrypted = CryptoAES.decrypt(e.target.result, key).toString(CryptoJS.enc.Latin1);
                decryptedFileResult = decrypted
                showDownloadDecrypt()
            }  
        })(file)
        reader.readAsDataURL(file);
    }

    function showDownloadEncrypt() {
        const encryptStep1 = encryptStep1Ref.current;
        const encryptStep2 = encryptStep2Ref.current;
        const encryptStep3 = encryptStep3Ref.current;
        const encryptStep3Anchor = encryptStep3AnchorRef.current;

        encryptStep1.style.display = "none";
        encryptStep2.style.display = "none";
        encryptStep3.style.display = "block"

        encryptStep3Anchor.setAttribute("href", `data:application/octet-stream,${encryptedFileResult}`);
        encryptStep3Anchor.setAttribute("download", "YourEncryptedFile.encrypted")
    }

    function showDownloadDecrypt() {
        const decryptStep3 = decryptStep3Ref.current;
        const decryptStep3Anchor = decryptStep3AnchorRef.current

        decryptStep3.style.display = "block";
        console.log(encryptedFileResult)
        decryptStep3Anchor.setAttribute("href", `${decryptedFileResult}`)
        decryptStep3Anchor.setAttribute("download", "YourDecryptedFile.png")


    }

    return (
        <div id="encrypter-applet-content-wrapper">
            <h2 className="encrypter-applet-content-title">AES Encrypter</h2>
            <div ref={optionSelectRef} className="encrypter-applet-content-option-select">
                <h3>Select an Option</h3>
                <button onClick={handleEncryptButton}>Encrypt a File</button>
                <button onClick={handleDecryptButton}>Decrypt a File</button>
            </div>

            <div ref={encryptionOptionsRef} className="encryption-option-steps-wrapper">
                <div ref={encryptStep1Ref} className="encrypt-1">
                    <h3>Make a Secret Key</h3>
                    <input ref={makeSecretKeyRef} required></input>
                </div>

                <div ref={encryptStep2Ref} className="encrypt-2">
                    <h3>Open a File</h3>
                    <input type="file" ref={browseFileEncryptRef} onChange={ (e) => handleEncryption(e)} />

                </div>

                <div ref={encryptStep3Ref} className="encrypt-3">
                    <h3>Download your File</h3>
                    <a ref={encryptStep3AnchorRef}>Download</a>
                </div>
            </div>

            <div ref={decryptionOptionsRef} className="decryption-option-steps-wrapper">
                <div ref={decryptStep1Ref} className="decrypt-1">
                    <h3>Enter your Decryption Key</h3>
                    <input ref={enterSecretKeyRef}></input>
                </div>
                <div ref={decryptStep2Ref} className="decrypt-2">
                    <h3>Open a File</h3>
                    <input type="file" ref={browseFileDecryptRef} onChange={ (e) => handleDecryption(e)} />
                </div>
                <div ref={decryptStep3Ref} className="decrypt-3">
                    <h3>Download your File</h3>
                    <a ref={decryptStep3AnchorRef}>Download</a>
                </div>
            </div>

        </div>
    )
}
