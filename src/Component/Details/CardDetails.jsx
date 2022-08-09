import React from 'react';
import Slider from "react-slick";
const CardDetails = ({ data }) => {
    return (
        <>
            {data.map((data, index) => {
                
                    <div className=' d-flex flex-wrap content-center' key={data.id}>
                        <h1 className="text-center text-bold">{data.tittle}</h1>
                     
                        <div>
                            <h2>Fade</h2>
                            {/* <Slider {...settings}>
                        <div>
                            <img src={data.images.image1} />
                        </div>
                        <div>
                            <img src={data.images.image1} />
                        </div>
                        <div>
                            <img src={data.images.image1} />
                        </div>
                    </Slider> */}
                        </div>

                        <p className="text-center">
                            {data.describe}
                        </p>
                    </div>
               
            })}
        </>
    );
}

export default CardDetails;