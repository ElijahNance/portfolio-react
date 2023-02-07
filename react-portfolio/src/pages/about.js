import React from "react";
import avatar from '../../public/avatar.jpg'


function About() {
    return (
        <div>
            <h2>
                About Me
            </h2>
            <img src={avatar} alt="avatar" />
            <p>This is where my about me stuff will go!!</p>
        </div>
    )
}

export default About;