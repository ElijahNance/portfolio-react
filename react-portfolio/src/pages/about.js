import React from "react";
import avatar from '../avatar.jpg'


// Styling for the Paragraph
const styles = {
    p: {
        margin: 32,
        fontSize: 24
    }
}


function About() {
    return (
    <div>
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
            <h2>
                About Me
            </h2>
        </div>
            <img src={avatar} class="rounded mx-auto" alt="avatar" />
            <p style={styles.p} class='text-center'>Hi there, and welcome to my portfolio! My name is Elijah Nance and I am a 23 year old full stack web development student based out of Charlotte, NC. This happens to be my second "bootcamp" as prior to my enrollment I spent 5 years in the Marine Corps as an Infantry Non-Commissioned Officer. I spent a lot of time overseas seeing much of the world but decided I wanted a change. I have found a deep appreciation and passion for development and can't wait to see where this next journey takes me!</p>
    </div>
    )
}

export default About;