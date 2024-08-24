import { useRef } from "react";
import "./App.css";
import { CustomInput, CustomInputHandle } from "./components/CustomInput";

function App() {
  const inputRef = useRef<CustomInputHandle>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    inputRef.current?.clear();
  };

  // const handleValue = () => {
  //   inputRef.current?.setValue();
  // };

  return (
    <>
      <h1 className="page-header">React українською</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="react-logo"
      />

      <div className="component-container">
        <h2>useImperativeHandle hook</h2>
        <CustomInput ref={inputRef} />
        <button className="button" onClick={handleFocus}>
          Focus input
        </button>
        <button className="button" onClick={handleClear}>
          Clear input
        </button>

        {/* <button className="button" onClick={handleValue}>
          Set value
        </button> */}
      </div>
    </>
  );
}

export default App;
