import { Navbar, Container,Form,FormControl, ButtonGroup, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
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
        <DropdownButton as={ButtonGroup} title="Buscar" id="bg-nested-dropdown">
            <Dropdown.Item eventKey="1">Nombre producto</Dropdown.Item>
            <Dropdown.Item eventKey="2">Marca producto</Dropdown.Item>
            <Dropdown.Item eventKey="3">Id producto</Dropdown.Item>
        </DropdownButton>
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