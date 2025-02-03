import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import {  useNavigate } from 'react-router';
import './signup.css'; 
const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigation = useNavigate();

    const handleSignUp = async(e) =>{
        e.preventDefault();
        setError(null);
        try{
            const user = await signUp(email,password);
            console.log('User signed up : ' , user)
            navigation('/');
        }catch(error){
            alert(error.massege);
        }
    };
    return (
        <Container dir="rtl" className="signup-container">
        {error &&
            <form className="signup-form">
                <h3 className="signup-title">ثبت نام</h3>
                <div className="mb-3">
                    <label>ایمیل</label>
                    <input type="email" className="form-control" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    <label>رمز عبور</label>
                    <input type="password" className="form-control" placeholder="رمز عبور"   value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary signup-btn">
                        ثبت نام
                    </button>
                </div>

                <p className="forgot-password text-center">
                    آیا قبلاً ثبت‌نام کرده‌اید؟{' '}
                    <span  className="signup-link" onClick={()=>navigation('/Login')}>ورود</span>
                </p>
            </form>
            }
        </Container>
    );
};

export default SignUp;
