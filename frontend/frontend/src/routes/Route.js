import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

// Layouts
import LoginLayout from '../component/_Layout/Login';
import DefaultLayout from '../component/_Layout/Default';

export default function RouteWrapper({
  component: Component,
  isPrivate, 
  ...rest
}) {
  const {signed} = useSelector(state => state.auth);
  // const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to='/' />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/listagem" />
  }

  const Layout = signed ? DefaultLayout : LoginLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}

RouteWrapper.prototypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
}

RouteWrapper.defaultProps = {
  isPrivate: false,
}