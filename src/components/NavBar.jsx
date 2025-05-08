import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Ahublogo from '../assets/Ahublogo.jpg'; // ← Corrected path

function NavBar() {
  return (
    <Container className="mt-3">
      <Navbar expand="lg" className="bg-transparent rounded-2 px-3 py-2">
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              src={Ahublogo}
              alt="AzureHub Logo"
              height="20"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbar-center" />
          <Navbar.Collapse id="navbar-center" className="justify-content-between">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
              <Nav.Link href="#rooms" className="mx-3">Rooms</Nav.Link>
              <Nav.Link href="#pricing" className="mx-3">Pricing</Nav.Link>
              <Nav.Link href="#about" className="mx-3">About</Nav.Link>
            </Nav>

            <div className="d-flex">
              <Nav.Link href="/login" className="mx-3">Sign in</Nav.Link>
              <Nav.Link href="/signup" className="mx-3">Sign up</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;
