function PriceDisplay({ price }) {
  const hasCurrencyAmount = /^Q[\d,]+(?:\.\d{2})?$/.test(price);

  if (!hasCurrencyAmount) {
    return price;
  }

  const [wholeAmount, decimals = "00"] = price.split(".");

  return (
    <span className="price-display">
      {wholeAmount}
      <sup>.{decimals}</sup>
    </span>
  );
}

export default PriceDisplay;
