import React,{useState} from 'react';
import '../css/Test.css';
import axios from 'axios'
function Form(props) {
    const [input,setInput] = useState("");
    const randomKey = () => {
        return Math.random()*10000/Math.random()
    }
    const handleInput = (e) => {
        setInput(e.target.value)
    } 
    console.log(props.listToDo)

    const handleList = (e) => {
        e.preventDefault();
        console.log("hello")
        if(input !== '') {
            axios.post('http://localhost:5000/u/a',{
                "input" : input
            })
            .then((response) => {
                        props.setListToDo([...props.listToDo,response.data])
                        console.log(response)
                    }
            )
            .catch(() => console.log("error"))
            setInput("");
        }
    }
    return(
        <div className="Form-container">
            <label>
                <input value={input} onChange={handleInput} name="input"></input>
                <button type="submit" onClick={handleList}>Add</button>
            </label>
        </div>
    );
}

export default Form;