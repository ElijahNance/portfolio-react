import React from "react";
import resume from '../resume1.png';
import resumeCont from '../resume2png.png';


// Styling Header
const styles = {
    h2: {
        margin: 20
    }
}

function Resume() {
    return (
        <div>
            <div>
                <h2 style={styles.h2}>
                    Resume

                </h2>
            </div>
            <div>
            <a href="https://docs.google.com/document/d/10_V7VW_Bq_g6dmhES4EKinHhyl0ifoWPBdnW9z7mP1g/edit?usp=sharing" target="_blank">Downloadable Link</a>
            </div>
            <img src={resume} alt='resume1' />
            <img src={resumeCont} alt='resume2' />
            
        </div>
    )
}

export default Resume;