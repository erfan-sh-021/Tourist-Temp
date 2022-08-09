import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const data = props.data;
    return (
        <>
            <div className="card mb-5" >
                <img src={data.pic} alt="" className="card-img-top c_img" style={{ height: '170px' }} />
                <div className="Cardd">
                    <h5 className=" card-header d-flex justify-content-center">{data.title}</h5>
                    <p className='card-text text-center desc' style={{ maxHeight: '100px',overflow:'hidden' }} dir="rtl">{data.desc}</p>
                </div>
                <button className="btn ">
                    {/* <svg width="301px" height="45px" viewBox="0 0 180 25" class="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                    </svg> */}
                    <Link to={'/detail/' + data.id}><span>ادامه مطلب</span></Link>
                </button>
            </div>
        </>
    );
}

export default Product;