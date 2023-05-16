import { useState } from 'react'
import './../App.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    if (count < 10) {
      return setCount(count + 1)
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      return setCount(count - 1)
    }
  }

  
  return (
    <>
      <div>
        <button onClick={handleDecrement}>-</button>
        <span>{ count }</span>
        <button onClick={handleIncrement}>+</button>
      </div>
        {/* ini uji coba counter */}
    </>
  )
}

export default Counter
