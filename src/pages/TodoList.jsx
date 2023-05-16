import { useState } from 'react'
import './../App.css'

function TodoList() {
  const [todos, setTodos] = useState([])

  const addTodo = (text) => {
    const newTodos = [...todos,{text}]
    newTodos.push({ text })
    return setTodos(newTodos)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (e.target.todo.value !== "") {
      addTodo(e.target.todo.value)
      e.target.todo.value = ""
    }
  }

//   const handleUpdate = (index) => {
//     console.log(index)
//   }

  const handleDelete = (index) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    return setTodos(newTodos)
  }

  return (
    <>
      <div>
        <h4>todo create</h4>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo.text}
              {/* <button key={index} onClick={() => handleUpdate(index)}>Update</button> */}
              <button key={index} onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor="todo">name </label>
          <input type="text" id="todo" name='todo'/>

          <button type='submit'>submit</button>
        </form>
      </div>
    </>
  )
}

export default TodoList
