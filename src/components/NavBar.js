import {Navbar,Container }from 'react-bootstrap';

function NavBar() {
  return (
    <Container fluid className='p-0'>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBar;