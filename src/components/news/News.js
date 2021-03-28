import React, { useState, useEffect } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Parser from 'rss-parser'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import  './News.css'

// const cveAPI = "https://cve.circl.lu/api/last/10"
// const cveAPI = "https://cors-anywhere.herokuapp.com/https://cve.circl.lu/api/last/10"
const cveAPI="https://secret-ocean-49799.herokuapp.com/https://cve.circl.lu/api/last/10"
// const cveAPI = "https://cors-proxy.htmldriven.com/?url=https://cve.circl.lu/api/last/10"

const selectOptions = [
    { value: cveAPI, label: "CVE Data" },
    { value: "vulnerabilitiesFeed", label: "Threat Post - Vulnerabilities" },
    { value: "privacyFeed", label: "Threat Post - Privacy" },
    { value: "mobileSecurityFeed", label: "Threat Post - Mobile Security" },
    { value: "iotFeed", label: "Threat Post - IoT" },
    { value: "hacksFeed", label: "Threat Post - Hacks" },
    { value: "governmentFeed", label: "Threat Post - Government" },
    { value: "cryptoFeed", label: "Threat Post - Cryptography" },
    { value: "criticalInfraFeed", label: "Threat Post - Critical Infrastructure" },
    { value: "cloudFeed", label: "Threat Post - Cloud Security" },
]

const threatPostRSS = {
    "vulnerabilitiesFeed": "https://threatpost.com/category/vulnerabilities/feed/",
    "privacyFeed": "https://threatpost.com/category/privacy/feed/",
    "mobileSecurityFeed": "https://threatpost.com/category/mobile-security/feed/",
    "iotFeed": "https://threatpost.com/category/malware/feed/",
    "hacksFeed": "https://threatpost.com/category/hacks/feed/",
    "governmentFeed": "https://threatpost.com/category/government/feed/",
    "cryptoFeed": "https://threatpost.com/category/cryptography/feed/",
    "criticalInfraFeed": "https://threatpost.com/category/critical-infrastructure/feed/",
    "cloudFeed": "https://threatpost.com/category/cloud-security/feed/"
}




export default function News() {
    const [newsList, setNewsList] = useState([])
    
    useEffect(async () => {
        handleNews({ value: cveAPI, label: "CVE Data" })
    }, [])
    
    function handleNews(e) {
        const selectionLabel = e.label
        const selectionValue = e.value
        var response;
        var newsList;
        if (selectionLabel === "CVE Data") {
            response = handleCVE(selectionValue)
            newsList = processCVEResponse(response)
        } else {
            response = handleThreatPost(selectionValue)
            newsList = processThreatPostResponse(response)
        }
        newsList.then( data => setNewsList(data) )
    }

    async function handleCVE(URL) {
        try {
            const response = await await fetch(URL, {
                method: "GET",
                mode:"cors",
                headers: new Headers({
                    "Accept": "*/plain"
                })
            })
            return response.json()
        } catch (err) {
            console.log(err)
            return 'err'
        }
    }

    async function handleThreatPost(feedType) {
        let parser = new Parser();
        const feed = await parser.parseURL(threatPostRSS[feedType])
        return feed.items
    }


    function processCVEResponse(res) {
        console.log(res)
        try {
            return res.then(data => {
                return data.map(newsItem => {
                    return <div className="news-wrapper" key={newsItem.id}><a id='news-link'href={newsItem.references[0]} target="_blank">CVE: {newsItem.id}</a>: {newsItem.summary}</div>
                })
            })
        } catch (err) {
            return ["CVE API might be throttled due to too many requests or the server being down. Please try again later."]
        }
    }

    function processThreatPostResponse(res) {
        return res.then(data => {
            return data.map(newsItem => {
                return <div className="news-wrapper"><a id='news-link' href={newsItem.link} target="_blank">{newsItem.title}</a> - {newsItem.pubDate}</div>
            })
        })
    }

    return (
        <div id="news-feed-wrapper">
            <Carousel
                dynamicHeight={false}
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
                renderIndicator={false}
                infiniteLoop={true}
                interval={5000}
                width="90%">
                {[...newsList]}
            </Carousel>

            <div>
                <h3 style={{margin: "0", color: "white", textAlign: "center"}}>Select News Feed</h3>
                <Dropdown options={selectOptions} value={selectOptions[0]} onChange={ (e) => handleNews(e) } className="dropdown"/>
            </div>
            
        </div>

    )
}
