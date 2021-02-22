import React, { Component } from 'react';
import Particles from 'react-particles-js';

export default class ParticleJS extends Component {
    render() {
        return (
                <Particles 
                id="particles-js" 
                style={{width: "100%", height: "100%"}}
                params={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: true,
                                value_area: 800
                            }
                        },
                        color: {
                            value: "#ffffff"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000"
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0,
                                sync: false
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 4, 
                                size_min: 0.3,
                                sync: false
                            }
                        },
                        lineLinked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1
                        },
                        move: {
                            enable: true,
                            speed: 1, 
                            direction: "none",
                            random: true,
                            straight: false, 
                            outMode: "out",
                            bounce: false,
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 600
                            }
                        }
                    }
                }} />
        )
    }
}
