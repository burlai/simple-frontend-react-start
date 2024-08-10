import React from "react";

interface CalculationWithoutMemoProps {
  numbers: number[];
}

const CalculationWithoutMemo: React.FC<CalculationWithoutMemoProps> = ({
  numbers,
}) => {
  console.log("Calculating...");

  const sum = numbers.reduce((total, num) => total + num, 0);
  return <div>Sum: {sum}</div>;
};

export default CalculationWithoutMemo;
