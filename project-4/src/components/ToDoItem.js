import React from "react";
import '../css/Test.css';

const ToDoItem = ({input,listToDo,setListToDo}) => {
    const handleDelete = (e) => {
        e.preventDefault();
        setListToDo([...listToDo.filter(item =>
            item._id !== input._id 
        )]);
    } 
    return(
        <div className="to-do-item">
            <p>{input.input}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ToDoItem;