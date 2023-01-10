import {React, useState, useEffect } from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () => {
    
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const onActiveLink = (value) => {
        setActiveLink(value);
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
    }, [])
        
    return (
        <Navbar expanded="md" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Collapse id="navbar-nav">
                    <Nav className ="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onActiveLink('home')}>// home</Nav.Link>
                        <Nav.Link href="#home" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onActiveLink('skills')}>// skills</Nav.Link>
                        <Nav.Link href="#home" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onActiveLink('projects')}>// projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
            </Container>
        </Navbar>
    )
}

export default Navigation;