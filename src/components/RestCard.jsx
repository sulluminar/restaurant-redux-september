import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
    return (
        <>
            <Link to={`/resturant-view/${restaurant.id}`} style={{textDecoration:"none"}}>

                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        height={'300px'}
                        width={'100%'}
                        variant="top" src={restaurant.photograph} />
                    <Card.Body>
                        <Card.Title>{restaurant.name}</Card.Title>
                        <Card.Text>Neighbourhood: {restaurant.neighborhood}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default RestCard