import React, { useState, ChangeEvent } from "react";

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>
        Наш інпут: <i style={{ color: "violet" }}>{inputValue}</i>
      </p>
    </form>
  );
};

export default Form;
