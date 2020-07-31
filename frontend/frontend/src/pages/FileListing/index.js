import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import TableComponent from '../../component/TableComponent';

// import { Container } from './styles';

function FileListing() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fileListing() {
      const response = await api.get('firmwares')
      const firmwares = []
      response.data.map(r => firmwares.push({
        version: r.version,
        project: r.project,
        board: r.board,
        name: r.file.name,
      }))
      setData([...data, ...firmwares])
    }

    fileListing()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <TableComponent data={data}/>
}

export default FileListing;