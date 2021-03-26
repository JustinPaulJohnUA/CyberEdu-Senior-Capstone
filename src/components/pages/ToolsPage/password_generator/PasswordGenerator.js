import React, { Component, useRef } from 'react'

/*STYLE IMPORTS*/
import './PasswordGenerator.css';
import 'font-awesome/css/font-awesome.min.css';

import { motion } from "framer-motion";

export default function PasswordGenerator() {
    const randomFunction = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbol: getRandomSymbol
    }

    const lengthRef = useRef();
    const uppercaseRef = useRef();
    const lowercaseRef = useRef();
    const numbersRef = useRef();
    const symbolsRef = useRef();
    const clipboardref = useRef();
    const passwordResultRef = useRef();
    const generateButtonRef = useRef();

    function getRandomLower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    }
    function getRandomUpper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }
    function getRandomNumber() {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    function getRandomSymbol() {
        const symbols = '!@#$%^&*()?'
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    function checkSettings() {
        const length = lengthRef.current.value;
        const hasLower = lowercaseRef.current.checked;
        const hasUpper = uppercaseRef.current.checked;
        const hasNumber = numbersRef.current.checked;
        const hasSymbol = symbolsRef.current.checked;
        
        passwordResultRef.current.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
    }

    function generatePassword(lower, upper, number, symbol, length) {
        var generatedPassword = '';
        const typesCount = lower + upper + number + symbol;
        const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter( item => Object.values(item)[0]);

        if (typesCount === 0) {
            return ''
        };

        for (let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0]
                generatedPassword += randomFunction[funcName]();
            })
        }

        const finalPassword = generatedPassword.slice(0, length)

        return finalPassword
    }

    return (
        <div className="password-generator-applet-main">
            <h2 className="password-generator-applet-title">Password Generator</h2>
            <div className="result-container">
                <motion.span
                    ref={passwordResultRef}
                    className="generated-password"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    ></motion.span>
                {/* <button className="clipboard-button">
                    <i class="fa fa-clipboard"></i>
                </button> */}
            </div>
            <div className="settings">
                <div className="setting">
                    <label>Password Length</label>
                    <input ref={ lengthRef } type="number" id="passwordLength" min="4" max="20"/>
                </div>

                <div className="setting">
                    <label>Include Uppercase Letters</label>
                    <input ref={ uppercaseRef } type="checkbox" id="uppercase-setting"/>
                </div>

                <div className="setting">
                    <label>Include Lowercase Letters</label>
                    <input ref={ lowercaseRef } type="checkbox" id="lowercase-setting"/>
                </div>

                <div className="setting">
                    <label>Include Numbers</label>
                    <input ref={ numbersRef } type="checkbox" id="numbers-setting"/>
                </div>

                <div className="setting">
                    <label>Include Symbols</label>
                    <input ref={ symbolsRef } type="checkbox" id="symbols-setting"/>
                </div>

                <button ref={ generateButtonRef } id="generate-password-button" onClick={checkSettings}>
                    Generate Password
                </button>
            </div>
        </div>
    )
}
