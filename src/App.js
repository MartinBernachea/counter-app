import { useState } from "react";
import './styles.css'

export default function App() {

  const [count, setCount] = useState(0)

  function add() {
    return setCount(prevCount => prevCount + 1)
  }

  function subtract() {
    return setCount(prevCount => prevCount - 1)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <section>
      <div className="counter">
        <button className="counter--minus" onClick={subtract}> – </button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={add}> + </button>
      </div>
      <div className="restart">
        <button onClick={resetCount}>RESTART</button>
      </div>
    </section>
  )
}
