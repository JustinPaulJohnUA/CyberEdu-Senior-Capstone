/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React from 'react'

import { motion } from 'framer-motion'

/*STYLE IMPORTS*/
import './DataPageSection.css'


/* 
    Description:
        - Describes the layout and makeup of a DataPageSection component
        - This is to be used inside of the DataPage component 
        - Made up of a Title, an image (graph) and a description of the image

    Props:
        - props are made up of a title (string), image (png or jpg), and a description (string)
*/

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
export default function DataPageSection(props) {
    return (
        <motion.div className="data-page-content" variants={sectionAnimations}>
            <h2 className="data-page-content-title">{ props.title }</h2>
            <div className="data-page-content-graph">
                <a href={props.img} target="_blank">
                    <motion.img
                        whileHover={{
                        scale: 1.2
                    }}
                        src={props.img} />
                </a>
            </div>
            <div id="data-page-content-description">
                <h3>What is { props.type }?</h3>
                {props.whatis}
                <h3>What were a majority of the attacks?</h3>
                <div dangerouslySetInnerHTML={{__html:props.whatwere}}></div>
            </div>
        </motion.div>
    )
}
