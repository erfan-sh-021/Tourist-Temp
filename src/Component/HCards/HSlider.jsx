import { useState, useEffect, useRef } from 'react';

function HSlider({ products }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // برای نگه داشتن رفرنس به اسلایدر
// console.log(products);
  // حرکت به اسلاید بعدی به‌صورت دستی
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % products?.length);
  };

  // حرکت به اسلاید قبلی به‌صورت دستی
  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + products?.length) % products.length);
  };

  // هماهنگ‌سازی اسلاید خودکار بوت‌استرپ با `activeIndex`
  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', (event) => {
        setActiveIndex(event.to); // مقدار activeIndex را با اسلاید جدید هماهنگ کن
      });
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('slid.bs.carousel', () => {});
      }
    };
  }, []);

  return (
    <div className="card mb-3">
      <div className="row g-0 align-items-center">
        <div className="col-md-7 p-3">
          <div className="card-body">
            <h4 className="card-title">{products[activeIndex]?.title}</h4>
            <p className="card-text">{products[activeIndex]?.desc}</p>
            <a href="#" className="btn btn-primary h-btn">اطلاعات بیشتر</a>
          </div>
        </div>
        <div className="col-md-5">
          <div
            id="CarouselTest"
            className="carousel slide"
            data-bs-ride="carousel"
            ref={carouselRef} // مقدار رفرنس را تنظیم می‌کنیم
          >
            <div className="carousel-indicators">
              {products.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#CarouselTest"
                  data-bs-slide-to={index}
                  className={activeIndex === index ? 'active' : ''}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {products.map((product, index) => (
                <div key={index} className={`carousel-item ${activeIndex === index ? 'active' : ''}`}>
                  <img src={product.pic} className="d-block w-100 img-fluid" alt={product.title} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" onClick={prevSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" onClick={nextSlide}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HSlider;
