import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>
        Ми клікнули <b style={{ color: "red" }}>{count}</b> разів
      </p>
      <button
        className="button"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Прибавимо 1
      </button>
    </div>
  );
};

export default Counter;
