/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React, { useState, useRef } from 'react'

/*STYLE IMPORTS*/
import './Accordion.css';

/*
    Description: 
        - Defines the layout and functionality of the accordion menus that are found in each learning page. 

    Props:
        - props should be comprised of an object. 
        - This object will contain the key-value pairs that point to the CSS ID of each learning topic's description, example, and mitigation divs 

    States:
        - active (string): represents the className "active"
        - height (string): represents the maximum height of the corresponding accordion-topic's div 

    Refs:
        - content: hooks into the div that follows each accordion button, so we can get access to its CSS properties

    toggleAccordion():
        - Responsible for setting the states of this component
        - Setting the states of this component will force the page to update in response to what was set 
        - the "active" state will change to a string-value of either "active" or "" (empty) based 
          on a ternary operator that compares what string the "active" state is already set to. 
        - the "height" state will change to a string-value of either "0px" or a string-representation of the accordion's maximum scroll-height 
          based on 

    Functionality:
        - When the user clicks one of the accordion's buttons, the function toggleAccordion() is called 
        - The clicked-on button's className will be set to whatever the active state is (either "active" or ""). 
        - The div's css-scroll- height-value that is underneath the clicked-on button will be set to either "0px" 
          (effectively hiding the content) or its maximum available scroll height (effectively revealing the content)
        - scroll-height is used in place of height in order to give it a "transition" animation when clicked

*/

export default function Accordion(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
    }

    return (
        <div
            className="accordion-wrapper">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>{props.title}</button>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="panel">
                <a href={props.anchors.description}>Description</a>
                <a href={props.anchors.example}>Example</a>
                <a href={props.anchors.mitigation}>Mitigation</a>
            </div>
        </div>
    )
}
