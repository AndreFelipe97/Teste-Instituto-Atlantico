import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import {
  FormOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import {
  Top,
  Sider,
  MenuStyled,
  Item,
} from './styles';

function SidebarComponent(props) {
  const [collapsed, setCollapsed] = useState(false)
  const [top, setTop] = useState('Teste')
  let history = useHistory();

  const onCollapse = collapsed => {
    if (collapsed) {
      setTop('T')
    } else {
      setTop('Teste')
    }
    setCollapsed(collapsed)
  };

  const handleClick = (path) => {
    const { dispatch } = props

    dispatch({
      type: 'ADD_TO_TITLE',
      path,
    })

    dispatch({
      type: 'ADD_TO_BREADCRUMB',
      breadcrumb: ['teste', path],
    })

    history.push(`/${path}`)
  }

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <Top>{top}</Top>
      <MenuStyled defaultSelectedKeys={['1']} mode="inline">
        <Item key="1" icon={<PieChartOutlined />} onClick={() => handleClick('listagem')} >
          Listagem
        </Item>
        <Item key="2" icon={<FormOutlined />} onClick={() => handleClick('cadastro')} >
          Cadastro
        </Item>
      </MenuStyled>
    </Sider>
  );
}

export default connect()(SidebarComponent);