/*
    Author: Justin John 
    Project: ISTA 498 Capstone
    Date: Jan 2021 - May 2021
*/

import React, { Component } from 'react';

/* LIBRARY COMPONENT IMPORTS */
import Particles from 'react-particles-js';

/*
    Description: 
        - ParticleJS is a lightweight, open-source Javascript Library for creating particle animations 
        - You can learn more / download ParticleJS here: https://github.com/VincentGarreau/particles.js/
        - Our website uses react-particles-js, an NPM package that takes the functionality of "tsParticles" 
          (a fork of ParticlesJS) and converts it into a React component for ease-of-use in react projects
        - You can learn more about / download react-particles-js here: https://www.npmjs.com/package/react-particles-js

        - The ParticlesJS component takes an object of paramaters (as React props) that define the look and functionality 
          of the particles 
        - Most of our particle's configuration comes from one of ParticleJS' example pages, which you can find 
          here: https://vincentgarreau.com/particles.js/#nasa
        - The functionality has has its mouse interactivity stripped and the movement speed of the particles has been slowed down.
          to make them less distracting
*/
export default class ParticleJS extends Component {
    render() {
        return (
                <Particles 
                id="particles-js" 
                style={{width: "100%", height: "100vh"}}
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
