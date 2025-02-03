import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const user = await login(email,password);
      console.log('user logged in : ', user);
    }catch(error){
      alert(error.message)
    }
  };

  return (
    <Container className="login-container" dir='rtl'>
      <Row className="justify-content-md-center" style={{width:'100%'}}>
        <Col xs={12} md={6}>
          <div className="login-box">
            <h2 className="login-title">ورود به حساب کاربری</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>آدرس ایمیل</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                required/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>رمز ورود</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required/>
              </Form.Group>

              <Button type="submit" className="login-btn">
                ورود
              </Button>

              <p className="text-center mt-3">
                حساب کاربری ندارید؟{' '}
                <span onClick={() => navigate('/signup')} className="signup-link">
                  ثبت‌نام کنید
                </span>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
