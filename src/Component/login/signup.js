import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../service/authService";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../pages/firebase";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError(null);
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
        <div>
            <h2>ثبت‌نام</h2>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* نمایش خطا */}
            <form onSubmit={handleSignUp}>
                <input type="email" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">ثبت‌نام</button>
            </form>
        </div>
    );
};

export default SignUp;
