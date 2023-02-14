import React from "react";

//Button Styling
const styles = {
    button: {
        margin: 60
    }
}

function Contact() {
    return (
        <div className='container'>
            <h2>Contact</h2>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style={styles.button}>Submit</button>
        </div>
    )
}

export default Contact;