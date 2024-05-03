/* eslint-disable react/prop-types */
import React from 'react';
import './Search.css';
import { useForm } from 'react-hook-form';

const Search = ({ addTodo }) => {
  // Form validation and submission handling using react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div className='todo-search'>
      {/* Form for adding a new todo */}
      <form
        action=''
        onSubmit={handleSubmit((data) => {
          addTodo(data); // Call addTodo function passed from parent
          reset(); // Reset the form after submission
        })}
      >
        {/* Input field for entering todo task */}
        <input
          type='text'
          id='task'
          placeholder='Enter Todo'
          {...register('task', { required: true })} // Use react-hook-form for validation
        />
        {/* Button to add todo */}
        <button>Add</button>
      </form>
      {/* Display error message if task field is empty */}
      {errors.task?.type === 'required' && (
        <small>This field is required</small>
      )}
    </div>
  );
};

export default Search;
