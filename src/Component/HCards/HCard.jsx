import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./HCard.css";
import { collection, getDocs } from "firebase/firestore";

import { getProductsFromFirebase } from "../service/firebaseConfig";
import HSlider from "./HSlider";

const HCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsLists = await getProductsFromFirebase();
        setProducts(productsLists);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  // console.log("Fetched Products:", products[0]);
  return (
    <div className="container py-3 " dir="rtl">
      <div className="title h1 text-center mt-5">اماکن گردشکری استان ها</div>

      <HSlider products={products} />

      <div className="row g-3">
        <div className="col-md-6">
          <div className="card  d-flex flex-row align-items-center  HCard">
            <div className="col-5 p-0  h-100">
              <img
                className=" rounded-end w-100  h-100"
                src={products[0]?.picture                }
                alt=""
              />
            </div>
            <div className="col-7 ">
              <p className="card-text ">{products[0]?.title}</p>
              <p className="card-text H-text">{products[0]?.description}</p>
              <a href="#" className="btn btn-primary  h-btn">
                اطلاعات بیشتر
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="card  d-flex flex-row align-items-center  HCard">
            <div className="col-5 p-0 h-100 ">
              <img
                className=" rounded-end w-100 h-100 object-fit-cover"
                src={products[1]?.picture}
                alt=""
              />
            </div>
            <div className="col-7 ">
              <p className="card-text ">{products[1]?.title}</p>
              <p className="card-text H-text">{products[1]?.description}</p>
              <a href="#" className="btn btn-primary h-btn">
                اطلاعات بیشتر
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HCard;
