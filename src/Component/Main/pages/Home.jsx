import React, { Component } from 'react';
import ProductList from '../product/ProductList';


import 'react-alice-carousel/lib/alice-carousel.css';

class HomePage extends Component {
    state = {
        products: [
            {
                id: 1,
                title: 'غار یخ مراد',
                pic: 'img/02.jpg',
                desc: `در بخشی از غار ۴ طبقه با اختلاف ارتفاع بیش از ۳۰ متر دیده می ‌شوند.
                 بسیاری از مردم این منطقه در گذشته 
                بر این باور بوده‌ اند که یخ موجود در اعماق غار . . . .`,
                paragraph:``
            },
            {
                id: 2,
                title: 'پل دختر',
                pic: 'img/WhatsApp Image 2020-12-07 at 16.17.58.jpeg',
                desc: `یکی از معمرف ترین جاذبه های شهر کرج پل دختر است که با نام پل سلیمانیه و پل شاه عباسی هم شناخته می ‌شود و از سازه ‌های دوره ی صفویه محسوب می شود و . . .`,
            },
            {
                id: 3,
                title: 'جاده چالوس',
                pic: 'img/WhatsApp Image 2020-12-07 at 16.26.53.jpeg ',
                desc: ` جاده ی چالوس یا جاده ی ۵۹ یکی از معروف ترین و پر مخاطب ترین جاذبه های شهر کرج است. این جاده که یکی از مهم ترین جاده ها برای مردم تهران و کرج   . . .`,

            },
            {
                id: 4,
                title: 'روستای شهرستانک',
                pic: 'img/04.jpg',
                desc: `یکی دیگر از جاذبه های شهر کرج روستای شهرستانک است. این روستا در ارتفاعات البرز مرکزی دقیقا از آنجایی که کوه های جوان و باز خودنمایی می کنند و به . . .`,

            },
         
        ]
    }
    render() {
        // const responsive = {
        //     0: { items: 1 },
        //     568: { items: 2 },
        //     1024: { items: 3 },
        // };
        return (
            <div className="container1 mb-5">
                    <div className="row">
                        <ProductList products={this.state.products} />
                    </div>
            </div>

        );
    }
}

export default HomePage;