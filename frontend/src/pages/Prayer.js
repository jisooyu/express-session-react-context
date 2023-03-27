import React from 'react'
import { Card, CardHeader, CardMedia, CardContent } from '@mui/material';

function Prayer({ prayer }) {
    return (
        <Card sx={{
            maxWidth: 420,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <CardHeader sx={{ marginLeft: '20px', marginBottom: '10px', textAlign: 'center' }} title={prayer.title} subheader={prayer.subtitle} />
            <CardMedia
                component="img"
                image={`${process.env.PUBLIC_URL}/joyful-mystery-1.jpeg`}
                sx={{ marginLeft: '20px', maxHeight: '400px', objectFit: 'contain' }} // set the maxHeight and objectFit properties
            />
            <CardContent >
                <p style={{ marginLeft: '20px', marginBottom: '10px' }}>{prayer.content}</p>
                <p style={{ marginLeft: '20px', marginBottom: '10px', fontWeight: 'bold', }}>{prayer.repeat}</p>
                <p style={{ marginLeft: '20px' }}>{prayer.ending}</p>
            </CardContent>
        </Card>
    )
}

export default Prayer;