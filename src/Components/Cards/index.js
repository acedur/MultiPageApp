import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import Card from "./Card";

function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  if (data.length === 0) {
    return (
      <div className="loader-container content-container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="content-container">
      {data.map((item) => {
        return <Card key={item.id} data={item} />;
      })}
    </div>
  );
}

export default Cards;
