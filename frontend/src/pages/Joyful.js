import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Prayer from './Prayer';

const Joyful = () => {
    const prayers = [
        {
            id: 1,
            name: "환희의 신비 1단",
            description: "마리아께서 에수님을 잉태하심을 묵상합시다"
        },
        {
            id: 2,
            name: "환희의 신비 2단",
            description: "마리아께서 에수님을 잉태하심을 묵상합시다"
        },
        {
            id: 3,
            name: "환희의 신비 3단",
            description: "마리아께서 에수님을 잉태하심을 묵상합시다"
        },
        {
            id: 4,
            name: "환희의 신비 4단",
            description: "마리아께서 에수님을 잉태하심을 묵상합시다"
        },
        {
            id: 5,
            name: "환희의 신비 5단",
            description: "마리아께서 에수님을 잉태하심을 묵상합시다"
        },

    ]
    return (
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30vh' }}>
            <Carousel
                animation="fade"
                interval={null}
                sx={{ width: "120%" }}>
                {
                    prayers.map((prayer, id) => <Prayer key={id} prayer={prayer} />)
                }
            </Carousel >
        </div >
    )
};

export default Joyful;
