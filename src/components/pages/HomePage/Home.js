import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';
import { Link } from 'react-router-dom';

/*STYLE IMPORTS*/
import './Home.css';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/backdrop.css';
import 'tippy.js/animations/shift-away.css';
import 'tippy.js/themes/translucent.css';

/*COMPONENT IMPORTS */
import Footer from '../../navigation/footer/Footer.js';
import Tooltip from '../../tooltips/Tooltip.js'

/*ASSET IMPORTS */
import spywareIcon from '../../../assets/spyware.svg';
import hammerIcon from '../../../assets/hammer.png';
import mapIcon from '../../../assets/map.svg';
import binocularIcon from '../../../assets/binocular.svg';
import folderIcon from '../../../assets/folder.png';


export default class Home extends Component {
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
                            content={<Tooltip title="Learn" content="Learn more about various topics in Cyber Crime and how to effectively avoid or mitigate them." />}>
                            <Link to="/learn">
                                <img src={mapIcon} />
                            </Link>
                            
                        </Tippy>
                    </div>
                    <div className="ExploreIcon">
                    <Tippy 
                        theme="translucent" 
                        followCursor={true} 
                        plugins={[followCursor]} 
                        placement="top" 
                        animation="scale" 
                            content={<Tooltip title="Explore" content="Get connected with various Cybersecurity Associations based on location or affiliation." />}>
                            <Link to="/associations">
                                <img src={binocularIcon} />
                            </Link>
                            
                        </Tippy>
                        
                    </div>
                    <div className="ToolsIcon">
                        <Tippy 
                        theme="translucent" 
                        followCursor={true} 
                        plugins={[followCursor]} 
                        placement="top" 
                        animation="scale" 
                            content={<Tooltip title="Tools" content="Explore useful tools that will enhance the cybersecurity of your system" />}>
                            <Link to="/tools">
                                <img src={hammerIcon} />
                            </Link>
                            
                        </Tippy>
                    </div>
                    <div className="DiscoverIcon">
                    <Tippy 
                        theme="translucent" 
                        followCursor={true} 
                        plugins={[followCursor]} 
                        placement="top" 
                        animation="scale" 
                            content={<Tooltip title="Live Feed" content="View cybercrime in realtime or report your own cyber crime to the site." />}>
                            <Link to="/data">
                                <img src={folderIcon} />
                            </Link>
                        </Tippy>
                    </div> 
                </div>
                <Footer />
                <ParticleJS/>
            </div>
        )
    }
}
