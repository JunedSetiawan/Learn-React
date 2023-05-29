import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import './../App.css'
import ChangeBackground from './ChangeBackround'
import Counter from './Counter'
import Inputdom from './Inputdom'
import TodoList from './TodoList'

function Home() {
  const [selectedComponent, setSelectedComponent] = useState('home')
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const component = location.pathname.substring(1);
    if (component && component !== selectedComponent) {
      setSelectedComponent(component);
    }
    setLoading(false); // Menghentikan loading setelah pembaruan selesai
  }, [location, selectedComponent]);

  if (loading) {
    return <div><button className="btn loading">loading</button></div>; // Tampilkan indikator loading saat pembaruan sedang berlangsung
  }

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'counter':
        return <Counter />;
      case 'inputdom':
        return <Inputdom />;
      case 'todolist':
        return <TodoList />;
      case 'changebackground':
        return <ChangeBackground />;
      default :
        return <Hero />;
    }
  } 
  
  return (
    <>
      {renderComponent()}
      <Navbar setSelectedComponent={setSelectedComponent}/>
        {/* ini uji coba Home */}
    </>
  )
}

export default Home
