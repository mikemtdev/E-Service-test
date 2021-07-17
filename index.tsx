import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Row, Col, Carousel, Image, Layout } from 'antd';
import { PRODUCTS } from './data/products';
import { BANNER_URl } from './data/banner';

import { Home } from './home';
import { Nav } from './components/Nav/Nav';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.l

const { Header, Footer, Sider, Content } = Layout;
interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="">
        <Layout>
          <Content>
            <Nav />
            <Home />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
