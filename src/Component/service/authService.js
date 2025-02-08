import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase"

// تابع ثبت‌نام کاربر
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Sign Up Error:", error.message);
        throw error;
    }
};

// تابع ورود کاربر

export const login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Login Error', error.message);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
        console.log("user signed out");
    } catch (error) {
        console.error('logOut Error :', error.message);
    }
};
