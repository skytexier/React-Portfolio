import {React, useState, useEffect } from "react";

import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavBar = () => {
    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    return (
        <NavBar expanded="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <h2>
                        Sky Texier
                    </h2>
                </Navbar.Brand>
            </Container>
        </NavBar>
    )
}