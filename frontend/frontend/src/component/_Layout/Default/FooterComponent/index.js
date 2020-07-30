import React from 'react';
import { connect } from 'react-redux';

import { Footer } from './styles';

function FooterComponent({user}) {
  return (
    <Footer>
      <span>Teste</span>
      <span>{user.name}</span>
    </Footer>
  );
}

export default connect(state => ({
  user: state.user,
}))(FooterComponent);
