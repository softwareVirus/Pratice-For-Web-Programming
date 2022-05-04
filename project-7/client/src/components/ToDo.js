import React from "react";
import ToDoItem from './ToDoItem'
import '../css/Test.css';

function ToDo({listToDo, setListToDo}) {
    console.log(listToDo)
    return(
        <div className="to-do">
            {listToDo.map(item => {
                return <ToDoItem key={item._id} input={item} listToDo={listToDo} setListToDo={setListToDo}/>
            })}
        </div>
    );
}

export default ToDo;