import { useState } from "react";
import "./App.css";
import TestWithReference from "./components/TestReference";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [randomNewReferrer, setRandomNewReferrer] = useState("12345");

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => {
              setIsDark(e.target.checked);
              setRandomNewReferrer(Math.random().toString());
            }}
          />
          Dark mode
        </label>
      </div>

      <hr />

      <TestWithReference
        referrer={randomNewReferrer}
        // referrer="wizard_of_oz"
        productId="123"
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}
