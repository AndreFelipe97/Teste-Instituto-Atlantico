import React from 'react';
import { connect, useDispatch } from 'react-redux';
import {LogoutOutlined} from '@ant-design/icons';

import { signOut } from '../../../../store/module/auth/actions';

import { Header, Button } from './styles';

function TopbarComponent({ titleHeader }) {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut())
  }

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <div id="page">{titleHeader}</div>
      <div id="logout">
        <Button onClick={handleSignOut}><LogoutOutlined /></Button>
      </div>
    </Header>
  );
}

export default connect(state => ({
  titleHeader: state.titleHeader,
}))(TopbarComponent);
