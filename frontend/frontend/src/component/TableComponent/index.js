import React from 'react';
import { Table } from 'antd';

import indexUnique from '../../util/indexUnique';


// import { Container } from './styles';

function TableComponent({data}) {
  const boards = data.map(d => d.board)
  const projects = data.map(d => d.project)

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Versão',
      dataIndex: 'version',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.age - b.age,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Projetos',
      dataIndex: 'project',
      filters: projects.filter(indexUnique).map(project => ({
        text: project,
        value: project,
      })),
      onFilter: (value, record) => record.project.indexOf(value) === 0,
      sorter: (a, b) => a.project.length - b.project.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Placas',
      dataIndex: 'board',
      filters: boards.filter(indexUnique).map(board => ({
        text: board,
        value: board,
      })),
      onFilter: (value, record) => record.board.indexOf(value) === 0,
      sorter: (a, b) => a.board.length - b.board.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  }
  

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}

export default TableComponent;