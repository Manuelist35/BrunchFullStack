import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DrinksMenu() {
    return (
        <div className='DrinksMenu'>
            <h1 className='DrinksMenuText'> Drinks Menu</h1>
            <div>
                <Container>
                    <Row className='RowMenuImg'>
                        <Col className='colLeft'><a href='h'><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsGVa8mHArbTpVpFG3WNZZwcbyFrqEcIHWHw&usqp=CAU"
                            alt="First slide"
                        /></a>
                            <h2>Corona Beer</h2>
                        </Col>
                        <Col className='colRight'><a href='h'><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSst6fOvd4LNdbZrZMg1AFFZ5Wd7U3mSIiUog&usqp=CAU"
                            alt="First slide"
                        /></a>
                            <h2>Modelo Beer</h2>
                        </Col>
                    </Row>
                    <Row className='RowMenuImg'>
                        <Col className='colLeft'><a href='h'><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWILRV8i_8Yihy8GJTDEwuez2kyvCmGXO3w&usqp=CAU"
                            alt="First slide"
                        /></a>
                            <h2>Pacifico Beer</h2>
                        </Col>
                        <Col className='colRight'><a href='h'><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHr3sVKVZEEvusQLlU5B1FhhkfYTjWBTQWA&usqp=CAU"
                            alt="First slide"
                        /></a>
                            <h2>Negra Modelo</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default DrinksMenu