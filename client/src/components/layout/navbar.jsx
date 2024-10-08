import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/IWPlogo.png';


function CollapsibleExample() {

  
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#2b6777' }} variant="dark">
      <Container>
        <Navbar.Brand href="https://www.indiawaterportal.org/" style={{ color: '#ffffff', fontWeight: 'bold' }}>
          <img src={logo} alt='Indian Water Portals' style={{ height: '45px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{ color: '#ffffff' }}>Home</Nav.Link>
          </Nav>
          <Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
