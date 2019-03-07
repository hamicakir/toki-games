import React from 'react';
import { NavLink } from "react-router-dom";

import './style.scss';

const Header = ({menuItems}) => (
    <div className="headerWrapper">
        {
            menuItems && menuItems.map((menuItem, index) => (
                <NavLink key={`menu-item-${index}`} to={menuItem.path} activeClassName="menu-item-active">{menuItem.text}</NavLink>
            ))
        }
    </div>
);

export default Header;
