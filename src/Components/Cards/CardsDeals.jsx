import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../../assets/download 1.png'

const CardsDeals = () => {
    const deals = [
        {
            id: 1,
            text: "Computer  Modern clasic with wix support"
        },
        {
            id: 2,
            text: "Computer  Modern clasic with wix support"
        },
        {
            id: 3,
            text: "Computer  Modern clasic with wix support"
        },
    ]

    return (
        <div>
            <div className='container me-5 pe-5 ps-5 '>
                <h3>Related deals you might like for</h3>
                <div className=' d-flex justify-content-center align-items-center gap-5 pt-5' style={{ marginRight: '200px' }}>
                    {deals.map((item => (
                        <Card style={{ width: '20rem', border: 'none', backgroundColor: 'white' }} >
                            <Card.Img className='img-fluid container p-5' variant="top" src={image} />
                            <Card.Body>
                                <p><span className='text-info me-2 rounded p-1' style={{ backgroundColor: '#F2F4F7' }}>20% Off </span><span className='text-info rounded p-1' style={{ backgroundColor: '#F2F4F7' }}>Limited time </span></p>
                                <h5 className='text-center fw-bolder'>Webbuilder 1</h5>
                                <p>{item.text}</p>
                                <Card.Text>
                                    <span className='text-primary fs-4'> $39.96</span> <span className='text-dark fs-6 px-2'>$49.96</span> <span className='text-danger px-3'>(20% Off)</span>
                                </Card.Text>
                                <Button variant="info" className='w-100'>View Deal</Button>
                            </Card.Body>
                        </Card>
                    )))
                    }
                </div>
            </div>
        </div>
    )
}

export default CardsDeals