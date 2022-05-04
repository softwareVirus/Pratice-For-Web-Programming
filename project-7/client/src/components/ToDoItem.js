import React from "react";
import '../css/Test.css';
import axios from 'axios';

const ToDoItem = ({input,listToDo,setListToDo}) => {
    const handleDelete = (e) => {
        e.preventDefault();
        setListToDo([...listToDo.filter(item =>
            item._id !== input._id 
        )]);

        axios.delete('http://localhost:5000/u/c',{
            headers:{"_id":input._id}
        })
        .then(() => console.log("deleted")).catch(err => console.log(err))
    } 
    return(
        <div className="to-do-item">
            <p>{input.input}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ToDoItem;