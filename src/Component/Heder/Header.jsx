import React, { Component } from 'react';
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light  flex-row-reverse Nv">

           


                <form className="container-fluid justify-content-start">
                    <button className="me-2  login-btn" type="button"><a href="sign-up/index.html">ثبت نام</a></button>
                    <button className="me-2  mr-2 logout-btn" type="button"><a href="Login_v11/index.html">ورود</a></button>
                </form>
            </nav>
        </>
    );
}

export default Header;