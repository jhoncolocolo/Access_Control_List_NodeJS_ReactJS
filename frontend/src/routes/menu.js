import { Component } from "react";
import { Link,useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { useState } from "react";
import { useAuth } from "../commons/Auth";


const CompRoutesMenuAppReact = () => {
    const navigate = useNavigate()
    const auth = useAuth()    
    const closeSession = async () => {
      localStorage.clear()
      window.location.href = "/";
    }
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">System Tj</Navbar.Brand>
          {auth.user?
          (<Nav className="me-auto">
            <NavDropdown title="Master" id="collasible-nav-dropdown">
                <NavDropdown.Item  as={Link} to="/users">Users</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/permissions">Permissions</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/roles">Roles</NavDropdown.Item>
            </NavDropdown>
              <NavDropdown title="Dependings" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/role_users" className='nav-item'>Role Users</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/permission_roles" className='nav-item'>Permissions Roles</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/permission_users" className='nav-item'>Permissions Users</NavDropdown.Item>
              </NavDropdown>
          </Nav>
           ):"" }
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {auth.user ?
              ( <Nav>
                <Nav.Link onClick={ ()=>closeSession( ) }>Logout</Nav.Link>
                <Nav.Link>{auth.user.name} </Nav.Link>
              </Nav>) :
              (
              <Nav>
                <Nav.Link as={Link} to="/login" >Login</Nav.Link>
              </Nav>
          )}
          </Container>
        </Navbar>
    );
}
export default CompRoutesMenuAppReact