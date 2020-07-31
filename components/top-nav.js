import React from 'react';
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


export default function TopNav() {
    return (
        <nav className="top-nav border-b">  
            <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
          
            <Link href="/">
                <a className="text-decoration-none font-bold text-2xl mt-10 mb-2 tracking-tight md:tracking-tighter leading-tight">derrikdesign</a>
            </Link>
    
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/#">Work</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>

            </Nav>

            {/* <Nav.Link href="/contact">contact</Nav.Link> */}
           
            <a href="mailto:derrikdesign@gmail.com" class="btn btn-light" role="button" aria-pressed="true">Contact</a>
        
            </Navbar.Collapse>
            </Navbar>
      </nav> 
      
    )
  }



