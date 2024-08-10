import React, { useMemo } from "react";

interface UseMemoCalculation {
  numbers: number[];
}

const UseMemoCalculation: React.FC<UseMemoCalculation> = ({ numbers }) => {
  const sum = useMemo(() => {
    console.log("Calculating with useMemo...");

    return numbers.reduce((total, num) => total + num, 0);
  }, [numbers]);

  return <div>Sum: {sum}</div>;
};
export default UseMemoCalculation;
