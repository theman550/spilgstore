import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from '../static/logo.png';
import { Navbar, Container, Nav } from 'react-bootstrap' 

function Navibar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/addProduct">addProduct</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default Navibar

/* 

<nav>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/AddProduct">Add Product</Link>
  </li>
</ul>
</nav> */