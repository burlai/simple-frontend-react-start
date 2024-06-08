const prices = [3.902341879, 7.123456, 5.6789, 9.0];

const PriceList = () => {
  return (
    <div>
      <h2 className="align-left">Ціни в $</h2>
      <ul className="list-circle-style">
        {prices.map((price) => (
          <li key={price}>${price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceList;
