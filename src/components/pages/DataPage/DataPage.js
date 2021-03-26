/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React, { Component } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from '../../effects/ParticleJS.js';
import { motion } from 'framer-motion'

/*COMPONENT IMPORTS */
import Footer from '../../navigation/footer/Footer.js';
import Header from '../../navigation/header/Header.js';
import DataPageSection from './DataPageSection.js';

/* STYLE IMPORTS*/
import './DataPage.css'

/*ASSET IMPORTS*/
import DataText from '../../../assets/DataAssets/text/DataText.json';
import EducationGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Education.png'
import HealthcareGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Healthcare.png'
import IndividualsGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Individuals.png'
import IndustriesGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Multiple Industries.png'
import ServicesGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Public Services.png'
import DistributionGraph from '../../../assets/DataAssets/graphs/Distribution_of_Cybercrimes.png'
import TargetsGraph from '../../../assets/DataAssets/graphs/Distribution_of_Targets.png'


/* 
    Description:
        - Describes the layout and makeup of the Data Page
        - Contains an interactive iframe to https://threatmap.bitdefender.com/
        - Made up of <DataPageSection /> objects. 
*/

const wrapperAnimation = {
    initial: {
        opacity: 0,
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.2
        }
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.2
        }
    },
    exit: {
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.2
        }
    }
}

const sectionAnimations = {
    initial: { opacity: 0, x: -1000 },
    show: {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
            staggerChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        x: -1000,
        duration: 0.7,
        ease: [0.87, 0, 0.13, 1],
        transition: {
            type: "spring",
            stiffness: 25,
        }
    }
}



export default class DataPage extends Component {
    render() {
        return (
            <motion.div
                variants={wrapperAnimation}
                animate="show"
                initial="initial"
                exit="exit">
                <Header />
                <div id="data-page-wrapper">
                    <motion.div
                        className="data-page-content"
                        variants={sectionAnimations}>
                        <h2 className="data-page-content-title">Live Botnet Traffic</h2>
                        <div className="data-page-content-graph">
                            <iframe src="https://threatmap.bitdefender.com/" style={{ border:"0px #ffffff none;"}} name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" height="400px" width="80%" allowfullscreen></iframe>
                        </div>
                        <div id="data-page-content-description">
                            { DataText['kaspersky-map'] }
                        </div>
                    </motion.div>
                    <motion.div>
                        <DataPageSection title={"Cybercrime in Education"} img={EducationGraph} description={ DataText.education.description}/>
                        <DataPageSection title={"Cybercrime in Healthcare"} img={HealthcareGraph} description={ DataText.healthcare.description}/>
                        <DataPageSection title={"Cybercrime Among Individuals"} img={IndividualsGraph} description={ DataText.individuals.description}/>
                        <DataPageSection title={"Cybercrime Among Mutliple Industries"} img={IndustriesGraph} description={DataText.industries.description} />
                        <DataPageSection title={"Total Distribution of Cybercrime"} img={ServicesGraph} description={ DataText.public.description}/>
                        <DataPageSection title={"Total Distribution of Targets"} img={DistributionGraph} description={DataText.targets.description} />
                        <DataPageSection title={"Total Distribution of Targets"} img={TargetsGraph} description={ DataText.targets.description}/>
                    </motion.div>
                </div>
                
                <Footer />
                <ParticleJS />
            </motion.div>
        )
    }
}
