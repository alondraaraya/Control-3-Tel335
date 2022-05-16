import { Navbar, Container,Form,FormControl, Button, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import BotonCarrito from './carrito'
import BotonBusqueda from '../actions/BotonBusqueda'

function barra(){
return (
<Navbar bg="dark" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">FriendlyShopping</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    </Nav>
    <BotonBusqueda/>
    <BotonCarrito/>
    
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default barra