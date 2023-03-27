import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Box } from '@mui/material';
import Prayer from './Prayer';

const Joyful = ({ prayers }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '150vh',
            }}
        >
            <Carousel
                animation="fade"
                interval={null}
                sx={{
                    width: '80%',
                    height: '120vh',
                    display: 'flex',
                    alignItems: 'top',
                    justifyContent: 'center',
                }}
            >
                {prayers.map((prayer, id) => (
                    <Prayer key={id} prayer={prayer} />
                ))}
            </Carousel>
        </Box>
    )
};

export default Joyful;
