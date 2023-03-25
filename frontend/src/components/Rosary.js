import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, CardHeader } from '@mui/material'

const Rosary = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/joyful')
    }
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="joyful-1.jpeg" />
            <Card.Body>
                <Card.Title>환희의 신비</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button onClick={handleClick} variant="primary">기도문</Button>
            </Card.Body> */}
        </Card>
    )
}

export default Rosary