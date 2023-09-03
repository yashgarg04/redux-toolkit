import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const cartProducts = useSelector(state => state.cart);

    return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Redux Toolkit</Navbar.Brand>
                    <Nav>
                        <Nav.Link to='/' as={Link}>Products</Nav.Link>
                    </Nav>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='justify-content-end' id="navbarScroll">
                        <Navbar.Text>
                            <Nav.Link to='/cart' as={Link}>My Bag {cartProducts.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
