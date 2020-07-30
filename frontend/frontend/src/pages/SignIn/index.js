import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';
import { signInRequest } from '../../store/module/auth/actions';

// import { Container } from './styles';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 24 },
};

function SignIn() {
  const [values, setValues] = useState({})

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth)

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = fieldName => event => {
    setValues({ ...values, [fieldName]: event.target.value });
  }

  const handleSubmit = async () => {
    const {email, password} = values
    dispatch(signInRequest(email, password))
  }

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: 'Por favor dígite um e-mail válido' }]}
      >
        <Input type="email" name="email" placeholder="Ex: exemple@exemplo.com" onChange={handleChange('email')} />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Por favor dígite um senha!' }]}
      >
        <Input.Password name="password" onChange={handleChange('password')} />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Lembre-me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="button" onClick={() => handleSubmit()}>
          {loading ? 'Carregando' : 'Entrar'}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignIn;