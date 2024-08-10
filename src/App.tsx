import { useState } from "react";
import "./App.css";
import TestWithReference from "./components/TestReference";

export default function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isDark}
            onChange={(e) => setIsDark(e.target.checked)}
          />
          Dark mode
        </label>
      </div>

      <hr />

      <TestWithReference
        referrer="wizard_of_oz"
        productId="123"
        theme={isDark ? "dark" : "light"}
      />
    </>
  );
}
