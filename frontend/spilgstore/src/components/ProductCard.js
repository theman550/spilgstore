import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function ProductCard({ prod }) {
    return (
        <Card style={{ width: '18rem'}}>
            <center><Card.Img variant="top" src="{prod.image}" /></center>
            <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>
                    {prod.description}
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    )
}
export default ProductCard