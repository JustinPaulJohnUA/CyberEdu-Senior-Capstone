import React, { useRef } from 'react'

/*SYTLE IMPORTS*/
import '../styles/FileEncrypter.css'

/*COMPONENT IMPORTS */
import CryptoJS from 'crypto-js'

export default function FileEncrypter() {
    // TOP NAVIGATION
    var passwordNavRef = useRef();
    var uploadNavRef = useRef();

    var currentStep = 'password-input-wrapper';
    var availableNavs = [];

    var password = '';
    var fileObj = '';
    var fileURL = '';
    var encrypted = '';
    var decrypted = '';

    const reader = new FileReader();

    function setPassword(e) {
        password = String(e.target.value)
        if (password.length > 0) {
            showTopNavigation(['upload-nav'])
            showBottomNavigation('next')
        } else {
            showTopNavigation([])
            showBottomNavigation('none')
        }
        
    }

    function showTopNavigation(navs) {
        if (navs.length === 0) {
            console.log('nav length is 0')
            var allnavs = ['upload-nav', 'encrypt-nav', 'decrypt-nav', 'download-nav']
            allnavs.map(id => {
                var navItem = document.getElementById(id);
                var className = navItem.classList
                if (!className.contains('disabled')) {
                    navItem.classList.add('disabled')
                    navItem.classList.remove('active')
                }
                
            })
        } else {
            navs.map(id => {
                var navItem = document.getElementById(id)
                var className = navItem.classList;
                if (!className.contains('active')) {
                    className.remove('disabled')
                    className.toggle('active')
                } else if (className.contains('disabled')) {
                    className.toggle('disabled')
                    className.remove('active')
                }
                
            })
        }


    }

    function showBottomNavigation(decision) {
        var bottomNavDiv = document.getElementById('show-steps-wrapper');
        var showNext = document.getElementById('show-next-button');
        var showPrev = document.getElementById('show-previous-button');

        switch (decision) {
            case 'next':
                showNext.style.display = 'block';
                break;
            case 'both':
                showNext.style.display = 'block';
                showPrev.style.display = 'block';
                bottomNavDiv.style.justifyContent = 'space-between'
                break
            case 'none':
                showNext.style.display = 'none';
            default:
                console.log('default hit');
        }
    }

    function handleTransition(e) {
        var transitionType = e.target.id;
        switch (currentStep) {
            case 'password-input-wrapper':
                var currentDiv = document.getElementById(currentStep);
                var nextDiv = document.getElementById('file-upload-wrapper')
                if (transitionType === 'show-next-button') {
                    currentDiv.style.display = 'none';
                    nextDiv.style.display = 'block';
                    showTopNavigation(['encrypt-nav', 'decrypt-nav'])
                    showBottomNavigation('both')
                }
        }
    }

    async function setFile(e) {
        fileObj = e.target.files[0]
        reader.readAsDataURL(fileObj)
        reader.onload = await function (e) {
            fileURL = reader.result
        }
    }

    var makeEncryption = (e) => {
        encrypted = CryptoJS.AES.encrypt(fileURL, 'password')
    }

    var downloadEncryptedFile = (e) => {
        e.target.href = 'data:application/octet-stream,' + encrypted
        e.target.download = fileObj.name + '.encrypted'
    }

    async function downloadDecryptedFile(e) {
        reader.readAsText(fileObj)
        reader.onload = await function (obj) {
            decrypted = CryptoJS.AES.decrypt(obj.target.result, 'password').toString(CryptoJS.enc.Latin1)
            e.target.href = decrypted;
            e.target.download = fileObj.name.replace('.encrypted', '')
        }
    }

    return (
        <div id="encrypter-applet-content-wrapper">
            <h2 className="encrypter-applet-content-title">AES Encrypter</h2>
            <div id="encrypter-applet-navigation">
                <button ref={ passwordNavRef } id="password-nav" className="encrypter-nav-button active">Password</button>
                <button ref={ uploadNavRef } id="upload-nav"  className="encrypter-nav-button disabled">File Upload</button>
                <button id="encrypt-nav"  className="encrypter-nav-button disabled">Encrypt</button>
                <button id="decrypt-nav"  className="encrypter-nav-button disabled">Decrypt</button>
                <button id="download-nav"  className="encrypter-nav-button disabled">File Download</button>
            </div>
            <div id="password-input-wrapper">
                <h3 id="password-title">Enter your Secret Password</h3>
                <input onChange={ (e) => setPassword(e) } id="password-input" type="text" />
            </div>

            <div id="file-upload-wrapper">
                <h3 id="file-upload-title">Upload a File</h3>
                <input onChange={ (e) => setFile(e) } id="file-upload-input" type="file" />
            </div>
            
            <div id="encrypt-decrypt-wrapper">
                <h3 id="encrypt-decrypt-title">Encrypt or Decrypt</h3>
                <button onClick={ () => makeEncryption() } id="encrypt">Encrypt</button>
                <button id="decrypt">Decrypt</button>
            </div>

            <div id="download-wrapper">
                <h3 id="download-title">Download your File</h3>
                <a onClick={ (e) => downloadEncryptedFile(e) } href="#" className="download-link">Download Encrypted</a>
                <a onClick={ (e) => downloadDecryptedFile(e) }  href="#" className="download-link">Download Decrypted</a>
            </div>

            <div id="show-steps-wrapper">
                <button id="show-previous-button">Previous</button>
                <button id='show-next-button' onClick={(e) => handleTransition(e) }>Next</button>
            </div>
        </div>
    )
}
