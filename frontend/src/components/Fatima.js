import React from 'react';
import { Card, CardMedia, CardContent, CardHeader } from '@mui/material'

const Fatima = () => {
    return (
        <div style={{ marginTop: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Holy Mother in Fatima"
                    subheader="1917"
                />
                <CardMedia
                    component="img"
                    height="620"
                    image={`${process.env.PUBLIC_URL}/fatima-mother.jpeg`}
                />
                <CardContent>

                </CardContent>
            </Card>
        </div>
    )
}

export default Fatima