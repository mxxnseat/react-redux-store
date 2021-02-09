import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";

import {connect} from "react-redux";

import { minus, plus, deleteItem } from "../store/actions/modifyCart";

const Item = ({ minus, plus, deleteItem, image, name, id}) => {
    return (
        <div className="cart__item">
            <img className="cart__image" src={image} />
            <div className="cart__name">{name}</div>
            <DeleteIcon onClick={() => deleteItem(id)} />
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        minus: (id) => dispatch(minus(id)),
        plus: (id) => dispatch(plus(id)),
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}

export default connect(null, mapDispatchToProps)(Item);