import './App.css'
import SideMenu from './components/SideMenu'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'

function App() {
  return (
    <>
      {/* <div className="bg-base-200">
        </div> */}
       <div className="min-h-screen hero sm:h-full bg-base-200">
        <ThemeToggle />
        <SideMenu />
        <div className="hero-content text-center">
          <Home />
        </div>
        </div>
        
    </> 
  )
}

export default App
