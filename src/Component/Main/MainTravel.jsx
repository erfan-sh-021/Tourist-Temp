import React, { useEffect, useRef, useState } from "react";
import Map from "../Map/MapComponent";
import { useLottie } from "lottie-react";
import animationData from "./animation/animation.json";
import "./MainTravel.css";
const MainTravel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const h4Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // وقتی عنصر از صفحه خارج شد، کلاس حذف شود
        }
      },
      { threshold: 0.5 } // وقتی 50% از عنصر در صفحه باشد، انیمیشن فعال شود
    );

    if (h4Ref.current) {
      observer.observe(h4Ref.current);
    }

    return () => {
      if (h4Ref.current) {
        observer.unobserve(h4Ref.current);
      }
    };
  }, []);

  const options = {
    animationData,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div>
      <div className="row  T-1 " dir="rtl">
        <div className=" row order-2 T-2 p-3 ">
          <div className="animation">{View}</div>
          <h4
            ref={h4Ref}
            className={`text-xs-justify animated-h4 ${isVisible ? "visible" : ""}`}
          >
            برروی استان مورد نظر خود کلیک کنید تا اماکن تفریحی و گردشگری ان
            استان برای شما نمایش داده شود{" "}
          </h4>
        </div>
        <div className=" ">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MainTravel;
