import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '../service/authService';
import './login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../pages/firebase';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/", { state: { showLoginModal: true } }); // ✅ ارسال state برای نمایش مودال ورود
    } catch (err) {
        setError("ایمیل یا رمز عبور اشتباه است.");
    }
};

  return (
    <Container className="login-container" dir='rtl'>
      <Row className="justify-content-md-center" style={{ width: '100%' }}>
        <Col xs={12} md={6}>
          <div className="login-box">
            <h2 className="login-title">ورود به حساب کاربری</h2>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>آدرس ایمیل</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ایمیل خود را وارد کنید"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>رمز ورود</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
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
              {error && <p style={{ color: 'red' }}>{error}</p>}

            </Form>
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default Login;
