import React from 'react'
import './Header.css'
import tickimage from '../../assets/tick.png'
import iimage from '../../assets/iimage.png'
import dropdown from '../../assets/IMAGE (2).png'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Header = () => {
    return (
        <>
            <div className='container  me-5 pe-5'>
                <h1 className='text-left pt-4 ms-5 '>Best Website builders in the US</h1>
                <hr style={{ width: '67vw' }} className='ms-5' />
                <div className='d-flex justify-content-between px-5'>
                    <h6><img className='pe-1' src={tickimage} /> Last Updated <span className='p-2'>-</span> February 22, 2020</h6>
                    <h6 className='ps-4'><img className='pe-1' src={iimage} /> Advertising Disclosure</h6>
                    <div className='ms-auto'>
                        <h6 className='pe-5 me-5'>Top Relevant <img className='pe-5' src={dropdown} alt="" /></h6>
                    </div>
                </div>
                <hr style={{ width: '67vw' }} className='ms-5' />
                <ul className='d-flex mx-4' style={{ listStyle: 'none' }}>
                    <button className='bg-white border-0 me-3 rounded'> <li className='px-4'>Tools</li></button>
                    <button className='bg-white border-0 me-3 rounded'><li className='px-4'>AWS Builder</li></button>
                    <button className='bg-white border-0 me-3 rounded'><li className='px-4'>Start Build</li></button>
                    <button className='bg-white border-0 me-3 rounded'><li className='px-4'>Build Supplies</li></button>
                    <button className='bg-white border-0 me-3 rounded'><li className='px-4'>Tooling</li></button>
                    <button className='bg-white border-0 me-3 rounded'><li className='px-4'>BlueHosting</li></button>
                </ul>
                <div className='ps-5 '>
                    <Breadcrumb  >
                        <Breadcrumb.Item active>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active >Hosting for all</Breadcrumb.Item>
                        <Breadcrumb.Item active>Hosting</Breadcrumb.Item>
                        <Breadcrumb.Item active>Hosting6</Breadcrumb.Item>
                        <Breadcrumb.Item active>Hosting5</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </>
    )
}

export default Header