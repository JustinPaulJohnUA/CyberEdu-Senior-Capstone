import React, { Component } from 'react'
/*LIBRARY COMPONENT IMPORTS*/
import ParticleJS from './ParticleJS.js';

/*COMPONENT IMPORTS */
import Footer from './Footer.js';
import Header from './navigation/Header.js';
import Card from '../components/Card.js';
import Tooltip from './tooltips/Tooltip.js';
import Tippy from '@tippyjs/react';
import { followCursor } from 'tippy.js';

/*ASSETS IMPORTS*/
import binocularIcon from '../assets/binocular.svg';

/* STYLE IMPORTS*/
import '../styles/AssociationsPage.css';

export default class AssociationsPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="associations-page-wrapper">
                    <div className="associations-page-title-wrapper">
                        <img id="associations-page-title-icon" src={binocularIcon} />
                        <div>Cybersecurity Associations</div>
                    </div>
                    <div className="associations-page-content-wrapper">
                        <Card
                            title={"FTC Consumer Info"}
                            img={"https://www.consumer.ftc.gov/sites/www.consumer.ftc.gov/files/default_images/ftc_social_share_default_en.jpg"}
                            link={"https://www.consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams"}
                            description={ "The US Federal Trade Commission has some excellent tips on how to report phishing scams and identitiy theft." }/>
                        <Card
                            title={"CISA"}
                            img={"https://images.squarespace-cdn.com/content/59bff1652994cad96d3bf826/1570732548531-EIWHLM3Z6DYLSDRKIG4J/medical-device-cybersecurity-3-alerts-issued-showcase_image-6-a-13046.jpg?content-type=image%2Fjpeg"}
                            link={"https://us-cert.cisa.gov/ncas/tips/ST04-014"}
                            description={"The US Cybersecurity and Infrastructure Security Agency (CISA) report cyber crime traffic on a daily basis, while also providing an abundance of tips on how to mitigate various cybercrimes"}
                        />
                        <Card
                            title={"IC3"}
                            img={"https://130e178e8f8ba617604b-8aedd782b7d22cfe0d1146da69a52436.ssl.cf1.rackcdn.com/fbi-sees-internet-enabled-crime-losses-hit-13-billion-showcase_image-7-a-10033.jpg"}
                            link={"https://www.ic3.gov/Home/ComplaintChoice/default.aspx"}
                            description={"The FBI's Internet Crime Complaint Center (IC3) provides information on some of the more dangerous internet crimes - inlcuding terrorist, threats, human-trafficking, etc"}
                        />
                        <Card
                            title={"DOJ"}
                            img={"https://i.ytimg.com/vi/9zG-wcRj5G0/maxresdefault.jpg"}
                            link={"https://www.justice.gov/criminal-ccips/reporting-computer-internet-related-or-intellectual-property-crime"}
                            description={"The US Department of Justice (DOJ) provides reports on hacking, fraud, and intellectual-property related crimes"}/>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <Footer />
                <ParticleJS />
            </div>
        )
    }
}
