import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Row, Col, Carousel, Image } from 'antd';
import { PRODUCTS } from './data/products';
import { BANNER_URl } from './data/banner';

import { CommonCard } from './Common-card';
import { Banner } from './components/Banner';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.l

export const Home = () => {
  return (
    <div class="">
      <Banner props={BANNER_URl} />

      <Row gutter={[16, 16]}>
        {PRODUCTS.map(product => (
          <Col span={(6, { xs: 24, md: 12 })}>
            <CommonCard props={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
