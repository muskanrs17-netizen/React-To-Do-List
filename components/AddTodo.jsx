import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, resetTodos } from '../redux/todoSlice';
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
});

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleAddTodo = () => {
    if (text.trim() === '') {
      Toast.fire({
        icon: 'error',
        title: 'Todo Cannot Be Empty!'
      });
      setIsInputEmpty(true);
      return;
    }

    if (todos.some((todo) => todo.text === text)) {
      Toast.fire({
        icon: 'warning',
        title: 'Todo Already Exists!'
      });
      return;
    }

    dispatch(addTodo(text));
    setText('');
    setIsInputEmpty(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div className="mb-6 flex items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          setIsInputEmpty(false);
        }}
        onKeyDown={handleKeyPress}
        placeholder="Add a new Todo"
        className={`w-96 p-3 rounded border${isInputEmpty ? ' border-red-500' : ''}`}
      />
      <button
        onClick={handleAddTodo}
        className="addremove-button bg-blue-500 text-white p-3 rounded ml-3 w-20 hover:bg-blue-400"
      >
        Add
      </button>
      <button
          onClick={() => dispatch(resetTodos())}
          className="addremove-button bg-red-500 text-white p-3 rounded ml-3 w-20 hover:bg-red-400"
        >
          Clear
      </button>
    </div>
  );
};

export default AddTodo;