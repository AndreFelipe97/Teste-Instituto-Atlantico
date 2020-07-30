import React from 'react';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';

// import { Container } from './styles';

function BreadcrumbComponent({breadcrumb}) {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {
        breadcrumb.map(bread => (
          <Breadcrumb.Item key={bread}>{bread}</Breadcrumb.Item>
        ))
      }
    </Breadcrumb>
  );
}

export default connect(state => ({
  breadcrumb: state.breadcrumb
}))(BreadcrumbComponent)