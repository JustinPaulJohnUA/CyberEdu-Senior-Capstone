import React from 'react'

import './DataPageSection.css'

export default function DataPageSection(props) {
    return (
        <div className="data-page-content">
            <h2 className="data-page-content-title">{ props.title }</h2>
            <div className="data-page-content-graph">
               <img src={props.img} />
            </div>
            <div id="data-page-content-description">
                { props.description}
            </div>
        </div>
    )
}
