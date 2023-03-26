import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Joyful = () => {
    const data = [
        {
            id: 1,
            content: 'Content 1',
        },
        {
            id: 2,
            content: 'Content 2',
        },
        {
            id: 3,
            content: 'Content 3',
        },
    ];

    return (
        <Slider autoplay={true} dots={true} infinite={true} speed={500}>
            {data.map((item) => (
                <div key={item.id}>
                    <h3>{item.content}</h3>
                </div>
            ))}
        </Slider>

    )
};

export default Joyful;
