import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import React, { useState, useEffect } from 'react';
import { getDataFromFirebase } from '../service/firebase';
import '../../css/slider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);
  const [hotelCards, setHotelCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,   // حتماً فعال باشد
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,  // این مقدار باید فعال باشد
    centerPadding: "10px", // مقدار کم ولی نه 0
    responsive: [
      { breakpoint: 2561, settings: { slidesToShow: 6 } },
      { breakpoint: 1441, settings: { slidesToShow: 4 } },
      { breakpoint: 1025, settings: { slidesToShow: 3 } },
      { breakpoint: 769, settings: { slidesToShow: 2 } },
      { breakpoint: 430, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataFromFirebase();
        setHotelCards(data)
      } catch (error) {
        console.error("خطا در دریافت داده‌ها از Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">درحال بارگذاری ...</div>;
  }

  return (
    <div className="C-1 container-fluid">
      <Slider ref={setSliderRef} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index} className="card Sliderstyle">
            <img src={card.imageSrc} alt={card.title} className="card-image" />
            <div className="text-infoo" dir="rtl">
              <div className="card-header c_header">
                <h2>{card.title}</h2>
                <span className="text-success">{card.pricingText}</span>
              </div>
              <p>{card.description}</p>
              <ul className="items">
                {card.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <button>انتخاب</button>
          </div>
        ))}
      </Slider>
      <div className="C-2 controls d-flex justify-content-center">
        <button onClick={() => sliderRef?.slickPrev()}>
          <FaChevronLeft />
        </button>
        <button onClick={() => sliderRef?.slickNext()}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}