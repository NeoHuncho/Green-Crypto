import fs from "fs";

let json = JSON.parse(fs.readFileSync("../json/co2-emission-intensity-eu.json"))
  .results.bindings;
// console.log(json);

let filtered = {};
json.map((country) => {
  // console.log(country.date.value)
  if (country.date.value == 2020 && country.index.value) {
    filtered[country.ugeo.value] = {"co2-per-kwh":country.index.value}
  } else if (country.date.value == 2019 && country.index.value) {
    filtered[country.ugeo.value] = {"co2-per-kwh":country.index.value}
  }
});
const writeFile = async () => {
  await fs.writeFileSync(
    "../json/countries-data.json",
    JSON.stringify(filtered)
  );
};

writeFile();

// let kwh_per_transaction = {
//   IOTA: 0.00011,
//   Elrond: 0.0052,
//   XRP: 0.0079,
//   Dogecoin: 0.12,
//   Cardano: 0.5479,
//   Litecoin: 18.522,
//   BitcoinCash: 18.957,
//   Ethereum: 62.56,
//   Bitcoin: 707,
//   Chia: 0.023,
//   StellarLumens: 0.000222,
//   Nano: 0.000112,
//   Visa: 0.0008,
//   Mastercard: 0.0006,
//   PaperCurrency: 0.044,
// };
