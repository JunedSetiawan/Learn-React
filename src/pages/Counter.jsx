import { useState } from 'react'
import './../App.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    if (count < 100) {
      return setCount(count + 1)
    }
  }

  const handleDecrement = () => {
    if (count > 0) {
      return setCount(count - 1)
    }
  }

  
  return (
    <div className='max-w-md space-x-3'>
      <h1 className='ml-2 my-2 text-2xl font-bold'>Counter</h1>
        <button className='btn btn-square btn-outline btn-primary font-black' onClick={handleDecrement}>-</button>
        <span className='text-xl font-bold'>{ count }</span>
        <button className='btn btn-square btn-outline btn-primary font-black' onClick={handleIncrement}>+</button>
      </div>
    )
}

export default Counter
