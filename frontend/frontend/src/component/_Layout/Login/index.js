import React from 'react';
import PropTypes from 'prop-types'
import GlobalStyle from '../../../style/global';

import { Wrapper } from './styles';

function Login({children}) {
  return (
    <>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

Login.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Login;