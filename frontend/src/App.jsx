import { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './components/Search/Search';
import TodoList from './components/TodoList/TodoList';

import './App.css';

function App() {
  // State variables for todos and errors
  const [todos, setTodos] = useState([]);
  const [errors, setErrors] = useState();

  // Fetch todos from the API
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((res) => {
        // If data is an array, update todos state
        if (Array.isArray(res?.data)) {
          setTodos(res?.data);
        } else {
          setTodos([]); // If not array, set todos to empty array
        }
      })
      .catch((err) => setErrors(err.message)); // Set errors if request fails
  }, []);

  // Function to add a new todo
  const addTodo = (data) => {
    const newTodo = {
      title: data.task, // Use the task data as the title
      id: todos.length > 0 ? parseInt(todos[todos.length - 1].id) + 1 : 1, // Generate unique id
      completed: false,
    };

    // Post new todo to the API
    axios
      .post(import.meta.env.VITE_API_URL, newTodo)
      .then((res) => setTodos([...todos, res.data])) // Update todos state with the new todo
      .catch((err) => setErrors(err.message)); // Set errors if request fails
  };

  // Function to delete a todo
  const delTodo = (id) => {
    axios
      .delete(import.meta.env.VITE_API_URL + '/' + id)
      .then(() => {
        // Remove the deleted todo from the state
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => setErrors(err.message)); // Set errors if request fails
  };

  // Function to update a todo
  const updateTodo = (e, id, text) => {
    e.preventDefault();

    const updatedTodo = { title: text }; // Construct the updated todo object

    // Patch updated todo to the API
    axios
      .patch(`${import.meta.env.VITE_API_URL}/${id}`, updatedTodo)
      .then(() => {
        // Update the todo item in the frontend state
        setTodos(todos.map((t) => (t.id === id ? { ...t, title: text } : t)));
      })
      .catch((err) => setErrors(err.message)); // Set errors if request fails
  };

  // Function to mark a todo as completed or incomplete
  const completeTodo = (e, id, todo) => {
    const completed = e.target.checked; // Check if todo is completed

    // Update todo completion status in the frontend state
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed } : todo
      )
    );

    const updatedTodo = { ...todo, completed: completed }; // Updated todo object

    // Patch updated todo to the API
    axios.patch(import.meta.env.VITE_API_URL + '/' + id, updatedTodo);
  };

  return (
    <div className='todo-container'>
      {/* Display errors if any */}
      {errors && <p>{errors}</p>}
      {/* Search component for adding new todos */}
      <Search addTodo={addTodo} />
      {/* TodoList component to display todos */}
      <TodoList
        todos={todos}
        delTodo={delTodo}
        update_todo={updateTodo}
        complete_todo={completeTodo}
      />
    </div>
  );
}

export default App;
