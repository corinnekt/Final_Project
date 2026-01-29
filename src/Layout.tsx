// Layout.tsx is the general layout of the SPA

// Import Layout.css file for site-wide uniform styling
import './Layout.css'

// imported from React Bootrap Navbar template
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// create the Layout component and export it to be used in parent components - main.tsx in this case
export default function Layout() {
  
  // defines what the component does
  return (
    <> {/* React Bootstrap Navbar template*/}
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/*using react-router-dom Link components to route between pages/components*/}
          <Navbar.Brand as={Link} to="/">
            Portfolio
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/CV">CV</Nav.Link>
            <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/Art">Art</Nav.Link>
            <Nav.Link as={Link} to="/Preorder">Preorder</Nav.Link>
            <Nav.Link as={Link} to="/Subscribe">Subscribe</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      </div>
      <div>
        {/*react-router-dom component that determines where children components will show up depening on where it is placed*/}
        <Outlet/>
      </div>
    </>
  )
}

