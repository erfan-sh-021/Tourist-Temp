import React, { Component } from 'react';
const MainSearch = () => {
    return (
        <>
            <div className="S-1 ">
                <h1 className="h1 ">پیدا کردن مکان مورد نظر</h1>
                <div className="col-md-7 mx-auto ">
                    <input className="form-control p-4 border-0 shadow text-right" type="search " aria-label="search " placeholder=" ... متن را وارد کنید" />
                </div>
                <img className="float-right " src="https://static.tacdn.com/img2/brand/feed/home_hero_got_illustration.svg " alt=" " />
            </div>
        </>
    );
}

export default MainSearch;