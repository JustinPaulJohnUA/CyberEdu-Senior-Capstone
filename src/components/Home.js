import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from './ParticleJS.js';
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';

/*STYLE IMPORTS*/
import '../styles/Home.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/themes/translucent.css';

/*COMPONENT IMPORTS */
import Footer from '../components/Footer.js';
import Tooltip from '../components/tooltips/Tooltip.js'

/*ASSET IMPORTS */
import spywareIcon from '../assets/spyware.svg';
import hammerIcon from '../assets/hammer.png';
import mapIcon from '../assets/map.svg';
import binocularIcon from '../assets/binocular.png';
import folderIcon from '../assets/folder.png';


export default class Home extends Component {

    componentDidMount() {
        const script = document.createElement("script")
    }

    render() {
        return (
            <div className='wrapper'>
                <div className="grid-container">
                    <div className="LogoIcon">
                        <h1 className="homepageHeading">Cyber Edu</h1>
                        <img src={spywareIcon}></img>
                    </div>
                    <div className="LearnIcon">
                        <Tippy 
                        theme="translucent" 
                        followCursor={true} 
                        plugins={[followCursor]} 
                        placement="top" 
                        animation="scale" 
                        content={<Tooltip title="Learn" content="Learn more about various topics in Cyber Crime and how to effectively avoid or mitigate them."/>}>
                            <img src={mapIcon} />
                        </Tippy>
                    </div>
                    <div className="ExploreIcon">
                    <Tippy 
                        theme="translucent" 
                        followCursor={true} 
                        plugins={[followCursor]} 
                        placement="top" 
                        animation="scale" 
                        content={<Tooltip title="Explore" content="Get connected with various Cybersecurity Associations based on location or affiliation."/>}>
                            <img src={binocularIcon} />
                        </Tippy>
                        
                    </div>
                    <div className="ToolsIcon">
                        <Tippy 
                        theme="translucent" 
                        followCursor={true} 
                        plugins={[followCursor]} 
                        placement="top" 
                        animation="scale" 
                        content={<Tooltip title="Tools" content="Explore useful tools that will enhance the cybersecurity of your system"/>}>
                            <img src={hammerIcon} />
                        </Tippy>
                    </div>
                    <div className="DiscoverIcon">
                    <Tippy 
                        theme="translucent" 
                        followCursor={true} 
                        plugins={[followCursor]} 
                        placement="top" 
                        animation="scale" 
                        content={<Tooltip title="Live Feed" content="View cybercrime in realtime or report your own cyber crime to the site."/>}>
                            <img src={folderIcon} />
                        </Tippy>
                    </div> 
                </div>
                <Footer />
                <ParticleJS/>
            </div>
        )
    }
}
