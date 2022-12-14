import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"

function NavbarCustom() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{width: "32%"}}>Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">


            <Link to="/" style={{fontWeight: '600', textDecoration:"none", width: '6vw'}}>
              About me
            </Link>
            <Link to="/my-skills" style={{fontWeight: '600', textDecoration:"none", width: '6vw'}}>
              My Skills
            </Link>
            <Link to="/works" style={{fontWeight: '600', textDecoration:"none", width: '6vw'}}>
              My works
            </Link>
            <Link to="/contacts" style={{fontWeight: '600', textDecoration:"none", width: '6vw'}} >
              Contacts
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
