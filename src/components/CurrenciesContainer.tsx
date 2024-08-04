import React from "react";
import CurrencyDisplay from "./CurrencyDisplay";

const NestedComponent: React.FC = () => {
  return (
    <div>
      <h3>Конвертація у різні валюти</h3>
      <CurrencyDisplay currency="Євро" rate={1.2} />
      <CurrencyDisplay currency="Гривні" rate={40} />
    </div>
  );
};

export default NestedComponent;
