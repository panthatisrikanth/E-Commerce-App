import React from 'react'
import { Navbar, Nav, NavDropdown, NavLink, Container } from 'react-bootstrap';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">project</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <NavLink  href="/signin">Signin</NavLink>
            <NavLink  href="/signup">Signup</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )

}

export default Header