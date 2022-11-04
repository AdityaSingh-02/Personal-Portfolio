import React from 'react';
import Home from '../components/Home';
import SocialConnections from "../components/SocialConnections";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Technologies from "../components/Technologies";

function Combine() {
    return (
        <>
            <Home />
            <SocialConnections />
            <AboutMe />
            <Projects />
            <Technologies />
        </>
    )
}

export default Combine;