import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoComponent from "./TodoComponent";
import axios from "axios";
import {setTodos} from "../actions/todoActions"

const Todos = () => {
    //Bruke useSelector for å få tilgang til/"fetche" Redux store dataen
    const todos = useSelector((state) => state);
    const dispatch = useDispatch();

    //Fetche dataen fra url'n, async await for å ikke måtte vente til alt blir loadet før vi går videre i koden
    const fetchTodos = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos").catch((error) => {
            console.log("Error message: ", error);
        });
        //For å fortelle til components at state har blitt updatert
        dispatch(setTodos(response.data))
    };

    //For å rendre dataen hver gang noe forrandrer seg
    useEffect(() => {
        fetchTodos();
        // eslint-disable-next-line
    }, []);
    return(<div className="container"><h1>Todos</h1><TodoComponent /></div>)
}

export default Todos;