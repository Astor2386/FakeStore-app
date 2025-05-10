// src/components/NavBar.jsx
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="p-3 mb-4">
      {/* Brand logo linking to home */}
      <Navbar.Brand as={NavLink} to="/">FakeStore</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* Navigation links */}
          <Nav.Link as={NavLink} to="/" activeClassName="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/products" activeClassName="active">
            Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/add-product" activeClassName="active">
            Add Product
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;