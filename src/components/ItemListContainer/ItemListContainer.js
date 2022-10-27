import React from "react";
import ReactDOM from 'react-dom/client';

export const Item = ({text,click}) => {
    return (
        <li className="navbar-item" >
            <a onClick={click} href='#'>{text}</a>
        </li>
    )
}
