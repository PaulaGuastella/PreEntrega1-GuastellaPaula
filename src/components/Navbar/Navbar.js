import React from "react";
import ReactDOM from 'react-dom/client';
import {Item} from '../ItemListContainer/ItemListContainer';
import {CartWidget} from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <nav id="navbar">
            <ul id="menu">
                <Item text={'Productos'} onclick={OnClickMenu}/>
                <Item text={'Nosotros'} onclick={OnClickMenu}/>
                <Item text={'Registrarse'} onclick={OnClickMenu}/>
            </ul>
            <CartWidget/>
        </nav>
    )
}

const OnClickMenu = () => {
    return (
        alert('Ha clickeado el menú ')
    )
}