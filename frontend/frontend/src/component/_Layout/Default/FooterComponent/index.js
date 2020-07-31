import React from 'react';
import { useSelector } from 'react-redux';

import { Footer } from './styles';

export default function FooterComponent() {
  const { user } = useSelector(state => state.user)
  return (
    <Footer>
      <span>Teste</span>
      <span>{user.name}</span>
    </Footer>
  );
}
