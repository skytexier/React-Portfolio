import {React, useState, useEffect } from "react";

import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    return (
        <Navbar expanded="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <h2>
                        Sky Texier
                    </h2>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Navigation;