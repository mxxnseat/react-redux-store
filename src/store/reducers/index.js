import { combineReducers } from "redux";

import cart from "./cart";
import list from "./list";
import errors from "./errors";

export default combineReducers({
    cart,
    list,
    errors
});