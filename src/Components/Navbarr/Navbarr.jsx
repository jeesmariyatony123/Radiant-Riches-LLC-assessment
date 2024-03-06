import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';

const Navbarr = () => {
    return (
        <>
            <Navbar expand="lg" className="navigationbar bg-primary">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="m-auto ">
                            <Nav.Link href="" className='mx-4' >
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2 "
                                />
                            </Nav.Link>
                            <Nav.Link href="#link" className='text-light mx-3'>Categories</Nav.Link>
                            <Nav.Link href="#link" className='text-light mx-4'>Website Builders</Nav.Link>
                            <Nav.Link href="#link" className='text-light mx-5'>Today's deals</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navbarr