const prices = [
  3.902341879, 7.123456, 5.6789, 9.05244656, 18.6802874, 325.76830948,
];

console.log("старий масив: ", prices);
console.log(
  "новий масив: ",
  prices.map((price, index) => `${price.toFixed(2)}, index: ${index}`)
);

const PriceList = () => {
  return (
    <div>
      <h2 className="align-left no-margin">Ціни в $</h2>
      <ul className="list-circle-style">
        {prices.map((price) => (
          <li key={price}>${price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceList;
