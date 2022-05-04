import React,{useState} from 'react';
import Form from './components/Form'
import ToDo from './components/ToDo'
import './App.css'
import { useEffect } from "react";
import axios from 'axios'

function App({value}) {
  
  const [listToDo,setListToDo] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/u/b')
    .then(response => {
      console.log(response)
      setListToDo(response.data)
    })
    .catch(() => console.log("APP ERROR"))
}, []);
  return (
    <div className="App">
      <h1>ToDo APP</h1>
      <Form listToDo={listToDo} setListToDo={setListToDo} value = {value}/>
      <ToDo listToDo={listToDo} setListToDo={setListToDo} />
    </div>
  );
}

export default App;