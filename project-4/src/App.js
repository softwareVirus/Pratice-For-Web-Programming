import React,{useState} from 'react';
import Form from './components/Form'
import ToDo from './components/ToDo'
import './App.css'

function App() {
  const [input,setInput] = useState("");
  const [listToDo,setListToDo] = useState([]);
  return (
    <div className="App">
      <h1>ToDo APP</h1>
      <Form input = {input} setInput={setInput} listToDo={listToDo} setListToDo={setListToDo}/>
      <ToDo input={input} setInput={setInput} listToDo={listToDo} setListToDo={setListToDo} />
    </div>
  );
}

export default App;