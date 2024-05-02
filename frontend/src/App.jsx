import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  // state
  const [todos, setTodos] = useState([])

  //connect browser to django api
  useEffect(()=> {
    axios.get(import.meta.env.VITE_API_URL)
    .then(res => console.log(res.data))
  },[])
  return (
    <>
      
    </>
  )
}

export default App
