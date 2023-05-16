import { useState } from 'react'
import './../App.css'

function Inputdom() {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    return setInput(e.target.value)
  }

  return (
    <>
      <div>
        <p>{input}</p>
        <input type="text" onChange={handleInput} />
      </div>
        {/* ini uji coba input onChange text */}
    </>
  )
}

export default Inputdom
