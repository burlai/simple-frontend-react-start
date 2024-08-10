import React from "react";

type SimpleButtonProps = {
  onClick: () => void;
};

const SimpleButton: React.FC<SimpleButtonProps> = ({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click me</button>;
};

export default SimpleButton;
