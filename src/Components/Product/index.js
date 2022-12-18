import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import Loading from "../Loading";

function Product() {
  const { product } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, [product]);

  if (data.length === 0) {
    return (
      <div className="loader-container content-container">
        <Loading />
      </div>
    );
  }
  return (
    <div className="content-container">
      <Card data={data} singleProduct={true} />
    </div>
  );
}

export default Product;
