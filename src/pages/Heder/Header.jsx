import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSpring, animated } from '@react-spring/web';
import { Sun, Moon } from 'react-feather';
import { useDarkMode } from '../them/ThemeContext';
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [user, setUser] = useState(null); // ذخیره وضعیت کاربر

    // بررسی وضعیت کاربر هنگام لود شدن کامپوننت
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/", { state: { showLogoutModal: true } }); // ✅ ارسال state برای نمایش مودال خروج
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };


    const iconAnimation = useSpring({
        transform: darkMode ? 'rotate(180deg)' : 'rotate(0deg)',
        opacity: 1,
        config: { tension: 200, friction: 10 }
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <nav className="navbar Nv">

            {user ? (
                <button className="me-2 logOut-header-btn" type="button" onClick={handleLogout}>
                    خروج
                </button>
            ) : (
                <button className="me-2 login-header-btn" type="button" onClick={() => navigate('/login')}>
                    ورود
                </button>
            )}

            <ul>
                <li>مشاهدات</li>
                <li>سفرها</li>
                <li>خلاصه سفر</li>
                <li>بیشتر</li>
            </ul>
            <h1 className='logo' onClick={() => navigate('/')}>سفرکده</h1>
            <button className={`dark-mode-btn ${darkMode ? 'dark' : 'light'}`} onClick={toggleDarkMode}>
                <animated.div style={iconAnimation}>
                    {darkMode ? <Sun size={24} color="#fff" /> : <Moon size={24} color="#fff" />}
                </animated.div>
            </button>
        </nav>
    );
};

export default Header;
