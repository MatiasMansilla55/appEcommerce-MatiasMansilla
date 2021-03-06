import React, { useContext } from "react";
import { context } from "../../api/context/CartContext/CartContext.js";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const resultado = useContext(context);

  return (
    <NavLink to="/cart">
      <span className="rounded material-symbols-outlined ">
        shopping_cart_checkout{resultado.totalProducts() || ""}
      </span>
    </NavLink>
  );
};

export default CartWidget;
