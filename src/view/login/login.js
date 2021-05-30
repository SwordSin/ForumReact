import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'

import LoginStyle from './style/LoginStyle.module.scss'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 }
}

const tailLayout = {
  wrapperCol: { offset: 5, span: 19 }
}

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={LoginStyle.loginBox}>
      <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={ onFinish }
          onFinishFailed={onFinishFailed}
      >
        <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
            登录
          </Button>
          <Link to="/register">
            <Button type="primary">
              注册
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  )
}


export default Login