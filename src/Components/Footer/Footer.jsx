import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';

const Footer = () => {
    return (
        <div className=' bg-primary'>
            <div className='container me-5 pe-5 pb-5 pt-5'>
                <Container className=' text-white pt-5 pb-5'>

                    <Row >
                        <Col>
                            <h6 className='ps-4'>CATEGORIES</h6>
                            <ul style={{ listStyle: 'none', lineHeight: '2.3' }} className='text-dark '>
                                <li>Web Builder</li>
                                <li>Hosting</li>
                                <li>Data Center</li>
                                <li>Robotic-Automation</li>
                            </ul>
                        </Col>
                        <Col>
                            <h6 className='ps-4'>CONTACT</h6>
                            <ul style={{ listStyle: 'none', lineHeight: '2.3' }} className='text-dark'>
                                <li>Contact</li>
                                <li>Privacy Policy</li>
                                <li>Terms Of Service</li>
                                <li>Categories</li>
                                <li>About</li>
                            </ul></Col>
                        <Col>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic" className=' text-white'>
                                    United States
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer