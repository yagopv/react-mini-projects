import React, { useEffect } from "react";
import { useCart } from "../cart-context";

function Confirmation() {
  const { resetCart } = useCart();

  useEffect(() => {
    resetCart();
  }, [resetCart]);

  return <p>Su compra se ha completado con éxito</p>;
}

export { Confirmation };
