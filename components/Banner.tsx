import React from 'react';
import { Row, Col, Carousel, Image } from 'antd';

export const Banner = props => {
  return (
    <Carousel autoplay>
      {props.props.map(image => (
        <div key={image[image]}>
          <Image preview={false} height={{ md: 500 }} src={image} />
        </div>
      ))}
    </Carousel>
  );
};
