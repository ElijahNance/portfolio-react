import {React, useState} from "react";
import About from '../pages/about';
import Contact from '../pages/contact';
import Portfolio from '../pages/portfolio';
import Resume from '../pages/resume';

const styles = {
    li: {
        display: 'inline-flex',
        margin: 60,
        fontSize: 24,
        
    }

};

const Navbar = () => {

    const [pageToRender, setPageToRender] = useState('about')
    //const pageToRender = 'portfolio'


    //const localValue = useContext(PageContext);
    return (
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
        <ul>
            <button style={styles.li} className='p-2' onClick={() => setPageToRender('about')}>About Me</button>
            <button style={styles.li} className='p-2'onClick={() => setPageToRender('portfolio')}>Portfolio</button>
            <button style={styles.li} className='p-2'onClick={() => setPageToRender('resume')}>Resume</button>
            <button style={styles.li} className='p-2'onClick={() => setPageToRender('contact')}>Contact</button>
        </ul>
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

export default Navbar