import React from 'react';
import { NavLink } from "react-router-dom";

import './style.scss';

const ErrorPage = () => (
    <div className="wrapper">
        <div>
            <p className="error-text">404</p>
            <NavLink to="/" activeClassName="active">Go to Home</NavLink>
        </div>
    </div>
);

export default ErrorPage
