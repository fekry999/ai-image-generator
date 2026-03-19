import { useState } from 'react'
import imageGenerator from './compnents/imageGenerator/imageGenerator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <imageGenerator />
    </>
  )
}

export default App
