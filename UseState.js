import { useState } from "react";
import "./components/appleCounter.css"

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="usestate">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me for increasing number
      </button>
    </div>
  );
};

export default UseState;
