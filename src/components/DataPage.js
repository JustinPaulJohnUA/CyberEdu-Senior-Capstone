import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from './ParticleJS.js';

/*COMPONENT IMPORTS */
import Footer from './Footer.js';
import Header from './navigation/Header.js';
import DataPageSection from '../components/DataPageSection.js';
import Tooltip from './tooltips/Tooltip.js';
import Tippy from '@tippyjs/react';
import {followCursor} from 'tippy.js';

/* STYLE IMPORTS*/
import '../styles/DataPage.css'

/*ASSET IMPORTS*/
import DataText from '../assets/DataAssets/text/DataText.json';
import EducationGraph from '../assets/DataAssets/graphs/Distribution of Attacks Among Education.png'
import HealthcareGraph from '../assets/DataAssets/graphs/Distribution of Attacks Among Healthcare.png'
import IndividualsGraph from '../assets/DataAssets/graphs/Distribution of Attacks Among Individuals.png'
import IndustriesGraph from '../assets/DataAssets/graphs/Distribution of Attacks Among Multiple Industries.png'
import ServicesGraph from '../assets/DataAssets/graphs/Distribution of Attacks Among Public Services.png'
import DistributionGraph from '../assets/DataAssets/graphs/Distribution_of_Cybercrimes.png'
import TargetsGraph from '../assets/DataAssets/graphs/Distribution_of_Targets.png'

export default class DataPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="data-page-wrapper">
                    <div className="data-page-content">
                        <h2 className="data-page-content-title">Live Botnet Traffic</h2>
                        <div className="data-page-content-graph">
                            <iframe width="80%" height="620" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0"></iframe>
                        </div>
                        <div id="data-page-content-description">
                            { DataText['kaspersky-map'] }
                        </div>
                    </div>
                    <DataPageSection title={"Cybercrime in Education"} img={EducationGraph} description={ DataText.education.description}/>
                    <DataPageSection title={"Cybercrime in Healthcare"} img={HealthcareGraph} description={ DataText.healthcare.description}/>
                    <DataPageSection title={"Cybercrime Among Individuals"} img={IndividualsGraph} description={ DataText.individuals.description}/>
                    <DataPageSection title={"Cybercrime Among Mutliple Industries"} img={IndustriesGraph} description={DataText.industries.description} />
                    <DataPageSection title={"Total Distribution of Cybercrime"} img={ServicesGraph} description={ DataText.public.description}/>
                    <DataPageSection title={"Total Distribution of Targets"} img={DistributionGraph} description={ DataText.targets.description}/>
                </div>
                
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
