import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Pagination from '../components/Pagination';
import './../App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [currentPage, setCurrentPage] = useState(0); // Step 3
  const itemsPerPage = 4; // Step 4

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text, isComplete: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.todo.value !== '') {
      addTodo(e.target.todo.value);
      e.target.todo.value = '';
      setCurrentTodo({});
    }
  };

  const handleEdit = (id) => {
    setEditTodo(true);
    setCurrentTodo({
      id: todos[id].id,
      text: todos[id].text,
      isComplete: todos[id].isComplete,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateTodos = todos.map((todo) =>
      todo.id === currentTodo.id ? { ...todo, text: currentTodo.text } : todo
    );
    setTodos(updateTodos);
    setEditTodo(false);
    setCurrentTodo({});
  };

  const handleInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleChangeStatus = (id) => {
    const updateTodoStatus = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updateTodoStatus);
  };

  // Step 5
  const offset = currentPage * itemsPerPage;

     return (
    <>
      <div className='max-w-lg'>
        <h1 className='text-3xl font-bold'>Todo List</h1>
        <ol className='m-4 space-y-2 my-11'>
          {todos.length === 0 ? (
            <p className='text-lg font-bold text-gray-400'>Tidak ada tugas</p>
          ) : (
            todos
              .slice(offset, offset + itemsPerPage) // Step 6
              .map((todo) => (
                <li key={todo.id} className='space-x-2 flex justify-start items-center'>
                  {editTodo && currentTodo.id === todo.id ? (
                    <input
                      type='text'
                      value={currentTodo.text}
                      onChange={(e) => handleInputChange(e)}
                      disabled={true}
                      className='input input-bordered w-full max-w-lg'
                    />
                  ) : (
                    <>
                      <input
                        type='checkbox'
                        checked={todo.isComplete}
                        onChange={() => handleChangeStatus(todo.id)}
                        className='checkbox checkbox-accent'
                      />
                      <span
                        style={{ textDecoration: todo.isComplete ? 'line-through' : 'none' }}
                        className='text-lg font-medium pr-5 max-w-lg break-all'
                      >
                        {todo.text}
                      </span>
                      <button
                        className='btn btn-outline btn-warning'
                        onClick={() => handleEdit(todos.indexOf(todo))}
                      >
                        Update
                      </button>
                      <button
                        className='btn btn-outline btn-error'
                        onClick={() => handleDelete(todo.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </li>
              ))
          )}
        </ol>
        <form onSubmit={editTodo ? handleUpdate : handleSubmit} className='flex space-x-3'>
          <input
            type='text'
            id='todo'
            name='todo'
            value={currentTodo.text || ''}
            onChange={(e) => handleInputChange(e)}
            placeholder='Tulis Tugas..'
            required
            className='input input-bordered input-primary w-full max-w-xs'
          />
          <button type='submit' className={editTodo ? 'btn btn-outline btn-warning' : 'btn btn-outline btn-ghost'}>
            {editTodo ? 'Update' : 'Submit'}
          </button>
          {editTodo && <button onClick={() => setEditTodo(false)}>Cancel</button>}
        </form>
           {todos.length !== 0 ? (
              <div className='max-w-lg text-center flex justify-center my-3'>
               <Pagination
                 todos={todos}
                 currentPage={currentPage}
                 itemsPerPage={itemsPerPage}
                 setCurrentPage={setCurrentPage}
               />
              </div>
            ) : ('')}
      </div>
    </>
  );
}

export default TodoList;