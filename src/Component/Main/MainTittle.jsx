import React, { Component } from 'react';
import { FaHotel, FaDollarSign,FaCheck,FaUtensils,FaPen,FaFile,FaPlane } from 'react-icons/fa'
const MainTittle = () => {
    return (
        <>
            <div className="Travel-item d-flex flex-row-reverse  col-lg-12  justify-content-around flex-wrap">

                <a href="">
                    <div className="d-flex w-100 h-100 align-items-center justify-content-center">
                        <p className="mr-4 m-0 py-3">هتل ها</p>
                        <FaHotel className='HederSvg'/>
                    </div>

                </a>

                <a href=" ">
                    <div className="d-inline-flex w-100 h-100 align-items-center d-flex justify-content-center">
                        <p className="mr-4 mr-4 m-0 py-3 ">اجاره خانه</p>
                        <FaDollarSign />
                    </div>

                </a>
                <a href=" ">
                    <div className="d-inline-flex w-100 h-100 align-items-center justify-content-center">
                        <p className="mr-4 mr-4 m-0 py-3">مراحل کار</p>
                        <FaCheck />
                    </div>

                </a>
                <a href=" ">
                    <div className="d-inline-flex w-100 h-100 align-items-center justify-content-center">
                        <p className="mr-3 mr-4 m-0 py-3 ">رستوران ها</p>
                        <FaUtensils />
                    </div>

                </a>
                <a href=" ">
                    <div className="d-inline-flex w-100 h-100 align-items-center justify-content-center">
                        <p className="mr-4 mr-4 m-0 py-3 ">انتقادات</p>
                        <FaPen />
                    </div>

                </a>
                <a href=" ">
                    <div className="d-inline-flex w-100 h-100 align-items-center justify-content-center">
                        <p className=" mr-3 mr-4 m-0 py-3 ">فرم های سفر</p>
                        <FaFile />
                    </div>

                </a>
                <a href=" ">
                    <div className="d-inline-flex w-100 h-100 align-items-center justify-content-center">
                        <p className="mr-4 mr-4 m-0 py-3 ">پرواز ها</p>
                        <FaPlane />
                    </div>

                </a>

            </div>
        </>
    );
}

export default MainTittle;