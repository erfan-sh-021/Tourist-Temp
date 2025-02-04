import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../service/authService";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../pages/firebase";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import './signup.css'

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
        if (password !== confirmPassword) {
            setError("رمز عبور و تکرار رمز عبور باید یکی باشند.");
            return;
        }
        try {
            // سعی کن ثبت‌نام انجام بده
            await signUp(email, password);
            await signInWithEmailAndPassword(auth, email, password); // لاگین خودکار بعد از ثبت‌نام
            navigate("/"); // به صفحه اصلی هدایت شود
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("این ایمیل قبلاً ثبت شده است. لطفاً وارد شوید.");
                setTimeout(() => navigate("/login"), 2000); // بعد از ۲ ثانیه هدایت به صفحه ورود
            } else {
                setError(error.message);
            }
        }
    };

    return (
        <div className="login-container ">
            <div className="login-box" dir="rtl">
                <h2 className="login-title">ثبت‌نام</h2>
                {error && <p style={{ color: "red" }}>{error}</p>} {/* نمایش خطا */}
                <Container>
                    <Row className="justify-content-md-center mt-5">
                        <Col xs={12} md={12}>
                            <Form onSubmit={handleSignUp}>
                                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                                    <Form.Label>ایمیل</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="ایمیل را وارد کنید"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3 form-group" controlId="formBasicPassword">
                                    <Form.Label>رمز ورود</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="رمز عبور را وارد کنید"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} required
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 form-group" controlId="formConfirmPassword">
                                    <Form.Label>تکرار رمز ورود</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="تکرار پسورد را وارد کنید"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)} required
                                        className="form-control"
                                    />
                                </Form.Group>

                                <Button type="submit" className="login-btn">
                                    ثبت‌نام
                                </Button>
                            </Form>
                            <p>
                                <span>حساب کاربری دارید؟ </span>
                                <a href="/login" className="signup-link">ورود</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default SignUp;
