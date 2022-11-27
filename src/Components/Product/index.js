import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import Loading from "../Loading";

function Product() {
  const { product } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${product}`)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }, [product]);

  if (loading) {
    return (
      <div className="content-container">
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
