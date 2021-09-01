import { ActionTypes } from "../constants/action-types"

const initialState = {
    todos: [],
}

export const todoReducer = (state=initialState, {type, payload}) => {
    switch (type) { //Utfører actions etter hvilke så blir utført, start staten er da default initialState
        case ActionTypes.SET_TODOS:
            return {...state, todos:payload};

        case ActionTypes.DELETE_TODO:
            return {};

        default:
            return state;
    }

}