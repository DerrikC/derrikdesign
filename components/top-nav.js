import React from 'react';
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function TopNav() {
    return (
        <nav className="top-nav">  
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
          
            <Link href="/">
                <a className="font-bold tracking-tight md:tracking-tighter leading-tight hover:underline text-xl">derrikdesign</a>
            </Link>
    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#work">Work</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            </Nav>

            <Nav.Link href="/contact">Contact</Nav.Link>

            </Navbar.Collapse>
            </Navbar>
      </nav> 
      
    )
  }
