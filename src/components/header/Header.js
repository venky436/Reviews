import React from 'react'
import {Container,Row,Col,Button,ListGroup,Navbar,NavDropdown,Nav,Form,FormControl,Image
} from 'react-bootstrap'

export const Header = () => {
    return (
        <Container fluid>

            <Navbar  expand="md" bg='light' className='px-3'>
                <Navbar.Brand><Image src="./865748.jpg" width="50px" height="50px" style={{borderRadius:'100%'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="#venky" />
            <Navbar.Collapse id="venky">
             <Nav className="me-auto">
                <Nav.Link href="#features" className='mx-3'>Service</Nav.Link>
                <Nav.Link href="#pricing" className='mx-3'>Products</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Shirts</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Jeans</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
               </NavDropdown>
            </Nav>
            <Form className='d-flex mx-5'>
                <FormControl
                  placeholder='search'
                  type ="text"
                  className='d-block w-100'
                
                >

                </FormControl>
                <Button variant='primary' type ="submit" className='mx-2'>Search</Button>
            </Form>
            </Navbar.Collapse>
            </Navbar>

           
           
        </Container>
    )
}
