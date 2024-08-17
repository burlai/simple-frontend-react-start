import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

export const MeasuredHeight: React.FC = () => {
  const [heightInUseLayoutEffect, setHeightInUseLayoutEffect] =
    useState<number>(0);
  const [messageFromUseEffect, setMessageInUseEffect] = useState<string>("");
  const divRef = useRef<HTMLDivElement>(null);

  // Використання useLayoutEffect для синхронного вимірювання висоти елемента
  useLayoutEffect(() => {
    if (divRef.current) {
      const measuredHeight = divRef.current.getBoundingClientRect().height;

      setHeightInUseLayoutEffect(measuredHeight);

      console.log("useLayoutEffect: Виміряна висота:", measuredHeight);
    }
  }, []);

  // Використання useEffect для зміни стану з асинхронною дією
  useEffect(() => {
    setMessageInUseEffect("Цей текст встановлено в useEffect після рендеру");

    console.log("useEffect: Компонент відрендерився");
  }, []);

  return (
    <div>
      <div
        className="margin-top-10 margin-left-10 margin-right-10"
        ref={divRef}
        style={{
          padding: "20px",
          border: "1px solid red",
        }}
      >
        Висота цього елемента вимірюється за допомогою useLayoutEffect
      </div>
      <p>Виміряна висота елемента: {heightInUseLayoutEffect.toFixed()} px</p>

      <p>{messageFromUseEffect}</p>
    </div>
  );
};
