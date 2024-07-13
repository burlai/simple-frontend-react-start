import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
  const [nameProp, setNameProp] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [ageProp, setAgeProp] = useState<number>(0);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };

  const updateName = () => {
    setNameProp(inputName);
  };

  return (
    <>
      <h2>Батьківський компонент (Parent)</h2>
      <input
        className="input-text"
        type="text"
        value={inputName}
        onChange={handleNameChange}
        placeholder="введіть ім'я"
      />
      <div>
        <button type="button" className="button" onClick={updateName}>
          Надати ім'я
        </button>
        <button
          type="button"
          className="button"
          onClick={() => setAgeProp(ageProp + 1)}
        >
          Збільшити вік
        </button>
      </div>

      <ChildComponent name={nameProp} age={ageProp} />
    </>
  );
};

export default ParentComponent;
