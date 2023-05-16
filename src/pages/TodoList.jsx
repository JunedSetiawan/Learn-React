import { useState } from 'react'
import './../App.css'
import { v4 as uuidv4 } from 'uuid'

function TodoList() {
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({})

  const addTodo = (text) => {
    const newTodo = { id: uuidv4(), text }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.todo.value !== "") {
      addTodo(e.target.todo.value)
      e.target.todo.value = ""
    }
  }

  const handleEdit = (id) => {
    setEditTodo(true)
    setCurrentTodo({
      id: todos[id].id,
      text: todos[id].text,
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    
    const updateTodos = todos.map((todo) =>
        todo.id === currentTodo.id ? {...todo, text: currentTodo.text } : todo
    )

    setTodos(updateTodos)
    setEditTodo(false)
    setCurrentTodo({})
  }

  const handleInputChange = (e) => {
    setCurrentTodo({ ...currentTodo, text: e.target.value })
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      <div>
        <h4>todo create</h4>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {editTodo && currentTodo.id === todo.id ? (
                <input
                  type="text"
                  value={currentTodo.text}
                  onChange={(e) => handleInputChange(e)}
                  disabled={true}
                />
              ) : (
                  <><span>{todo.text}</span>
                    <button onClick={() => handleEdit(todos.indexOf(todo))}>Update</button>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                  </>
                )}
            </li>
          ))}
        </ul>
        <form onSubmit={editTodo ? handleUpdate : handleSubmit}>
          <label htmlFor="todo">name </label>
          <input
            type="text"
            id="todo"
            name="todo"
            value={currentTodo.text || ""}
            onChange={(e) => handleInputChange(e)}
          />
          <button type="submit">{editTodo ? "Update" : "Submit"}</button>
          {editTodo && <button onClick={() => setEditTodo(false)}>Cancel</button>}
        </form>
      </div>
    </>
  )
}

export default TodoList