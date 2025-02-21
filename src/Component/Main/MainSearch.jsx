import { useNavigate } from "react-router";
import nature from "../../img/nature5.png";
import React, { useEffect, useState } from "react";

const MainSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (searchTerm.trim()) {
      navigate(`/province/${searchTerm.trim()}`);
    }
  };
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
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
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
