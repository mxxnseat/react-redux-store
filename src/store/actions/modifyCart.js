export const minus = (payload)=>{
    return {
        type: "MINUS",
        payload
    }
}
export const plus = (payload)=>{
    return {
        type: "PLUS",
        payload
    }
}
export const deleteItem = (payload)=>{
    return {
        type: "DELETE_ITEM",
        payload
    }
}