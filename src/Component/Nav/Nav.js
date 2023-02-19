import React from "react";
import { useState, useEffect } from "react";
import './Nav.css';
import { Navbar,Container,Nav,button } from "react-bootstrap";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
const Navs = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    return(
        <Router>
            <Navbar expand="lg">
            <Container>
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <div className="social-icon">
                <Nav.Link href="#link"><Facebook className="icon"/></Nav.Link>
                <Nav.Link href="#link"><Instagram className="icon"/></Nav.Link>
                <Nav.Link href="#link"><Linkedin className="icon"/></Nav.Link>
                </div>
                <HashLink to='#connect'>
                <button className="btn1"><span>Let’s Connect</span></button>
              </HashLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
    )
}

export default Navs;