import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { deleteTodo } from "../actions/todoActions";


const TodoComponent = () => {
    const todos = useSelector((state) => state.todoReducer.todos);
    const renderTodos = todos.map((todo) => {
        const {userId, id, title, completed} = todo; //Henter ut dataen fra hvert todo
        return (
            <div className="card" key={id}>
  <div className="card-body">
    <h4 className="card-title">{title}</h4>
    <p className="card-text">Completed: {completed.toString()}</p>
    <input type="submit" className="btn btn-danger" value="Delete"/>
    

  </div>
</div>
            
        )
    })

    // function deleteTodo(Id){
    //     axios.delete("https://jsonplaceholder.typicode.com/todos/" + Id)

    // }
    return <>{renderTodos}</>; //Returnerer en hel liste og ikke enkelte, så kaller på listen
    

}

export default TodoComponent;