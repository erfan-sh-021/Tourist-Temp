import React, { Component } from 'react';
const MainTravel = () => {
    return (
        <>
           
                <div className="row  T-1 " dir='rtl'>
                    <div className=" row order-2 T-2 p-3 " >
                        <h1  >ذخیره ایده های سفر خود را شروع کنید</h1>
                        <h4 className="text-xs-justify ">برای ذخیره و سازماندهی همه ایده های سفر خود یک سفر ایجاد کنید و آنها را بر روی نقشه مشاهده کنید</h4>
                        <button type="button " className=" B-1  ">سفر ایجاد کنید</button>
                    </div>
                    <div className=" ">
                        <img src="https://static.tacdn.com/img2/brand/trips/image_trips_card_medium.png " alt=" " />
                    </div>
                </div>
             
           
        </>
    );
}

export default MainTravel;