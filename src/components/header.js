import React from "react";
import {Link} from "react-router-dom";

import Cart from "./cartCounter";

export default () => {
    return (
        <header className="header">
            <Link to="/">
                <div className="header__logo">
                    React-redux store
                </div>
            </Link>
            <Link to="/cart">
                <Cart />
            </Link>
        </header>
    )
}