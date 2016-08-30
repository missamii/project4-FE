import React, { Component } from 'react';
import { Link } from 'react-router';
import '../Header.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


  class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">[APP NAME]</a>
          </Navbar.Brand>
        </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/">Home</NavItem>
        <NavItem eventKey={2} href="/SearchCars">Cars</NavItem>
        <NavItem eventKey={3} href="/About">About</NavItem>
        <NavItem eventKey={4} href="/Dealerships">Dealerships</NavItem>
          <NavDropdown eventKey={5} title="Message Board" id="basic-nav-dropdown">
            <MenuItem eventKey={5.1} href="/MessageBoard">View Message Board</MenuItem>
            <MenuItem eventKey={5.2} href="/NewPost">New Post</MenuItem>
            <MenuItem divider />
          </NavDropdown>
      </Nav>
    </Navbar>
    )
  }
}

export default Header;
