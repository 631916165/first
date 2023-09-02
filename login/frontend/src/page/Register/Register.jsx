import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    axios
      .post('http://127.0.0.1/api/register', values)
      .then((response) => {
        console.log(response.data);
        message.success('注册成功');
        form.resetFields();
      })
      .catch((error) => {
        console.error(error);
        message.error('注册失败');
      });
  };

  return (
    <div style={{width:'300px',height:'150px',marginTop:'200px',marginLeft:'600px'}}>
      <div className='register' style={{ display: 'flex', justifyContent: 'center' ,border:'1px solid black'}}>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入你的用户名！' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入你的密码！' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;