import React, { useState, useEffect } from 'react'

/*LIBRARY COMPONENT IMPORTS*/
import SearchField from "react-search-field";

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
            <div>
                <Header />
                <div className="associations-page-wrapper">
                    <div className="associations-page-title-wrapper">
                        <img id="associations-page-title-icon" src={binocularIcon} />
                        <div>Cybersecurity Associations</div>
                    </div>

                <SearchField onChange={ (e) => setSearchInput(e) } className="associations-search" placeholder="Search..."/>

                    <div className="associations-page-content-wrapper">
                    {[...currentAssociations]}
                    </div>
                </div>
                <Footer />
                <ParticleJS />
            </div>
    )
}



