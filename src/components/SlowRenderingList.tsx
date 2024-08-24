import { useState, useMemo, useDeferredValue } from "react";

const SlowRenderingList = () => {
  const [inputValue, setInputValue] = useState<string>("");

  // Створюємо великий масив чисел
  const numbers = Array.from({ length: 10000 }, (_, i) => i + 1);

  // Фільтруємо список з імітацією важкої операції
  const filteredNumbers = useMemo(() => {
    // Штучна затримка для імітації важких обчислень
    const start = performance.now();
    while (performance.now() - start < 50) {
      // імітація затримки у 50 мс
    }
    return numbers.filter((num) => num.toString().includes(inputValue));
  }, [inputValue, numbers]);

  // Відкладаємо рендеринг списку за допомогою useDeferredValue
  const deferredFilteredNumbers = useDeferredValue(filteredNumbers);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type to filter..."
      />
      <p>Input Value: {inputValue}</p>

      <ul>
        {deferredFilteredNumbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default SlowRenderingList;
