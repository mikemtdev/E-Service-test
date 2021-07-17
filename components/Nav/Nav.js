import React from 'react';
import { Layout, Row, Col } from 'antd';
const { Header } = Layout;
import { Input, Space, Menu, Avatar, Badge } from 'antd';
import {} from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';

import {
  ShoppingCartOutlined,
  StarOutlined,
  StarFilled,
  StarTwoTone
} from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';

export const Nav = props => {
  const { Search } = Input;
  const onSearch = value => console.log(value);

  return (
    <>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Row alitn="middle" gutter={16}>
            <Col span={12}>Logo</Col>
            <Col span={12} offset={6}>
              <Col span={6}>
                <Search
                  placeholder="input search text"
                  size="large"
                  onSearch={onSearch}
                  enterButton
                />
              </Col>
              <Col span={2}>
                <Badge count={1}>
                  <Avatar
                    shape={'circle'}
                    size={{ xs: 24, sm: 32, md: 40, lg: 23, xl: 40, xxl: 100 }}
                  >
                    Mike
                  </Avatar>
                </Badge>
              </Col>
              <Col span={2}>
                <ShoppingCartOutlined />
              </Col>
            </Col>
          </Row>
          {/* <Row >
            <Space align="center">
              <Col span={}>
                <h3>Logo</h3>
              </Col>
        
                <Col>
                 
                </Col>
                <Col span={}>
                
                </Col>
                <Col span={}>
                
                </Col>
     
            </Space>
          </Row> */}
        </Menu>
      </Header>
    </>
  );
};
