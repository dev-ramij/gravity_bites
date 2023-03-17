import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png'

function Header() {
  return (
    <Navbar bg="white" expand="lg" className='shadow-md p-0'>
      <Container fluid="sm">
        <Navbar.Brand href="/home" className='p-0'>
         <img className='w-20 h-20'  src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto"
            navbarScroll
          >
            <Nav.Link href="/" className='font-semibold text-black text-md mr-4'>Login</Nav.Link>
            <Nav.Link href="#" className='font-semibold text-black text-md mr-4'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;