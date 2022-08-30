import handleCart from "./handleCart";
import {combineReducers} from "redux";  //>> npm install redux react-redux

const rootReducers = combineReducers({
    handleCart,
})

export default rootReducers;