const initialState = {
    list: [],
    sortBy: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_LIST":
            return {
                ...state,
                list: Array.prototype.concat(...state.list, payload)
            }
        case "CLEAR_LIST":
            return{
                ...state,
                list: [],
                sortBy: ''
            }
        case "BY_PRICE_ASC":
            return {
                ...state,
                list: [...state.list.sort((prev, next) => {
                    if (prev.price >= next.price) {
                        return -1;
                    }
                })],
                sortBy: "by_price"
            }
        case "BY_PRICE_DESC":
            return {
                ...state,
                list: [...state.list.sort((prev, next) => {
                    if (prev.price <= next.price) {
                        return -1;
                    }
                })],
                sortBy: "by_price_up"
            }
        case "SEARCH":
            return {
                ...state,
                list: [...payload]
            }


        default: return state;
    }
}