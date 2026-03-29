import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-blue-500 text-white p-4'>currency converter  </h1>
    </>
  )
}

export default App
