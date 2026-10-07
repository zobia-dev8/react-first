import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const App=() => {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",justifyContent:"center", height: "100vh", width: "100%", top:"-15%" }}>
      Counter App
      <div style={{ fontsize:"120%", position:"relative", top:"10vh" }}>
        {counter}
      </div>
      <div className="buttons"><button style={{ fontSize: "100%", position:"relative", top:"20vh", marginRight: "5px", backgroundColor: "green", borderRadius: "12%", color: "white" }} onClick={handleClick1}>Increment</button>
      <button style={{ fontSize: "100%", position:"relative", top:"20vh", marginLeft: "5px", backgroundColor: "red", borderRadius: "12%", color: "white" }} onClick={handleClick2}>Decrement</button></div>
    </div>
  )
}
export default App
