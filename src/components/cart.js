import React from "react";

import { connect } from "react-redux";

import CartItem from "./cartItem";

const Cart = ({ items }) => {
    return (
        <div className="cart">
            {items.length ? items.map(item => <CartItem key={item.id} {...item} />) : <div>Cart is empty</div>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.cart
    }
}

export default connect(mapStateToProps, null)(Cart);