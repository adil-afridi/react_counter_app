import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const incrementHandler = () =>{
    setCount(count + 1)
  }


  const decrementHandler = () =>{
   if(count > 0){
    setCount(count - 1)
   }
  }

   const resetHandler = () =>{
    setCount(0)
   }

   const buttonStyle = {
      backgroundColor: '#fff',
      color:'#000',
      padding:'6px 10px',
      margin:'0px 8px',
      borderRadius:"10px",
      border: 'none',
      outlline: 'none',
      boxShadow: '0px 0px 5px 2px rgba(0,0,0,.3)',
      cursor:'pointer',
      fontSize: '18px'
    }


  return (
    <>
    <h1 style={{color:'crimson',fontSize:'40px'}}>{count}</h1>
    <button onClick={incrementHandler} style={buttonStyle}>Increment</button>
    <button onClick={decrementHandler} style={buttonStyle}>Decrement</button>
    <button onClick={resetHandler} style={buttonStyle}>Reset</button>
    </>
  )
}

export default App
