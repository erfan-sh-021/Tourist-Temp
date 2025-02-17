import React, { Component } from 'react';
import Map from '../Map/MapComponent';
const MainTravel = () => {
    return (
        <>
           
                <div className="row  T-1 " dir='rtl'>
                    <div className=" row order-2 T-2 p-3 " >
                        <h1  >اماکن تفریحی </h1>
                        <h4 className="text-xs-justify ">برروی استان مورد نظر خود کلیک کنید تا اماکن تفریحی و گردشگری ان استان برای شما نمایش داده شود </h4>
                        
                    </div>
                    <div className=" ">
                        <Map/>
                    </div>
                </div>
             
           
        </>
    );
}

export default MainTravel;