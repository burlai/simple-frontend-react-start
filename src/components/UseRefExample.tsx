import React, { useRef, useState } from "react";

const UseRefExample: React.FC = () => {
  // inputRef is used to create a reference to an input element in the React component. This reference can be used to access and manipulate the input element directly. By using useRef, you can obtain a reference to the input element without needing to rely on traditional DOM manipulation methods like getElementById. This is particularly useful when you need to interact with the input element imperatively, such as focusing the input or accessing its properties:
  const inputRef = useRef<HTMLInputElement>(null);

  // What will change if we will add useState here:
  const [state, setState] = useState<string>("");

  // Function to focus the input element
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Function to clear the input element
  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      console.log(
        "inputRef.current.value has been cleared: ",
        inputRef.current.value
      );
    }
  };

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.value = event.target.value;
      console.log("inputRef.current.value: ", inputRef.current.value);
    }
  };

  const triggerSetState = () => {
    if (inputRef.current) {
      setState(inputRef.current.value);
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} />

      <button className="button" onClick={focusInput}>
        Focus Input
      </button>
      <button className="button" onClick={clearInput}>
        Clear Input
      </button>
      <button className="button" onClick={triggerSetState}>
        Trigger set state
      </button>

      <p>Current Input Value: {inputRef.current?.value}</p>
    </div>
  );
};

export default UseRefExample;
