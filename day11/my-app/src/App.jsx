import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hello world</p>
      <p>Bye world</p>
      <p>sum of 1 and 1 is {1+1}</p>
    </>
  )
}

export default App
