import React from "react";
import { useHistory } from "react-router";
import { useCart } from "../cart-context";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    totalPrice,
    totalItems,
    removeItemFromCart,
    addItemToCart,
    removeItem
  } = useCart();
  const history = useHistory();

  return (
    <React.Fragment>
      <ul>
        {cart.map(item => (
          <li>
            <p>
              <Link to={`/product/${item.id}`}>{`item.name (x${
                item.quantity
              })`}</Link>
              <span>{`$${item.price} - `}</span>
              <button
                onClick={e => {
                  e.preventDefault();
                  addItemToCart(item);
                }}
              >
                +
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  removeItemFromCart(item);
                }}
              >
                -
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  removeItem(item.id);
                }}
              >
                Remove
              </button>
            </p>
          </li>
        ))}
      </ul>
      <p>Total price = {`$${totalPrice}`}</p>
      {totalItems > 0 && (
        <button onClick={() => history.push("/confirmation")}>Comprar</button>
      )}
    </React.Fragment>
  );
}

export { Cart };
