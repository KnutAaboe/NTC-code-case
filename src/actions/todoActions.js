import { ActionTypes } from "../constants/action-types"

//Lager/definerer de ulike actions som vil bli kalt/gjort på nettsiden.

export const setTodos = (todos) => {
    return {
        type: ActionTypes.SET_TODOS, //navn på action
        payload: todos //dataen som blir sendt rundt i reducerne
    };
};

export const deleteTodo = () => {
    return {
        type: ActionTypes.DELETE_TODO,
    };
};

export const addTodo = (todo) => {
    return {
        type: ActionTypes.ADD_TODO,
        payload: todo
    };
};