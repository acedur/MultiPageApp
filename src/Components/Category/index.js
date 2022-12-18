import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import Loading from "../Loading";

function Category() {
  const { category } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, [category]);

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

export default Category;
