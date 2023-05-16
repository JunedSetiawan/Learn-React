import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './pages/Counter'
import Home from './pages/Home'
import Inputdom from './pages/Inputdom'
import TodoList from './pages/TodoList'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/inputdom" element={<Inputdom />} />
      <Route path="/todolist" element={<TodoList />} />
      </Routes>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/counter">Counter Tutorial Page</Link></li>
          <li><Link to="/inputdom">InputDom Tutorial Page</Link></li>
          <li><Link to="/todolist">TodoList Tutorial Page</Link></li>
        </ul>
      </nav>
    </> 
  )
}

export default App
