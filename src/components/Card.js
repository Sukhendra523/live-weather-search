import React, { useEffect, useState } from "react";
import "./card.css";

const Card = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b14425a6554d189a2d7dc18a8e7d7263`;
      const response = await fetch(url);
      const resJSON = await response.json();
      console.log(resJSON);
      setData(resJSON.main);
    };

    fetchAPI();
  }, [search]);
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputField"
            placeholder="Mumbai"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!data ? (
          <h1>No Data Found</h1>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fas fa-street-view"></i>
              {search}
            </h2>
            <h1 className="temp">{data.temp}</h1>
            <h3 className="tempmin_max">
              Min: {data.temp_min} | Max:{data.temp_max}
            </h3>
          </div>
        )}

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
      </div>
    </>
  );
};

export default Card;
