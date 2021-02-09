const initialState = {
    cart: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "ADD_TO_CART":
            let cart;
            if(!state.cart.find(item=>item.id==payload.id)){
                cart = Array.prototype.concat(...state.cart, payload);
            }else{
                cart = [...state.cart];
            }
            return {
                ...state,
                cart
            }
        case "DELETE_ITEM":
            return {
                ...state,
                cart: state.cart.filter(product=>product.id!=payload)
            }
        default: return state;
    }
}