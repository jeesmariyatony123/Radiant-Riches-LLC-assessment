import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import dropdown from '../../assets/IMAGE (6).png'


const Contentgrid = ({ contents }) => {
    return (
        <div>
            <Container >
                <Row className=' py-5 '>
                    {contents.map((item) => (
                        <div key={item.id} className='d-flex justify-content-between pb-5'>
                            <Col className='col-lg-3  text-center pt-5'>
                                <div className='d-inline bg-warning  ' >
                                    <img src={item.Bestsymbol} className='fs-5  ps-2 pb-1' style={{ marginLeft: '-240px', marginTop: '-79px' }} />
                                    <h6 className='fs-4  w-50 ps-4 rounded-end ' style={{ marginLeft: '24px', marginTop: '-65px', backgroundColor: '#FF7724' }} >{item.Best}</h6>
                                </div>
                                <h6 className='fs-5 pt-3' style={{ marginLeft: '-250px', marginTop: '-10px', color: '#626E79' }}>{item.id}</h6>
                                <img className='pt-1' src={item.image} alt="" />
                                <h6 className='pt-3'>{item.title}</h6>
                            </Col>
                            <Col className='col-lg-5 col pe-5 pt-4'>
                                <p><b>{item.head1}</b>{item.para1}</p>
                                <h6 className='text-center' style={{ width: '65px', backgroundColor: '#F2F4F7', borderRadius: '6px' }}>{item.off}</h6>
                                <h6><b>Main highlights</b></h6>
                                <p className='ps-4'>{item.para2}</p>
                                <Container>
                                    <Row>
                                        <div>
                                            <Col className='fs-6 rounded ps-2 ms-4' style={{ backgroundColor: '#FFF4ED ' }}>
                                                <h6 className=' me-2'>{item.para2value1} {item.para2content1}</h6>
                                                <h6 className=' me-2 '>{item.para2value2}  {item.para2content2}</h6>
                                                <h6 className='me-2'>{item.para2value3} {item.para2content3}</h6>
                                            </Col>
                                        </div>
                                    </Row>
                                    <div>{item.para2head}</div>
                                    <div>
                                        <h6>{item.ticksymbol} {item.tickcontent1}</h6>
                                        <h6>{item.ticksymbol}{item.tickcontent2}</h6>
                                        <h6>{item.ticksymbol}{item.tickcontent3}</h6>
                                    </div>
                                </Container>
                                <a className='text-info' href="#" style={{ textDecoration: 'none' }}>Show more <img className='text-info' src={dropdown} alt="" /></a>
                            </Col>
                            <Col className='col-lg-4 col text-center pe-5'>
                                <div className='rating'>
                                    <h4>{item.value}</h4>
                                    <p>{item.comment}</p>
                                    <img src={item.Rating} alt="" />
                                </div>
                                <button className='btn btn-info w-50 mt-5  viewbtn'>View</button>
                            </Col>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Contentgrid