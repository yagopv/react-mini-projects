import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/products`)
      .then(response => setProducts(response.data));
  }, []);

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
          <span>{`$${product.price}`}</span>
        </li>
      ))}
    </ul>
  );
}

export { Products };
