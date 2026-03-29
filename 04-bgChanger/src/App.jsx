

import { useState } from 'react'
import './App.css'

function App() {
    const [color ,_setColor] = useState("olive");

  return (
    
      <div className='w-full h-screen duration-200' 
      style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button
              className='outline-none px-3 py-1 rounded text-white bg-red-500' 
              onClick={()=> _setColor("red")}         
            >
              Red
            </button>
            <button
              className='outline-none px-3 py-1 rounded text-white bg-blue-500'          
              onClick={()=> _setColor("blue")}         
            >
              blue
            </button>
            <button
              className='outline-none px-3 py-1 rounded text-white bg-green-500'          
              onClick={()=> _setColor("green")}         
            >
              green
            </button>
            <button
              className='outline-none px-3 py-1 rounded text-white bg-orange-500'          
              onClick={()=> _setColor("orange")}         
            >
              orange
            </button>
          </div>
        </div>
      </div>
   
  )
}

export default App
