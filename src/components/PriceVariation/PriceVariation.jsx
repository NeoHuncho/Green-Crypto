import React, { useState } from "react";

import { Container, TimeSlider, Value } from "./PriceVariation_styles.ts";
import { data } from "data/data";

function PriceVariation({ market_data, currency }) {
  const defaultValue = 1;
  const labels = data.constants.market_values_labels.array;
  currency = "usd";

  const [priceChange, setPriceChange] = useState(
    getPriceChange(defaultValue, market_data, currency, labels)
  );
  const handleSliderChange = (event, newValue) => {
    setPriceChange(getPriceChange(newValue, market_data, currency, labels));
  };

  return (
    <Container>
      <Value color={priceChange > 0 ? "green" : "red"}>
        {priceChange ? priceChange.toFixed(2) + "%" : "N/A"}
      </Value>
      <TimeSlider
        aria-labelledby="non-linear-slider"
        step={null}
        valueLabelDisplay="auto"
        marks={labels}
        size="small"
        max={7}
        min={1}
        defaultValue={defaultValue}
        onChange={handleSliderChange}
      />
    </Container>
  );
}

function getPriceChange(value, market_data, currency, labels) {
  return market_data[labels[value - 1].label][currency];
}
export default PriceVariation;
