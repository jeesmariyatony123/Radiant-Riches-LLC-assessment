import React from 'react'
import Contentgrid from './Contentgrid';

import sysimg from '../../assets/download 1.png'
import r1 from '../../assets/IMAGE (4).png'
import r2 from '../../assets/IMAGE.png'
import r3 from '../../assets/Untitled (2).png'
import r4 from '../../assets/IMAGE (1).png'
import tropy from '../../assets/tropy.png'
import diamond from '../../assets/diamond.png'

const Content = () => {

    const content = [
        {
            id: 1,
            image: sysimg,
            title: 'Builder 1',
            head1: 'WixPro 72-Inch Responsive Website Builder- ',
            para1: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            para2: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            value: '9.8',
            comment: 'Exceptional',
            Rating: r1,
            Bestsymbol: tropy,
            Best: 'Best Choice'

        },
        {
            id: 2,
            image: sysimg,
            title: 'Builder',
            head1: 'SiteCraft 68-Inch Ultimate Web Design Studio- ',
            para1: ' Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)',
            para2: '[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.',
            value: '9.5',
            comment: 'Excellent',
            Rating: r2,
            Bestsymbol: diamond,
            Best: 'Best Value'
        },
        {
            id: 3,
            image: sysimg,
            title: 'Builder 1',
            head1: 'WixPro 72-Inch Responsive Website Builder-  ',
            para1: 'Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)',
            para2: '[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.',
            value: '9.3',
            comment: 'Exceptional',
            Rating: r3,

        },
        {
            id: 4,
            image: sysimg,
            title: 'CDK',
            head1: 'CDK Resposive Builder: ',
            para1: 'An extensive library of widgets and apps, and detailed step-by-step guides',
            off: '26% Off',
            para2value1: '9.9',
            para2content1: 'Building Responsive',
            para2value2: '8.9',
            para2content2: 'Cool',
            para2value3: '8.9',
            para2content3: 'Docs',
            para2head: 'Why we love it',
            ticksymbol: '✓',
            tickcontent1: 'Documentation',
            tickcontent2: 'Easy Use',
            tickcontent3: 'Out Of Box',
            value: '9.1',
            comment: 'Very Good',
            Rating: r4
        }
    ]

    return (
        <>
            <div className='container me-5 pe-5'>
                <Contentgrid contents={content} />
            </div>
        </>
    )
}

export default Content