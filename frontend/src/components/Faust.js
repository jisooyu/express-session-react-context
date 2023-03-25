import React from 'react';
import { Card, CardMedia, CardContent, CardHeader } from '@mui/material'

const Faust = () => {
    return (
        <div style={{ marginTop: '70px', marginLeft: '5px' }} >
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title="Jesus, I trust in you."
                    subheader="1943"
                />
                <CardMedia
                    component="img"
                    height="620"
                    image={`${process.env.PUBLIC_URL}/faust-jesus.jpeg`}
                // src=
                />
                <CardContent>

                </CardContent>
            </Card>
        </div >
    )
}

export default Faust