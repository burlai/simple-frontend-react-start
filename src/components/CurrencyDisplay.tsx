import { useContext } from "react";
import PriceContext from "./PriceContext";

type CurrencyConverterProps = {
  currency: string;
  rate: number;
};

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
  currency,
  rate,
}) => {
  const priceInDollars = useContext(PriceContext);
  const convertedPrice = priceInDollars * rate;

  return (
    <div>
      <h4>
        Ціна в {currency}: {convertedPrice.toFixed(2)}
      </h4>
    </div>
  );
};

export default CurrencyConverter;
