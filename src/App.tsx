import { useState } from "react";

import "./App.css";
import PriceContext from "./components/PriceContext";
import CurrenciesContainer from "./components/CurrenciesContainer";
import CurrencyDisplay from "./components/CurrencyDisplay";

function App() {
  const [price, setPrice] = useState(0);

  return (
    <>
      <h1 className="page-header">React українською</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="React Logo"
        className="react-logo"
      />

      <div className="component-container">
        <PriceContext.Provider value={price}>
          <div>
            <h2>Конвертер валюти</h2>
            <h3>Введіть ціну в доларах</h3>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
              placeholder="Введіть ціну в доларах"
            />
            <CurrenciesContainer />
          </div>

          {/* Any nested structure demonstration */}
          <div style={{ border: "1px solid red", padding: 10 }}>
            <div style={{ border: "1px solid green", padding: 10 }}>
              <div style={{ border: "1px solid blue", padding: 10 }}>
                <CurrencyDisplay currency="Тугриках" rate={2} />
              </div>
            </div>
          </div>
        </PriceContext.Provider>
      </div>
    </>
  );
}

export default App;
