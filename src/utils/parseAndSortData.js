import cryptoData from "../backend/json/crypto-data.json";
import countriesData from "../backend/json/countries-data.json";
import formatData from "./formatData";

const parseSortAndFormatData = (type, sort) => {
  let parsedData = [];

  switch (type) {
    case "crypto":
      for (const [name, values] of Object.entries(cryptoData)) {
        parsedData.push({
          name: name,
          value: values.Wh_trans,
          code: values.code,
          displayValue: formatData("Wh", values.Wh_trans),
          logo: values.logo,
        });
      }
      break;
    case "countries":
      return countriesData;

    default:
      break;
  }
  switch (sort) {
    case "asc":
      return parsedData.sort(sortDataAsc);

    default:
      break;
  }
};

const sortDataAsc = (a, b) => {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
};

export default parseSortAndFormatData;
