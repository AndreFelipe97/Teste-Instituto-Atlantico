import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import TableComponent from '../../component/TableComponent';

// import { Container } from './styles';

function FileListing() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function fileListing() {
      const response = await api.get('firmwares')
      setData([...data, ...response.data])
    }

    fileListing()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <TableComponent data={data}/>
}

export default FileListing;