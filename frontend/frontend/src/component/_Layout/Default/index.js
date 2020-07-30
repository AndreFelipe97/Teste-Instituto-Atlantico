import React from 'react';
import PropTypes from 'prop-types'
import { Layout } from 'antd';

import TopbarComponent from './TopbarComponent';
import SidebarComponent from './SidebarComponent'
import BreadcrumbComponent from './BreadcrumbComponent';
import FooterComponent from './FooterComponent';

const { Content } = Layout;

// import { Container } from './styles';

function Default({children}) {
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SidebarComponent />
      <Layout className="site-layout">
        <TopbarComponent />
        <Content style={{ margin: '0 16px' }}>
          <BreadcrumbComponent />
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
}

Default.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Default;