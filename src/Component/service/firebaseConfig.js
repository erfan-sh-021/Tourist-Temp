import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "./firebaseRealTime"; // اطمینان حاصل کن که app رو ایمپورت کردی

export const db = getFirestore(app); // گرفتن Firestore instance

const getProductsFromFirebase = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "products")); // دریافت کلکشن از فایر استور
        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // تبدیل دیتا به آرایه
        return products;
    } catch (error) {
        console.error("Error reading data from Firestore:", error);
        return [];
    }
};

export { getProductsFromFirebase };
