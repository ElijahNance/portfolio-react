import React from "react";
import { Nav, NavLink, NavMenu } from './NavBarElements';

function Navbar() {
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About Me
                </NavLink>
                <NavLink to="/portfolio" activeStyle>
                    Portfolio
                </NavLink>
                <NavLink to="/resume" activeStyle>
                    Resume
                </NavLink>
                <NavLink to="/contact" activeStyle>
                    Contact Me
                </NavLink>
            </NavMenu>
        </Nav>
        </>
    )
}

export default Navbar;