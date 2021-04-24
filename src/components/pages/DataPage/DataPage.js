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
import EnergyGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Energy.PNG'
import EntertainmentGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Entertainment & Recreation.PNG'
import FinancialGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Financial Services.PNG'
import FinTechGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Fintech.PNG'
import FoodGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Food Services.PNG'
import InfoGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Information & Communication.PNG'
import ManufacturingGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Manufacturing.PNG'
import ScienceGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Science & Technology.png'
import TransportationGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Transportation.PNG'
import RetailGraph from '../../../assets/DataAssets/graphs/Distribution of Attacks Among Wholesale & Retail.PNG'

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
        duration: 0.1,
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
                        <div id="data-page-content-description" style={{textAlign:"center", padding:"15% 0"}}>
                            { DataText['kaspersky-map'] }
                        </div>
                    </motion.div>
                    <motion.div>
                        <DataPageSection type={"Education"} title={"Cybercrime in the Education Industry"} img={EducationGraph} whatis={DataText.education.whatis} whatwere={DataText.education.whatwere} />
                        <DataPageSection type={"Energy"} title={"Cybercrime in the Energy Industry"} img={EnergyGraph} whatis={DataText.energy.whatis} whatwere={DataText.energy.whatwere} />
                        <DataPageSection type={"Entertainment and Recreation"} title={"Cybercrime in the Entertainment and Recreation Industry"} img={EntertainmentGraph} whatis={DataText.entertainment.whatis} whatwere={DataText.entertainment.whatwere} />
                        <DataPageSection type={"Financial Services"} title={"Cybercrime in the Financial Services Industry"} img={FinancialGraph} whatis={DataText.financial.whatis} whatwere={DataText.financial.whatwere} />
                        <DataPageSection type={"FinTech"} title={"Cybercrime in the FinTech Industry"} img={FinTechGraph} whatis={DataText.fintech.whatis} whatwere={DataText.fintech.whatwere} />
                        <DataPageSection type={"Food"} title={"Cybercrime in the Food Industry"} img={FoodGraph} whatis={DataText.food.whatis} whatwere={DataText.food.whatwere} />
                        <DataPageSection type={"Healthcare"} title={"Cybercrime in the Healthcare Industry"} img={HealthcareGraph} whatis={DataText.healthcare.whatis} whatwere={DataText.healthcare.whatwere} />
                        <DataPageSection type={"Information and Communication"} title={"Cybercrime in the Information and Communication Industry"} img={InfoGraph} whatis={DataText.info.whatis} whatwere={DataText.info.whatwere} />
                        <DataPageSection type={"Manufacturing"} title={"Cybercrime in the Manufacturing Industry"} img={ManufacturingGraph} whatis={DataText.manufacturing.whatis} whatwere={DataText.manufacturing.whatwere} />
                        <DataPageSection type={"Multiple Industries"} title={"Cybercrime Among Multiple Industries"} img={IndustriesGraph} whatis={DataText.multi.whatis} whatwere={DataText.multi.whatwere} />
                        <DataPageSection type={"Individuals"} title={"Cybercrime Among Individuals"} img={IndividualsGraph} whatis={DataText.individuals.whatis} whatwere={DataText.individuals.whatwere}/>

                        <DataPageSection type={"Public Services"} title={"Cybercrime in the Public Services Industry"} img={ServicesGraph} whatis={DataText.public.whatis} whatwere={DataText.public.whatwere} />
                        <DataPageSection type={"Science and Technology"} title={"Cybercrime in the Science and Technology Industry"} img={ScienceGraph} whatis={DataText.science.whatis} whatwere={DataText.science.whatwere} />

                        <DataPageSection type={"Transportation"} title={"Cybercrime in the Transportation Industry"} img={TransportationGraph} whatis={DataText.transportation.whatis} whatwere={DataText.transportation.whatwere} />
                        <DataPageSection type={"Wholesale and Retail"} title={"Cybercrime in the Wholesale and Reatil Industry"} img={RetailGraph} whatis={DataText.retail.whatis} whatwere={DataText.retail.whatwere}/>
                    </motion.div>
                </div>
                
                <Footer />
                <ParticleJS />
            </motion.div>
        )
    }
}
