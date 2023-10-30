import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date("December 18 2023");
  date.setDate(date.getDate() + count);


  return (
    <div>
      {/* <div> */}
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      {/* </div> */}
      <p> {date.toDateString()} </p>
    </div>
  );
}
