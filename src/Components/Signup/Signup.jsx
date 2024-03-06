import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Signup = () => {
    return (
        <div>
            <div className='container me-5 pe-5 pt-5 mt-3 pb-5'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12}><h2 className='ps-5'>Sign up and get exclusive <br /> special deals</h2></Col>
                        <Col lg={6} md={12} sm={12} className='d-flex pt-4'>
                            <InputGroup className="mb-3 w-75 pe-5 outline-none">
                                <Form.Control
                                    placeholder=""
                                    aria-label=""
                                    aria-describedby="basic-addon2"
                                    style={{ height: '50px', width: '2vw' }} />
                                <Button variant="info" id="button-addon2" style={{ height: '50px' }}>
                                    Sign Up
                                </Button>
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Signup