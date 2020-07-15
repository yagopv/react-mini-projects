import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import { useCart } from "../cart-context";

function ProductDetail() {
  const [product, setProduct] = useState();
  const params = useParams();
  const history = useHistory();
  const { addItemToCart } = useCart();

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/products/${
          params.productDetailId
        }`
      )
      .then(response => setProduct(response.data));
  }, [params.productDetailId]);

  if (!product) return null;

  return (
    <div>
      <a
        href="/"
        onClick={e => {
          e.preventDefault();
          history.goBack();
        }}
      >
        Back
      </a>
      <h3>{product.name}</h3>
      <button onClick={() => addItemToCart(product)}>Add to cart</button>
    </div>
  );
}

export { ProductDetail };
