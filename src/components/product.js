import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import addToCart from "../store/actions/addToCart";

const Product = ({ id, name, price, image, addToCart }) => {
    return (
        <div className="product">
            <img className="product__image" src={image} />
            <div className="product__content">
                <div className="product__name">{name}</div>
                <div className="product__price">{price}$</div>
            </div>
            <Button onClick={() => addToCart({ id, name, price, image })} variant="contained" color="secondary">Buy it</Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(addToCart(item))
    }
}

export default connect(null, mapDispatchToProps)(Product);