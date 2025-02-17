import nature from "../../img/nature5.png";
import React, { Component } from "react";
const MainSearch = () => {
  return (
    <>
      <div className="S-1 ">
        <h1 className="h1">جستجو اماکن تفریحی </h1>
        <div className="I-1 col-md-7 mx-auto ">
          <input
            style={{ maxWidth: "56%" }}
            className=" mx-auto form-control p-4 border-0 shadow text-right"
            type="search "
            aria-label="search "
            placeholder=" ... نام شهر مورد نظر خود را وارد کنید"
          />
        </div>
        <img
          className="im-1 float-right "
          src="https://static.tacdn.com/img2/brand/feed/home_hero_got_illustration.svg "
          alt=" "
        />
        <img className="im-2 float-right" src={nature} alt=" " />
      </div>
    </>
  );
};

export default MainSearch;
