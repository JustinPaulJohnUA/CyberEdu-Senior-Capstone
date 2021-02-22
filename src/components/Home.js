import React, { Component } from 'react'
import ParticleJS from './ParticleJS.js';

import '../styles/Home.css';
import spywareIcon from '../assets/spyware.svg';
import hammerIcon from '../assets/hammer.png';
import mapIcon from '../assets/map.svg';
import binocularIcon from '../assets/binocular.png';
import folderIcon from '../assets/folder.png';

import Footer from '../components/Footer.js';


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
                        <img src={mapIcon} />
                    </div>
                    <div className="ExploreIcon">
                        <img src={binocularIcon} />
                    </div>
                    <div className="ToolsIcon">
                        <img src={hammerIcon} />
                    </div>
                    <div className="DiscoverIcon">
                        <img src={folderIcon} />
                    </div>

                    
                </div>
                <Footer />
                <ParticleJS/>
            </div>
        )
    }
}
