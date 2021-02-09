import React from "react";
import {connect} from "react-redux";

const Cart = (props)=>{
    return(
        <div className="cart-counter">
            Cart: {props.count}
        </div>
    )
}

const mapStateToProps = (store)=>{
    return {
        count: store.cart.cart.length
    }
}
export default connect(mapStateToProps)(Cart);