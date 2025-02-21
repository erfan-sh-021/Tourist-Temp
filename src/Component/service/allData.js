import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const addProducts = async () => {
    const products = {
        "East Azerbaijan": [
          {
            "id": 1,
            "title": "Tabriz",
            "picture": "https://example.com/images/tabriz.jpg",
            "description": "تبریز یکی از قدیمی‌ترین و زیباترین شهرهای ایران است که با جاذبه‌هایی مانند بازار تاریخی تبریز و برج مقبره الشعرا شناخته می‌شود."
          }
        ],
        "West Azerbaijan": [
          {
            "id": 2,
            "title": "Urmia",
            "picture": "https://example.com/images/urmia.jpg",
            "description": "ارومیه با دریاچه معروف خود و جاذبه‌های طبیعی دیگر یکی از مقاصد گردشگری محبوب در شمال غرب ایران است."
          }
        ],
        "Ardabil": [
          {
            "id": 3,
            "title": "Ardabil",
            "picture": "https://example.com/images/ardabil.jpg",
            "description": "اردبیل به خاطر چشمه‌های آب گرم و حمام‌های تاریخی معروف است و یکی از مقاصد گردشگری معروف در شمال غرب ایران می‌باشد."
          }
        ],
        "Isfahan": [
          {
            "id": 4,
            "title": "Isfahan",
            "picture": "https://example.com/images/isfahan.jpg",
            "description": "اصفهان با جاذبه‌هایی مانند میدان نقش جهان، سی و سه پل و کاخ چهل ستون، یکی از زیباترین و تاریخی‌ترین شهرهای ایران است."
          }
        ],
        "Alborz": [
          {
            "id": 5,
            "title": "Karaj",
            "picture": "https://example.com/images/karaj.jpg",
            "description": "کرج با کوه‌های البرز و پارک‌های طبیعی مانند پارک جنگلی چیتگر، مکانی عالی برای طبیعت‌گردی و کوهنوردی است."
          }
        ],
        "Ilam": [
          {
            "id": 6,
            "title": "Ilam",
            "picture": "https://example.com/images/ilam.jpg",
            "description": "ایلام با طبیعت بکر و جاذبه‌های تاریخی مانند کاخ‌های هخامنشی و دره‌های زیبای آن، مقصدی جذاب برای گردشگران است."
          }
        ],
        "Bushehr": [
          {
            "id": 7,
            "title": "Bushehr",
            "picture": "https://example.com/images/bushehr.jpg",
            "description": "بوشهر، با سواحل زیبا و تاریخ غنی، مقصدی عالی برای گردشگری ساحلی و بازدید از آثار تاریخی است."
          }
        ],
        "Tehran": [
          {
            "id": 8,
            "title": "Tehran",
            "picture": "https://example.com/images/tehran.jpg",
            "description": "تهران، پایتخت ایران، با جاذبه‌هایی مانند برج میلاد، پارک ملت و موزه‌های متعدد، شهری پر از زندگی و فرهنگ است."
          }
        ],
        "Chaharmahal and Bakhtiari": [
          {
            "id": 9,
            "title": "Chaharmahal and Bakhtiari",
            "picture": "https://example.com/images/chaharmahal.jpg",
            "description": "چهارمحال و بختیاری با طبیعت کوهستانی و دریاچه‌ها و چشمه‌های طبیعی خود، به عنوان مقصدی آرام و دلنشین شناخته می‌شود."
          }
        ],
        "South Khorasan": [
          {
            "id": 10,
            "title": "Birjand",
            "picture": "https://example.com/images/berjand.jpg",
            "description": "بیرجند با آثار تاریخی و جاذبه‌های طبیعی مانند باغ‌ها و کویرهای اطراف آن، مقصدی جذاب برای گردشگران است."
          }
        ],
        "Razavi Khorasan": [
          {
            "id": 11,
            "title": "Mashhad",
            "picture": "https://example.com/images/mashhad.jpg",
            "description": "مشهد، شهری مذهبی با حرم امام رضا (ع)، یکی از مقاصد بزرگ گردشگری مذهبی در ایران است."
          }
        ],
        "North Khorasan": [
          {
            "id": 12,
            "title": "Bojnord",
            "picture": "https://example.com/images/bojnord.jpg",
            "description": "بجنورد به عنوان مرکز خراسان شمالی با طبیعت بکر و جاذبه‌های تاریخی خود، یکی از مقاصد زیبای گردشگری در شمال شرق ایران است."
          }
        ],
        "Khuzestan": [
          {
            "id": 13,
            "title": "Ahvaz",
            "picture": "https://example.com/images/ahvaz.jpg",
            "description": "اهواز با تاریخ و فرهنگ غنی و جاذبه‌های طبیعی همچون رودخانه کارون، یکی از مقاصد مهم در جنوب غرب ایران است."
          }
        ],
        "Zanjan": [
          {
            "id": 14,
            "title": "Zanjan",
            "picture": "https://example.com/images/zanjan.jpg",
            "description": "زنجان، با جاذبه‌هایی مانند گنبد سلطانیه و بازار تاریخی، یکی از مقاصد گردشگری معروف در غرب ایران است."
          }
        ],
        "Semnan": [
          {
            "id": 15,
            "title": "Semnan",
            "picture": "https://example.com/images/semnan.jpg",
            "description": "سمنان با آثار تاریخی و جاذبه‌های طبیعی مانند کویرهای اطراف، مکانی مناسب برای سفرهای ماجراجویانه است."
          }
        ],
        "Sistan and Baluchestan": [
          {
            "id": 16,
            "title": "Zahedan",
            "picture": "https://example.com/images/zahedan.jpg",
            "description": "سیستان و بلوچستان با طبیعت بکر، بیابان‌ها و سواحل طولانی، یکی از مقاصد کمتر شناخته شده گردشگری ایران است."
          }
        ],
        "Fars": [
          {
            "id": 17,
            "title": "Shiraz",
            "picture": "https://example.com/images/shiraz.jpg",
            "description": "شیراز، با تاریخ غنی و جاذبه‌های معروفی مانند تخت جمشید، پاسارگاد، و باغ‌های شیراز، یکی از محبوب‌ترین مقاصد گردشگری ایران است."
          }
        ],
        "Qazvin": [
          {
            "id": 18,
            "title": "Qazvin",
            "picture": "https://example.com/images/qazvin.jpg",
            "description": "قزوین با تاریخچه طولانی و آثار تاریخی مهمی مانند میدان سپه و مسجد جامع قزوین، یکی از مقاصد فرهنگی ایران است."
          }
        ],
        "Qom": [
          {
            "id": 19,
            "title": "Qom",
            "picture": "https://example.com/images/qom.jpg",
            "description": "قم با حرم حضرت معصومه (س) و دیگر جاذبه‌های مذهبی، یکی از شهرهای مهم زیارتی ایران است."
          }
        ],
        "Kurdistan": [
          {
            "id": 20,
            "title": "Sanandaj",
            "picture": "https://example.com/images/sanandaj.jpg",
            "description": "سنندج با فرهنگ کردی و جاذبه‌های طبیعی و تاریخی، یکی از مقاصد گردشگری در غرب ایران است."
          }
        ],
        "Kerman": [
          {
            "id": 21,
            "title": "Kerman",
            "picture": "https://example.com/images/kerman.jpg",
            "description": "کرمان با جاذبه‌هایی مانند قلعه دختر، باغ شاهزاده و کویر لوت، یکی از مقاصد گردشگری در جنوب ایران است."
          }
        ],
        "Kermanshah": [
          {
            "id": 22,
            "title": "Kermanshah",
            "picture": "https://example.com/images/kermanshah.jpg",
            "description": "کرمانشاه با آثار تاریخی مانند طاق بستان و بیستون، یکی از مقاصد تاریخی و فرهنگی ایران است."
          }
        ],
        "Kohgiluyeh and Boyer-Ahmad": [
          {
            "id": 23,
            "title": "Yasuj",
            "picture": "https://example.com/images/yasuj.jpg",
            "description": "یاسوج با طبیعت بکر و کوهستانی و جاذبه‌هایی مانند دریاچه‌های طبیعی، یکی از مقاصد مناسب برای طبیعت‌گردی است."
          }
        ],
        "Golestan": [
          {
            "id": 24,
            "title": "Gorgan",
            "picture": "https://example.com/images/gorgan.jpg",
            "description": "گرگان با جنگل‌های هیرکانی و جاذبه‌های طبیعی دیگر، یکی از مقاصد گردشگری در شمال ایران است."
          }
        ],
        "Gilan": [
          {
            "id": 25,
            "title": "Rasht",
            "picture": "https://example.com/images/rasht.jpg",
            "description": "رشت، با طبیعت سرسبز و جاذبه‌های ساحلی، یکی از مقاصد گردشگری محبوب در شمال ایران است."
          }
        ],
        "Lorestan": [
          {
            "id": 26,
            "title": "Khorramabad",
            "picture": "https://example.com/images/khorramabad.jpg",
            "description": "خرم‌آباد با آثار تاریخی مانند قلعه فلک‌الافلاک و طبیعت بکر، یکی از مقاصد گردشگری در غرب ایران است."
          }
        ],
        "Mazandaran": [
          {
            "id": 27,
            "title": "Sari",
            "picture": "https://example.com/images/sari.jpg",
            "description": "ساری با سواحل زیبای دریای خزر و طبیعت سرسبز، یکی از مقاصد محبوب برای گردشگری ساحلی است."
          }
        ],
        "Markazi": [
          {
            "id": 28,
            "title": "Arak",
            "picture": "https://example.com/images/arak.jpg",
            "description": "اراک با آثار صنعتی و تاریخی، یکی از شهرهای مهم مرکزی ایران است."
          }
        ],
        "Hormozgan": [
          {
            "id": 29,
            "title": "Bandar Abbas",
            "picture": "https://example.com/images/bandarabbas.jpg",
            "description": "بندر عباس با سواحل زیبا و جزایر خارگ و هرمز، یکی از مقاصد گردشگری در جنوب ایران است."
          }
        ],
        "Hamedan": [
          {
            "id": 30,
            "title": "Hamedan",
            "picture": "https://example.com/images/hamedan.jpg",
            "description": "همدان با آثار تاریخی مانند گنبد هگمتانه و آرامگاه باباطاهر، یکی از مقاصد گردشگری تاریخی ایران است."
          }
        ],
        "Yazd": [
          {
            "id": 31,
            "title": "Yazd",
            "picture": "https://example.com/images/yazd.jpg",
            "description": "یزد با بافت تاریخی منحصر به فرد و جاذبه‌هایی مانند برج‌های خاموشان و بادگیرها، یکی از مقاصد فرهنگی و تاریخی ایران است."
          }
        ]
      }
      

    try {
        // هروقت خواستی داده ها به دیتا بیس فایر بیس اضاقه بشه این دستور های زیر را از کامنت در بیاور و صفحه را یکبار رفرش کن
        for (const product of products) {
            await addDoc(collection(db, "products"), product);
        }
        console.log("داده‌ها با موفقیت اضافه شدند!");
    } catch (error) {
        console.error("خطا در افزودن داده‌ها:", error);
    }
};
export default addProducts;
// این تابع را صدا بزن تا داده‌ها اضافه شوند
addProducts();
window.addProducts = addProducts;