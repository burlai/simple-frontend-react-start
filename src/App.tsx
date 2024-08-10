import { useState } from "react";
import "./App.css";

// import CalculationWithoutMemo from "./components/CalculationWithoutMemo";
import UseMemoCalculation from "./components/UseMemoCalculation";

function App() {
  const [count, setCount] = useState(0);

  const [myArray, setMyArray] = useState<number[]>([]);

  const handleSetMyArray = () => {
    setMyArray([...myArray, Math.floor(Math.random() * 100)]);
  };

  return (
    <>
      <h1 className="page-header">React українською</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="react-logo"
      />

      <div className="component-container">
        <div>Counter value: {count}</div>

        <button className="button" onClick={() => setCount(count + 1)}>
          Re-render
        </button>

        <button className="button" onClick={() => handleSetMyArray()}>
          Change the array
        </button>

        <UseMemoCalculation numbers={myArray} />
      </div>
    </>
  );
}

export default App;
