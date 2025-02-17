import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

 const addProducts = async () => {
    const products =  [
        {
            id: 1,
            title: "غار یخ مراد",
            pic: "https://images.kojaro.com/2022/7/fb25e38e-a51e-4e38-9f7f-d7ed8911c7a9.jpg?w=840&h=560",
            desc: "در بخشی از غار ۴ طبقه با اختلاف ارتفاع بیش از ۳۰ متر دیده می‌شوند. بسیاری از مردم این منطقه در گذشته بر این باور بوده‌ اند که یخ موجود در اعماق غار...",
        },
        {
            id: 2,
            title: "پل دختر",
            pic: "https://images.kojaro.com/2017/8/05218c57-f231-4b6b-b740-ee2f80e9aa4c.jpg",
            desc: "یکی از معروف‌ترین جاذبه‌های شهر کرج پل دختر است که با نام پل سلیمانیه و پل شاه عباسی هم شناخته می‌شود و از سازه‌های دوره صفویه محسوب می‌شود...",
        },
        {
            id: 3,
            title: "جاده چالوس",
            pic: "https://cdn.smtnews.ir/thumbnail/UL5zt73PSjHS/DgHbxnlMXIY4HHxQ1surQAAo85Q3yFplKfjrrTQJMQISG8Fb-tvWQCEK6R5G2jMs3v1XAC0YjKs03C_RWrF534VtW7vP3kog/%D8%AC%D8%A7%D8%AF%D9%87%2B%DA%86%D8%A7%D9%84%D9%88%D8%B3.jpg",
            desc: "جاده چالوس یا جاده ۵۹ یکی از معروف‌ترین و پرمخاطب‌ترین جاذبه‌های شهر کرج است. این جاده که یکی از مهم‌ترین جاده‌ها برای مردم تهران و کرج...",
        },
        {
            id: 4,
            title: "روستای شهرستانک",
            pic: "https://safarmarket.com/blog/data/uploaded_files/270a5ffe63ac9177a15352a5.jpg",
            desc: "یکی دیگر از جاذبه‌های شهر کرج روستای شهرستانک است. این روستا در ارتفاعات البرز مرکزی دقیقا از آنجایی که کوه‌های جوان و باز خودنمایی می‌کنند...",
        },
    ];

    try {
        // هروقت خواستی داده ها به دیتا بیس فایر بیس اضاقه بشه این دستور های زیر را از کامنت در بیاور و صفحه را یکبار رفرش کن
        // for (const product of products) {
        //     await addDoc(collection(db, "products"), product);
        // }
        // console.log("داده‌ها با موفقیت اضافه شدند!");
    } catch (error) {
        console.error("خطا در افزودن داده‌ها:", error);
    }
};
export default addProducts;
// این تابع را صدا بزن تا داده‌ها اضافه شوند
addProducts();
window.addProducts = addProducts;