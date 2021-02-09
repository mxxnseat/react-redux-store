const initialState = {
    errors: []
}

export default (state=initialState, {type, payload})=>{
    switch(type){
        case "SET_ERROR":
            return{
                ...state,
                errors: [...state.errors, payload]
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                errors: payload
            }
        default: return state
    }
}