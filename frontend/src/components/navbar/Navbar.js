import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Navigationbar = (props) => {

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <center>
          <Nav className="me-auto">
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Create</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Button variant="primary">Connect Wallet</Button>
          </Nav>
          </center>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;