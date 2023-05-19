import './App.css'
import ThemeToggle from './components/ThemeToggle'
import Home from './pages/Home'

function App() {
  return (
    <>
      {/* <div className="bg-base-200">
        </div> */}
       <div className="hero min-h-screen sm:h-full bg-base-200">
        <ThemeToggle/>
        <div className="hero-content text-center">
          <Home />
        </div>
        </div>
        
    </> 
  )
}

export default App
