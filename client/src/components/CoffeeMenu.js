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
                            src="https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXNwcmVzc298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="First slide" /></a>
                            <h2>Espresso</h2>
                        </Col>
                        <Col className='colRight'><a href='h'><img
                            src="https://images.unsplash.com/photo-1611564494260-6f21b80af7ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhcHVjY2lub3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="First slide" /></a>
                            <h2>Cappuccino</h2>
                        </Col>
                    </Row>
                    <Row  className='RowMenuImg'>
                        <Col className='colLeft'><a href='h'><img
                            src="https://images.unsplash.com/photo-1550247611-e651810312fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGF0dGUlMjBtYWNjaWF0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="First slide" /></a>
                            <h2>Latte Macchiatto</h2>
                        </Col>
                        <Col className='colRight'><a href='h'><img
                            src="https://images.unsplash.com/photo-1579888071069-c107a6f79d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZWQlMjBsYXR0ZSUyMG1hY2NoaWF0dG98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt="First slide" /></a>
                            <h2>Iced Latte Macchiatto</h2>
                        </Col>
                    </Row>
                    <Row  className='RowMenuImg'>
                        <Col className='colLeft'><a href='h'><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt6ebYxFm_5GGlXcG_F0G84grdgIzsnM5b7A&usqp=CAU"
                            alt="First slide" /></a>
                            <h2>French Vanilla Macchiato</h2>
                        </Col>
                        <Col className='colRight'><a href='h'><img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvRsWohiD7ZH1XrFwgR3UGJJSuvjb7wzyI-g&usqp=CAU"
                            alt="First slide" /></a>
                            <h2>Flat White</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default CoffeeMenu