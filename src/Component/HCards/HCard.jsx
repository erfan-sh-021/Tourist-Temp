import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './HCard.css'
import { collection, getDocs } from "firebase/firestore";
import { getProductsFromFirebase } from "../service/firebaseConfig";
import HSlider from "./HSlider";

const HCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsList = await getProductsFromFirebase();
      // console.log("Fetched Products from Firebase:", productsList);
      setProducts(productsList);
    };

    fetchProducts();
  }, []);
  // console.log("Fetched Products:", products[0]);
  return (
    <div className="container py-3 " dir="rtl">
      <div className="title h1 text-center mt-5">اماکن گردشکری استان ها</div>

      <HSlider products={products}/>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card  d-flex flex-row align-items-center  HCard">
            <div className="col-5 p-0  h-100">
              <img className=" rounded-end w-100  h-100" src={products[0]?.pic} alt="" />
            </div>
            <div className="col-7 ">
              <p className="card-text ">{products[0]?.title}</p>
              <p className="card-text H-text">{products[0]?.desc}</p>
              <a href="#" className="btn btn-primary  h-btn">اطلاعات بیشتر</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="card  d-flex flex-row align-items-center  HCard">
            <div className="col-5 p-0 h-100 ">
              <img className=" rounded-end w-100 h-100 object-fit-cover" src={products[1]?.pic} alt="" />
            </div>
            <div className="col-7 ">
              <p className="card-text ">{products[1]?.title}</p>
              <p className="card-text H-text">{products[1]?.desc}</p>
              <a href="#" className="btn btn-primary h-btn">اطلاعات بیشتر</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCard;
