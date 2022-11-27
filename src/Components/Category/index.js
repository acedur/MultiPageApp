import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Cards/Card";
import Loading from "../Loading";

function Category() {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      });
  }, [category]);

  if (loading) {
    return (
      <div className="content-container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="content-container">
      {data.map((item) => {
        return <Card data={item} />;
      })}
    </div>
  );
}

export default Category;
