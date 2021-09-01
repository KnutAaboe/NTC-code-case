import {combineReducers} from "redux";
import { todoReducer } from "./todoReducer";

//Kombinerer alle reducerne sammen til en
const allReducers = combineReducers({
    todoReducer
})

export default allReducers;