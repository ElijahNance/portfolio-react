import {React, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import About from '../pages/about';
import Contact from '../pages/contact';
import Portfolio from '../pages/portfolio';
import Resume from '../pages/resume';

//Styling for the NavBar
const styles = {
    li: {
        display: 'inline-flex',
        margin: 60,
        fontSize: 24,
        
    }

};

const Navigation = () => {

    //Sets load page to About Me page
    const [pageToRender, setPageToRender] = useState('about');
    


    
    return (
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setPageToRender('about')}>About Me</Nav.Link>
            <Nav.Link onClick={() => setPageToRender('portfolio')}>Portfolio</Nav.Link>
            <Nav.Link onClick={() => setPageToRender('resume')}>Resume</Nav.Link>
            <Nav.Link onClick={() => setPageToRender('contact')}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* Conditionally renders components based on the value of state */} 
        <div className='container'>
          {pageToRender === 'about' &&
          <About />
          }
          {pageToRender === 'contact' &&
          <Contact />
          }
          {pageToRender === 'portfolio' &&
          <Portfolio />
          }
          {pageToRender === 'resume' &&
          <Resume />
          }
        </div>
    </div>

    )

};

export default Navigation