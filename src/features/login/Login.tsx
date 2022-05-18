import './Login.less';
import banner from './assets/logo.png';
import { Row, Col, Button, Form, Input } from 'apusic-ui';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@feat/auth';

export const Login = () => {
  const [loginForm] = Form.useForm();

  let navigate = useNavigate();
  let location = useLocation();

  let auth = useAuth();

  const { state } = location as any;
  let from = state?.from?.pathname || '/';
  const handleLogin = (user: any) => {
    auth.login(user, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="login-page">
      <div className="login-title">
        <img alt="login-logo" src={banner} height="30px" />
        <div className="login-title-text">API服务治理平台</div>
      </div>
      <div className="login-box">
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div className="user-info-box user-info-box-usually">
              <h2 className="user-info-title">账户登录</h2>
              <Form labelStyle={{}} form={loginForm} onFinish={handleLogin}>
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
                  <Input
                    size="large"
                    prefix={<UserOutlined />}
                    placeholder="用户名"
                    autoComplete="off"
                  />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码!' }]}>
                  <Input.Password size="large" prefix={<LockOutlined />} placeholder="密码" />
                </Form.Item>
                <Form.Item noStyle>
                  <Button type="primary" htmlType="submit" size="large" style={{ marginTop: '0' }}>
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
      <div className="copy-right">© 2000-2022 金蝶天燕云计算股份有限公司版权所有</div>
    </div>
  );
};
