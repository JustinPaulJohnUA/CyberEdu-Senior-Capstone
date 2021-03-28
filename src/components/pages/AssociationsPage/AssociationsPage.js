/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React, { useState, useEffect } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import SearchField from "react-search-field";
import { motion } from 'framer-motion'

/*COMPONENT IMPORTS */
import Footer from '../../../components/navigation/footer/Footer.js';
import Header from '../../../components/navigation/header/Header.js';
import Card from '../../cards/Card.js';
import ParticleJS from '../../../components/effects/ParticleJS.js';

/*ASSETS IMPORTS*/
import binocularIcon from '../../../assets/binocular.svg';
import text from '../../../assets/AssociationsAssets/text/AssociationsText.json'

/* STYLE IMPORTS*/
import './AssociationsPage.css';

/*
    Description:
        - Describes the layout and functionality of the Associations Page 

    States:
        - searchInput (string): Represents the user's search input 
        - currentAssociations (list of <Card /> objects): Represents a list of the currently-displayed <Card /> objects based on user's input

    Effects:
        - After the searchInput state has changed, the showSearchResults() function will be called

    showSearchResults():
        - Responsible for setting what <Card /> objects should be displayed based on user search input
        - If the search bar has no input in it, currentAssociations will be set equal to the entire Associations <Card /> list
        - If the search bar contains at least character, that character (or string of characters) will be compared against every
          Association Card's title-property. 
        - If the search-string can be found within an Association Card's title-property, it will be added to a list called newCurrentAssociations
        - Once all Association Card's title-properties have been compared, the currentAssociations state will be set to newCurrentAssociations

    Functionality:
        - Users will begin typing into the search bar, where calls to showSearchResults() will be made
        - As the user types, the page will update based on the results from showSearchResults()
    
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
        opacity: 0,
        transition: {
            duration: 0.7,
            ease: [0.87, 0, 0.13, 1],
            staggerChildren: 0.2
        }
    }
}

export default function AssociationsPage() {
    var [searchInput, setSearchInput] = useState('');
    var [currentAssociations, setCurrentAssociations] = useState([])

    useEffect(() => {
        showSearchResults()
    }, [searchInput])

    var associationsList = [
        <Card
            title={text.ftc.title}
            img={text.ftc.img}
            link={text.ftc.link}
            description={ text.ftc.description}/>,
        <Card
            title={text.cisa.title}
            img={text.cisa.img}
            link={text.cisa.link}
            description={text.cisa.description}
        />,
        <Card
            title={text.ic3.title}
            img={text.ic3.img}
            link={text.ic3.link}
            description={text.ic3.description}
        />,
        <Card
            title={text.doj.title}
            img={text.doj.img}
            link={text.doj.link}
            description={text.doj.description}/>,
        <Card
            title={text.cis.title}
            img={text.cis.img}
            link={text.cis.link}
            description={text.cis.description}/>,
        <Card
            title={text.sans.title}
            img={text.sans.img}
            link={text.sans.link}
            description={text.sans.description} />,
        <Card
            title={text.issa.title}
            img={text.issa.img}
            link={text.issa.link}
            description={text.issa.description} />,
        <Card
            title={text.csa.title}
            img={text.csa.img}
            link={text.csa.link}
            description={text.csa.description} />,
        <Card
            title={text.hisac.title}
            img={text.hisac.img}
            link={text.hisac.link}
            description={text.hisac.description} />,
        <Card
            title={text.fsisac.title}
            img={text.fsisac.img}
            link={text.fsisac.link}
            description={text.fsisac.description} />,
        <Card
            title={text.nist.title}
            img={text.nist.img}
            link={text.nist.link}
            description={text.nist.description} />,
        <Card
            title={text.isaca.title}
            img={text.isaca.img}
            link={text.isaca.link}
            description={text.isaca.description} />,
        <Card
            title={text.isc2.title}
            img={text.isc2.img}
            link={text.isc2.link}
            description={text.isc2.description} />,
        <Card
            title={text.centerfor.title}
            img={text.centerfor.img}
            link={text.centerfor.link}
            description={text.centerfor.description} />,
        <Card
            title={text.cyan.title}
            img={text.cyan.img}
            link={text.cyan.link}
            description={text.cyan.description} />,
        <Card
            title={text.aisp.title}
            img={text.aisp.img}
            link={text.aisp.link}
            description={text.aisp.description} />,
        <Card
            title={text.csia.title}
            img={text.csia.img}
            link={text.csia.link}
            description={text.csia.description} />,
        <Card
            title={text.isao.title}
            img={text.isao.img}
            link={text.isao.link}
            description={text.isao.description} />,
        <Card
            title={text.owasp.title}
            img={text.owasp.img}
            link={text.owasp.link}
            description={text.owasp.description} />,
        <Card
            title={text.isf.title}
            img={text.isf.img}
            link={text.isf.link}
            description={text.isf.description}/>
    ]

    var showSearchResults = () => {
        if (searchInput === '') {
            setCurrentAssociations(associationsList);
        } else {
            var newCurrentAssociations = []
            for (var i = 0; i < associationsList.length; i++) {
                var title = associationsList[i].props.title.toLowerCase()
                if (title.includes(searchInput)) {
                    newCurrentAssociations.push(associationsList[i])
                }
            }
            setCurrentAssociations(newCurrentAssociations)
        }
    }

    return (
            <motion.div
                variants={wrapperAnimation}
                animate="show"
                initial="initial"
                exit="exit">
                <Header />
                <motion.div className="associations-page-wrapper">
                    <div className="associations-page-title-wrapper">
                        <img id="associations-page-title-icon" src={binocularIcon} />
                        <div>Cybersecurity Associations</div>
                    </div>

                    <SearchField onChange={ (e) => setSearchInput(e) } className="associations-search" placeholder="Search..."/>

                    <motion.div className="associations-page-content-wrapper">
                        {[...currentAssociations]}
                    </motion.div>
                </motion.div>
                <Footer />
                <ParticleJS />
            </motion.div>
    )
}



