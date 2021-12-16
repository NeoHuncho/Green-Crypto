const formatData = (type, value) => {
  let res = null;
  if (type === "Wh")
    res =
      value < 10
        ? value.toFixed(2) + " Wh"
        : value < 100
        ? value.toFixed(1) + " Wh"
        : value < 1000
        ? value.toFixed() + " Wh"
        : (value / 1000).toFixed() + " kWh";
  else if (type === "CO2")
    res =
      value < 0.01
        ? (value * 1000).toFixed(1) + "mg CO2"
        : value < 0.1
        ? (value * 1000).toFixed(0) + "mg CO2"
        : value < 100
        ? value.toFixed(1) + "g CO2"
        : value < 1000
        ? value.toFixed() + "g CO2"
        : (value / 1000).toFixed() + "kg CO2";

  return res;
};
export default formatData;
