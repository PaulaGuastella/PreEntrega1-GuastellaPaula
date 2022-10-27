import React from "react";
import ReactDOM from 'react-dom/client';
import { MdAddShoppingCart } from "react-icons/md";

export const CartWidget = ({producsInCart = 0}) => {
    return (
        <div id="cart"><MdAddShoppingCart/>{producsInCart}</div>
    )
}
