import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Header from "./components/header";
import mainPage from "./components/mainPage";
import Cart from "./components/cart";


export default () => {
    return (
        <div className="container">
            <Header />
            <Switch>
                <Route path="/" exact component={mainPage} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </div>
    );
};