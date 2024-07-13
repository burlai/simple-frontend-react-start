import React from "react";

interface ChildComponentProps {
  name: string;
  age?: number;
}

const ChildComponent: React.FC<ChildComponentProps> = ({
  name = "Василь",
  age = 30,
}) => {
  return (
    <>
      <h2>Дочірній компонент (Child)</h2>
      <p>Ім'я: {name}</p>
      <p>Вік: {age}</p>
    </>
  );
};

export default ChildComponent;
