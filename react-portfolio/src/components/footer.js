import React from "react";

//Styling for the footer
const styles = {
    a: {
        margin: 60,
        
    }
}

const Footer = () => {
    return (
    <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <footer>
            <a href="https://www.github.com/ElijahNance" style={styles.a} target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/elijah-nance-14a090258" style={styles.a} target="_blank">LinkedIn</a>
            <a href="https://www.twitter.com" style={styles.a} target="_blank">Twitter</a>
        </footer>
    </div>
    )
};

export default Footer;