import React from 'react';
import { Table } from 'antd';


// import { Container } from './styles';

function TableComponent({data}) {
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
      filters: [
        {
          text: 'A',
          value: 'A',
        },
        {
          text: 'B',
          value: 'B',
        },
      ],
      onFilter: (value, record) => record.project.indexOf(value) === 0,
      sorter: (a, b) => a.project.length - b.project.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Placas',
      dataIndex: 'board',
      filters: [
        {
          text: 'A',
          value: 'A',
        },
        {
          text: 'B',
          value: 'B',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
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