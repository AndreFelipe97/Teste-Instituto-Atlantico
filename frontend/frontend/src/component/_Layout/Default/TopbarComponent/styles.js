import styled from 'styled-components';
import { Layout } from 'antd';

export const Header = styled(Layout.Header)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
  font-size: 25px;
  background: rgba(45, 166, 109, 1);

  div#page {
    padding-left: 10px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  div#logout {
    padding-right: 15px;
  }
`;

export const Button = styled.button`
  background: transparent;
  border-color: transparent;
  color: #fff;
  font-size: 25px;
`;