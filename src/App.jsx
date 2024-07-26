import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 let [counter,setCounter] = useState(15);
  // let counter = 5;

  const addValue= ()=>{
    setCounter(counter+1)
}

  const decValue = ()=>{
    setCounter(counter-1);
}
  return (
    <>
      <h1>Counter</h1>

      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br/>
      <br/>
      <button onClick={decValue}>Remove Value</button>


    </>
  )
}

export default App
