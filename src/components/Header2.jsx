import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png'
import { AiFillCaretRight } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';

function Header2() {
  return (
    <Navbar bg="white" expand="lg" className='shadow-md p-0'>
      <Container fluid="sm">
        <Navbar.Brand href="/home" className='p-0'>
         <img className='w-20 h-20'  src={Logo} />
        </Navbar.Brand>
        <a href="#" className='font-semibold text-black text-md mr-4 flex items-center'> <BsArrowLeft className='mr-2'/>  Back</a>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto"
            navbarScroll
          >
            <Nav.Link href="/" className='font-semibold text-black text-md mr-4 flex items-center'> <AiFillCaretRight /> Store Details</Nav.Link>
            <Nav.Link href="#" className='font-semibold text-black text-md ml-4 flex items-center'> <AiFillCaretRight /> Store Owner Details</Nav.Link>
            <Nav.Link href="#" className='font-semibold text-black text-md ml-4 flex items-center'> <AiFillCaretRight /> Documents</Nav.Link>
            <Nav.Link href="#" className='font-semibold text-black text-md ml-4 flex items-center'> <AiFillCaretRight /> Bank Details</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header2;