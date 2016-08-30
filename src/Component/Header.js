import React, { Component } from 'react';
import { Link } from 'react-router';
import '../Header.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


  class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">[NAME of APP]</a>
          </Navbar.Brand>
        </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/SearchCars">Cars</NavItem>
        <NavItem eventKey={3} href="/NewPost">New Post</NavItem>
        <NavItem eventKey={4} href="/About">About</NavItem>
      </Nav>
    </Navbar>
    )
  }
}

export default Header;
