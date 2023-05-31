import { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from '../components/Todo/TodoForm';
import TodoHeader from '../components/Todo/TodoHeader';
import TodoItems from '../components/Todo/TodoItems';
import TodoPagination from '../components/Todo/TodoPagination';

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    return storedTodos || []
  });
  const [editTodo, setEditTodo] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = { id: uuidv4(), text, isComplete: false };
      const isDuplicate = todos.some((todo) => todo.text === text);
      if (!isDuplicate) {
        const newTodos = [...todos, newTodo];
        setTodos(newTodos);
      } else {
        alert('list tidak boleh sama')
      }
    }
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
    if (id >= 0 && id < todos.length) {
      setEditTodo(true);
      setCurrentTodo({
        id: todos[id].id,
        text: todos[id].text,
        isComplete: todos[id].isComplete,
      });
    }
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
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex >= 0 && todoIndex < todos.length) {
      const updateTodoStatus = todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
      setTodos(updateTodoStatus);
    }
  };


  const offset = currentPage * itemsPerPage;

     return (
       <>
            <div className='max-w-lg'>
           <TodoHeader headerText="localStorage" />
           <TodoItems
             todos={todos}
             editTodo={editTodo}
             currentTodo={currentTodo}
             handleEdit={handleEdit}
             handleDelete={handleDelete}
             handleChangeStatus={handleChangeStatus}
             handleInputChange={handleInputChange}
             itemsPerPage={itemsPerPage}
             offset={offset}
           />
           <TodoForm
             editTodo={editTodo}
             setEditTodo={setEditTodo}
             handleUpdate={handleUpdate}
             handleSubmit={handleSubmit}
             currentTodo={currentTodo}
             setCurrentTodo={setCurrentTodo}
             handleInputChange={handleInputChange}
           />
           <TodoPagination
             todos={todos}
             currentPage={currentPage} 
             setCurrentPage={setCurrentPage}
             itemsPerPage={itemsPerPage}
           />
           </div>
    </>
  );
}

export default TodoList;