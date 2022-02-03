import React from "react";
import '../css/Test.css';

function Form(props) {
    const randomKey = () => {
        return Math.random()*10000/Math.random()
    }
    const handleInput = (e) => {
        props.setInput(e.target.value)
    } 
    console.log(props.listToDo)
    const handleList = (e) => {
        e.preventDefault();
        if(props.input !== '') {
            props.setListToDo([...props.listToDo,{input:props.input,_id:randomKey()}]);
            props.setInput("");
        }
    }
    return(
        <div className="Form-container">
            <label>
                <input value={props.input} onChange={handleInput} name="input"></input>
                <button type="submit" onClick={handleList}>Add</button>
            </label>
        </div>
    );
}

export default Form;