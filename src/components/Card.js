import React from 'react'

/*STYLE IMPORTS*/
import '../styles/Card.css'

export default function Card(props) {
    return (
        <div className="card-wrapper">
            <h3 className="card-title">{ props.title }</h3>
            <a href={ props.link } className="card-image-wrapper">
                <img src={props.img} className="card-image" />
            </a>
            <div className="card-description-wrapper">
                <p className="card-description">{ props.description }</p>
            </div>
        </div>
    )
}


