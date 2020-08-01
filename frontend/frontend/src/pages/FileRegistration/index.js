import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import api from '../../services/api';
import {
  Form,
  Input,
  Button,
  Upload, 
  message
} from 'antd';

import { UploadOutlined } from '@ant-design/icons';

import { ButtonSubmit } from './styles';

function FileRegistration() {
  const [componentSize, setComponentSize] = useState('default');
  const [file, setFile] = useState(null)
  const [values, setValues] = useState({})
  let history = useHistory();
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(`uploading ${info.file}, ${info.fileList}`);
      }
      if (info.file.status === 'done') {
        setFile(info.file['originFileObj'])
      } else if (info.file.status === 'error') {
        message.error(`Falha ao anexar o arquivo ${info.file.name}.`);
      }
    },
  };

  const handleChange = fieldName => event => {
    fieldName === 'version' ? 
      setValues({ ...values, [fieldName]: event.target.value.replace('v', '') }) : 
      setValues({ ...values, [fieldName]: event.target.value });
  }

  const handleSubmit = async () => {
    const data = new FormData()
    data.append('file', file)
    data.append('project', values.project)
    data.append('version', values.version)
    const response = await api.post('/files', data)

    const newFirmware = {
      ...values,
      file_id: response.data.id
    }

    await api.post('/firmwares', newFirmware)
    history.push(`/listagem`)
  }

  return (
    <>
      <Form
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Versão">
          <Input name="version" onChange={handleChange('version')} placeholder="ex: 1_1_0" />
        </Form.Item>
        <Form.Item label="Projeto">
          <Input name="project" onChange={handleChange('project')} />
        </Form.Item>
        <Form.Item label="Placa">
          <Input name="board" onChange={handleChange('board')} />
        </Form.Item>
      </Form>
      <Form
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        encType="multipart/form-data"
      >
        <Form.Item label="Arquivo">
          <Upload {...props} accept='application/*'>
            <Button disabled={values.version && values.project ? false : true}>
              <UploadOutlined /> Anexar arquivo
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <ButtonSubmit htmlType="subbutmit" onClick={() => handleSubmit()} disabled={!values.version && !values.project && !values.board && !file ? true : false}>
            Salvar
          </ButtonSubmit>
        </Form.Item>
      </Form>
    </>
  );
}

export default FileRegistration;