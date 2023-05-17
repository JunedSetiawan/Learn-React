import { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import './../App.css'
import Counter from './Counter'
import Inputdom from './Inputdom'
import TodoList from './TodoList'

function Home() {
  const [selectedComponent, setSelectedComponent] = useState('home')

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'counter':
        return <Counter />;
      case 'inputdom':
        return <Inputdom />;
      case 'todolist':
        return <TodoList />;
      default :
        return <Hero />;
    }
  } 
  
  return (
    <>
      <Navbar setSelectedComponent={setSelectedComponent}/>
      {renderComponent()}
        {/* ini uji coba Home */}
    </>
  )
}

export default Home
