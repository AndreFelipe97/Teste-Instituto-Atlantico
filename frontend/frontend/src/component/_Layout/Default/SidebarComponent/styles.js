import styled from 'styled-components';
import { Layout, Menu } from 'antd';

export const Sider = styled(Layout.Sider)`
  width: 395px !important;
  background: linear-gradient(
    to right bottom,
    #103d24,
    #113d25,
    #123e26,
    #207a48
  ) !important;
  
  div.ant-layout-sider-trigger {
    background: transparent !important;
  }
`;

export const Top = styled.div`
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-transform: uppercase;
  font-size: 35px;
  background: transparent !important;
`;

export const MenuStyled = styled(Menu)`
  color: #fff;
  background: transparent;
  border-right: transparent !important;
`;

export const Item = styled(Menu.Item)`
  color: #fff;
  background: transparent !important;

  &:hover {
    background: transparent !important;
    color: #fff !important;
  }
  &:after {
    border-right: transparent !important;
  }
`;