import React from 'react';
import { Card, Image } from 'antd';
import { Link } from './next/link';

export const CommonCard = (props: {
  id: number;
  name: string;
  mediaUrl: string;
  price: string;
}) => {
  const { id, name, mediaUrl, price } = props.props;

  return (
    <Card
      key={id}
      style={{ width: 300, height: 350 }}
      hoverable
      cover={<Image width={300} height={200} alt="example" src={mediaUrl} />}
    >
      <Link to={id}>
        <h1>{name}</h1>
        <h2>
          {price} <i>ZMW</i>
        </h2>
      </Link>
    </Card>
  );
};
