/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { TbEdit } from 'react-icons/tb';
import './TodoList.css';

const TodoList = ({ todos, delTodo, update_todo, complete_todo }) => {
  // State variables
  const [todoId, setTodoId] = useState(0); // ID of the todo being edited
  const [title, setTitle] = useState(''); // Title of the todo being edited
  const [toggle, setToggle] = useState(false); // Toggles the visibility of the editing modal
  const [todo, setTodo] = useState({}); // Todo object being edited
  const titleRef = useRef(null); // Reference to the title input field for editing

  // Function to set todo details for editing
  const todoItem = (task, id, todo) => {
    setTodoId(id);
    setTitle(task);
    setToggle(true);
    setTodo(todo);
  };

  // Function to handle form submission for updating todo
  const handleSubmit = (e) => {
    e.preventDefault();
    update_todo(e, todoId, title); // Call update_todo function passed from parent
    setToggle(false); // Close the editing modal after submission
  };

  return (
    <>
      <div className='todo-list'>
        {/* Render each todo item */}
        {todos?.map((todo, index) => (
          <div className='todo-list-item' key={index}>
            <div className='task'>
              {/* Checkbox to mark todo as complete */}
              <input
                type='checkbox'
                onChange={(e) => complete_todo(e, todo.id, todo)}
              />
              {/* Todo title with strike-through if completed */}
              <p className={todo.completed ? 'strike' : ''}>{todo.title}</p>
            </div>
            <div className='btn-container'>
              {/* Edit button */}
              <div className='edit'>
                <TbEdit
                  size={25}
                  onClick={(e) => todoItem(todo.title, todo.id, todo)}
                />
              </div>
              {/* Delete button */}
              <div className='del'>
                <AiFillDelete size={25} onClick={() => delTodo(todo.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal section for editing todo */}
      {toggle && (
        <div className='modal-container'>
          <div className='modal'>
            <h1>Update Form</h1>
            <form onSubmit={handleSubmit}>
              {/* Input field for updating todo */}
              <input
                type='text'
                ref={titleRef}
                placeholder='Update Todo'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              {/* Submit button */}
              <button type='submit'>Update</button>
            </form>
            {/* Cancel button */}
            <div className='btn-container'>
              <button
                className='cancel mod-btn'
                onClick={() => setToggle(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoList;
