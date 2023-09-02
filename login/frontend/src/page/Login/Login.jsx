import React from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

function Login() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    axios.post('http://127.0.0.1/api/login', values)
      .then(response => {
        console.log(response.data);
        message.success("登录成功")
      })
      .catch(error => {
        console.error(error);
        // 处理登录失败逻辑
        message.error("登录失败")
      });
  };

  return (
    <div style={{width:'300px',height:'150px',marginTop:'200px',marginLeft:'600px'}}>
      <div className='login' style={{ display: 'flex', justifyContent: 'center' ,border:'1px solid black'}}>
        <Form form={form} onFinish={onFinish} className='form'>
          <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入你的用户名!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入你的密码!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;