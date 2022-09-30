import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CoffeeMenu() {
    return (
        <div className='coffeeMenu'>
            <h1 className='coffeeMenuText'>Coffe Bar</h1>
            <div>
                < Container>
                    <Row  className='RowMenuImg'>
                        <Col className='colLeft'><a href='h'><img
                            src="https://images.unsplash.com/photo-1605711529603-d3a7d001fa5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZybmNoJTIwcHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="First slide" /></a>
                            <h2>French Press</h2>
                        </Col>
                        <Col className='colRight'><a href='h'><img
                            src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGF6YSUyMGRlJTIwY2FmJUMzJUE5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="First slide" /></a>
                            <h2>American Coffee</h2>
                        </Col>
                    </Row>
                    <Row  className='RowMenuImg'>
                        <Col className='colLeft'><a href='h'><img
                            src="https://images.unsplash.com/photo-1605711529603-d3a7d001fa5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZybmNoJTIwcHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="First slide" /></a>
                            <h2>French Press</h2>
                        </Col>
                        <Col className='colRight'><a href='h'><img
                            src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGF6YSUyMGRlJTIwY2FmJUMzJUE5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                            alt="First slide" /></a>
                            <h2>American Coffee</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CoffeeMenu