import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css'
export const Cards = (props) => {
    return (
        <Card style={{ width: '18rem', marginLeft: '70px' }} className='card'>
            <Card.Img variant="top" src={props.imgLink} className='cardImg' />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.content}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
