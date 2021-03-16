import React, { Component, useState, useRef } from 'react'

/*STYLE IMPORTS*/
import '../../styles/Accordion.css';

export default function Accordion(props) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
        );
        console.log(content.current.scrollHeight);
    }

    console.log(props.anchors.d)
    return (
        <div className="accordion-wrapper">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>{props.title}</button>
            <div ref={content} style={{ maxHeight: `${setHeight}` }} className="panel">
                <a href={props.anchors.description}>Description</a>
                <a href={props.anchors.example}>Example</a>
                <a href={props.anchors.mitigation}>Mitigation</a>
            </div>
        </div>
    )
}
