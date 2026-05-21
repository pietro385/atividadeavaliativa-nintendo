import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function NintendoNavbar() {
  return (
    <Navbar style={{ backgroundColor: '#e4000f' }} data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Nintendo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#jogos">Jogos</Nav.Link>
          <Nav.Link href="#noticias">Notícias</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NintendoNavbar;