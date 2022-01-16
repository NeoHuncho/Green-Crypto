const formatDisplayValue = (type, value) => {
  let res = null;
  if (type === "Wh")
    res =
      value < 10
        ? value.toFixed(2)
        : value < 100
        ? value.toFixed(1)
        : value < 1000
        ? value.toFixed()
        : (value / 1000).toFixed();
  else if (type === "gCO2")
    res =
      value < 0.01
        ? (value * 1000).toFixed(1) + " mg"
        : value < 0.1
        ? (value * 1000).toFixed(0) + " mg"
        : value < 10
        ? value.toFixed(2) + " g"
        : value < 100
        ? value.toFixed(1) + " g"
        : value < 1000
        ? value.toFixed() + " g"
        : (value / 1000).toFixed() + " kg";

  return res;
};

export default formatDisplayValue;
