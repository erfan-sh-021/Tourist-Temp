import { dc } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

 const addProducts = async () => {
    const products = [
        {
            id: 1,
            title: "غار یخ مراد",
            pic: "img/02.jpg",
            desc: "در بخشی از غار ۴ طبقه با اختلاف ارتفاع بیش از ۳۰ متر دیده می‌شوند. بسیاری از مردم این منطقه در گذشته بر این باور بوده‌ اند که یخ موجود در اعماق غار...",
        },
        {
            id: 2,
            title: "پل دختر",
            pic: "img/WhatsApp Image 2020-12-07 at 16.17.58.jpeg",
            desc: "یکی از معروف‌ترین جاذبه‌های شهر کرج پل دختر است که با نام پل سلیمانیه و پل شاه عباسی هم شناخته می‌شود و از سازه‌های دوره صفویه محسوب می‌شود...",
        },
        {
            id: 3,
            title: "جاده چالوس",
            pic: "img/WhatsApp Image 2020-12-07 at 16.26.53.jpeg",
            desc: "جاده چالوس یا جاده ۵۹ یکی از معروف‌ترین و پرمخاطب‌ترین جاذبه‌های شهر کرج است. این جاده که یکی از مهم‌ترین جاده‌ها برای مردم تهران و کرج...",
        },
        {
            id: 4,
            title: "روستای شهرستانک",
            pic: "img/04.jpg",
            desc: "یکی دیگر از جاذبه‌های شهر کرج روستای شهرستانک است. این روستا در ارتفاعات البرز مرکزی دقیقا از آنجایی که کوه‌های جوان و باز خودنمایی می‌کنند...",
        },
    ];

    try {
        for (const product of products) {
            await addDoc(collection(dc, "products"), product);
        }
        console.log("داده‌ها با موفقیت اضافه شدند!");
    } catch (error) {
        console.error("خطا در افزودن داده‌ها:", error);
    }
};
export default addProducts;
// این تابع را صدا بزن تا داده‌ها اضافه شوند
// addProducts();
window.addProducts = addProducts;