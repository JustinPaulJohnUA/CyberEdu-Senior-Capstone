import { ContactSupportOutlined } from '@material-ui/icons'
import React from 'react'

/*STYLE IMPORTS*/
import '../../styles/EncrypterStyles/EncrypterSteps.css'

export default function EncrypterStep1(props) {
    return (
        <div id="encrypter-step-1-wrapper">
            <h3>Select an Option</h3>
            <div>
                <button onClick={() => props.handleNext} type={"button"}>Encrypt</button>
                <button type={"button"}>Decrypt</button>
            </div>
        </div>
    )
}
