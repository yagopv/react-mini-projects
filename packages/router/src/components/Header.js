import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart-context";

function Header() {
  const { totalItems } = useCart();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Items - {totalItems}</Link>
    </nav>
  );
}

export { Header };
