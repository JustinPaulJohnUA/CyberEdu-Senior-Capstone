/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React from 'react'

import { motion } from 'framer-motion'

/*STYLE IMPORTS*/
import './Card.css'

/*
    Description:
        - Describes the makeup of a custom card component
        - A card is made up of a Title, a linked-image, and a description (in that order)

    Props: 
        - props should be comprised of a title, an image URL, a website link, and a description 
        - title (string): title of the card 
        - image (URL string): URL should point to an image from the internet. The image should be related to the logo of the props.link website
        - link (URL string): URL should point to a cyber-security related website
        - description (string): this string should describe the what the purpose of what props.link redirects to 
*/

const cardAnimation = {
    hover: {
        scale: 1.2
    }
}



export default function Card(props) {
    return (
        <motion.div
            className="card-wrapper"
            whileHover="hover"
            variants={cardAnimation}>
            <h3 className="card-title">{ props.title }</h3>
            <a href={ props.link } target="_blank" className="card-image-wrapper">
                <img src={props.img} className="card-image" />
            </a>
            <div className="card-description-wrapper">
                <p className="card-description">{ props.description }</p>
            </div>
        </motion.div>
    )
}


