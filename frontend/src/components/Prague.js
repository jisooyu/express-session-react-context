import React from 'react';
import { Card, CardMedia, CardContent, CardHeader } from '@mui/material'

const Prague = () => {
    return (
        <div style={{ marginTop: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Infant Jesus"
                    subheader="1637"
                />
                <CardMedia
                    component="img"
                    height="620"
                    image={`${process.env.PUBLIC_URL}/infant-jesus-prague.jpeg`}
                />
                <CardContent>

                </CardContent>
            </Card>
        </div>
    )
}

export default Prague