import { Navbar, Container,Form,FormControl, Button, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import BotonCarrito from './carrito'

function barra(){
return (
<Navbar bg="dark" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">FriendlyShopping</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Buscar"
          className="me-2"
          aria-label="Buscar"
        />
        //agregar funcion de busqueda
        <Button variant="primary" > 
              Buscar
            </Button>
      </Form>
      
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
    </Nav>
    <BotonCarrito/>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
}

export default barra