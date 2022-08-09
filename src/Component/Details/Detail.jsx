import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Heder/Header';
import CardDetails from './CardDetails'

const Data = {
    products: [
        {
            images: {
                image1: './img/yakh-moradr/img1',
                image2: './img/yakh-moradr/img2',
                image3: './img/yakh-moradr/img3',
            },
            tittle: 'غار یخ مراد',
            describe: `  غار یخ مراد در آزادبر مربوط به دوران پیش از تاریخ ایران باستان است و در شهرستان کرج، بخش مرکزی، ۴ کیلومتری جنوب گچسر واقع شده و این اثر در تاریخ ۱۰ دی ۱۳۸۱ با شمارهٔ ثبت ۶۵۷۳ به‌عنوان یکی از آثار ملی ایران به ثبت رسیده‌است. این غار دربالای روستای کهنه
                         ده در منطقه گچسر و جاده چالوس واقع شده و از جاذبه‌های طبیعی استان البرز می‌باشد. دریچهٔ ورودی این غار در ارتفاعات کوه‌های منطقه واقع شده‌است و مسیر غار عموماً شیب دار و رو به پایین می‌باشد که نهایتاً با رسیدن به اعماق کوه، با چشمه‌های
                         یخ زده در کف زمین و استالاکتیت‌های اسفنجی غار مواجه می‌شوید. ارتفاع این غار از سطح دریا در حدود ۲۶۴۰ متر می‌باشد و دهانهٔ این غار سه متر پهنا و هشت متر ارتفاع دارد. در ماه‌های اسفند و فروردین، قندیل‌های بسیار زیبای غار در بهترین وضعیت
                         به سر می‌برند. نکتهٔ قابل توجه این غار مطبق بودن آن می‌باشد که در میان غارهای ایران کمتر دیده می‌شود. در بخشی از غار چهار طبقه با اختلاف ارتفاع بیش از ۳۰ متر دیده می‌شوند. مجید کاشیان غار نورد حرفه‌ای باشگاه دماوند و ترسیم‌کننده نقشه غار
                         در توضیحات این غار آورده‌است: «در گذشته مردم بومی بر این باور بوده‌اند که یخ موجود در اعماق غار برای درمان ناباروری زنان خاصیت شفادهنده دارد؛ و وجود کهنه‌های آویخته (دخیل) به دهانه اصلی و درون غار در گذشته که باعث نام‌گذاری روستای مجاور
                         به کهنه ده شده گواه این ادعا است». علی جوانشاد غار نورد و کاشف پیشکسوت باشگاه دماوند در کتاب غار و غارنوردی در مورد تاریخ شکل‌گیری این غار آورده‌است: «به علت وجود فسیلی بر روی سنگ بزرگی در نزدیکی دهانه اصلی از گونه نرم‌تنان دریایی مربوط
                         به دوره سوم زمین‌شناسی به نام (کاردیتا- KARDITA) این نظریه که غار در حدود پنجاه میلیون سال پیش در زیر دریا به‌وجود آمده از صحت بیشتری برخوردار است». (رجوع به کتاب غار و غارنورد – نوشته علی جوانشاد). برای بازدید کامل از این غار نیاز به
                         وسایل حرفه‌ای غارنوردی می‌باشد.`,
            id: 1,
        },
        {
            images: {
                image1: './img/pol-dokhtar/img1',
                image2: './img/pol-dokhtar/img2',
                image3: './img/pol-dokhtar/img3',
            },
            tittle: 'پل دختر',
            describe: ` 
                        پل دختر کرج که با نام پل سلیمانیه و پل شاه عباسی هم شناخته می‌شود از سازه‌های دوره صفویه است که بر روی رودخانه کرج ساخته شده‌است. این پل بر بقایای پلی کهن‌تر منسوب به دوره سلجوقی ایجاد شده‌است و بازسازی آن در دوره صفوی به این سازه نمای پل‌های دوره صفوی
                        را داده است. این اثر که با نام پل دختر کرج با شماره ۳۵۰۱ در تاریخ ۲۵/۱۲/۱۳۷۹ در فهرست آثار ملی ایران به ثبت رسیده، در سالیان گذشته بازسازی و مرمت شده‌است به گونه‌ای که شکل نخستین آن تا اندازه‌ای دگرگون شده‌است. پل تاریخی کرج که در بخش
                        خاوری شهر کرج و در کنار ساختمان تاریخی صمصام منسوب به دوره سلجوقی قرار گرفته‌است، به دلیل چشم‌انداز شهری آن توانایی تبدیل به منطقه گردشگری را داراست. پل دختر در ابتداي ورودي جاده چالوس بعد از سينما هجرت واقع شده است.درازای پل نزدیک به
                        ۶۱ متر و پهنای آن بیش از ۷ متر است. پایه میانی پل، جرز قطوری است که دهانه‌هایی در درون آن و در دو طبقه (روی هم رفته چهار دهانه) جایگزین شده تا گذشته از آزاد کردن پل از بار افزون، بخشی از جریان رود در هنگام طغیان را از خود رها کند و از
                        فشار آب بر سطح پایه جلوگیری شود. دهانه‌های بالایی از راه راهروهایی به دهانه بزرگ و کوچک کناری پیوند دارد. طاق دهانه‌های بزرگتر با کمان نیم دایره اجرا شده‌است، در حالی که کمان دهانه‌های طبقه دوم، به شکل جناغی است. راه دسترسی به دهانه‌های
                        طبقه دوم، از طریق راه پله‌ای است که در دهانه کوچک جایگذاری شده‌است. این دهانه‌ها همچنین محلی برای استراحت و اتراق به‌شمار می‌رفته است.[۷] ستون‌های کناری پل، به جای استوار شدن بر بستر رودخانه بر صخره‌ها و شیب دو سوی رودخانه قرار گرفته‌است
                        و بیشتر از قلوه سنگ و ملات ساروج ساخته شده‌است اما بدنه اصلی پل با آجر بنا شده‌است. به ویژه طاق دهانه بزرگتر با دو لایه آجر ساخته شده‌است. سازه اصلی و باربر که به صورت پله‌ای از پایه تا تاج طاق ادامه دارد، با سه پله به نقطه بالایی پل می‌رسد
                        برای پر کردن سطح پله‌ای و ناصاف آن طاق دومی ساخته شده‌است. روی هم رفته، نمای پل به سبب کمان بزرگ آن، دارای شکوه چشمگیری است
    `,
            id: 2,
        }
    ]

};
function Detail() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
        <Header />
            <CardDetails data={Data.products} />
            <Footer />
        </>
    );
}

export default Detail;