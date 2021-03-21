import React from 'react'
import { Link } from 'react-router-dom'

/*ASSET IMPORTS*/
import phishingIcon from '../../../assets/phishing.svg';
import hackerIcon from '../../../assets/hacker.svg';
import wormIcon from '../../../assets/worm.svg';

/* LIBRARY COMPONENT IMPORTS */
import Tippy from '@tippyjs/react';
import Tooltip from '../../../components/tooltips/Tooltip.js'
import { followCursor } from 'tippy.js';

/*STYLE IMPORTS*/
import './LearnInPageNav.css'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/themes/translucent.css';

export default function LearnInPageNav() {
    return (
        <nav id="learn-nav-container">
            <Link to="/learn/phishing">
                <Tippy 
                theme="translucent" 
                followCursor={true} 
                plugins={[followCursor]} 
                placement="top" 
                animation="scale" 
                content={<Tooltip title="Phishing" content="Learn about topics in Phishing" />}>
                    <div>
                        <img className="in-page-nav-icon" src={ phishingIcon }/>
                    </div>
                </Tippy>
            </Link>

            <Link to="/learn/social-engineering">
                <Tippy 
                theme="translucent" 
                followCursor={true} 
                plugins={[followCursor]} 
                placement="top" 
                animation="scale" 
                content={<Tooltip title="Social Engineering" content="Learn about topics in Social Engineering" />}>
                    <div>
                        <img className="in-page-nav-icon" src={ hackerIcon }/>
                    </div>   
                </Tippy>
            </Link>

            <Link to="/learn/malware">
                <Tippy 
                theme="translucent" 
                followCursor={true} 
                plugins={[followCursor]} 
                placement="top" 
                animation="scale" 
                content={<Tooltip title="Malware" content="Learn about topics in Malware" />}>
                    <div to={"/learn/malware"}>
                        <img className="in-page-nav-icon" src={ wormIcon }/>
                    </div>           
                </Tippy>
            </Link>
        </nav>
    )
}
