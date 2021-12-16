import React from "react";
import formatData from "../../utils/formatData";
import getDataAndSort from "../../utils/parseAndSortData";

import {
  Value,
  Name,
  ListContainer,
  ListItemContainer,
  Logo,
} from "./CryptoList_Styles";

const ListItem = ({ logo, code, name, kwh, countryCo2 }) => {
  console.log(logo);
  return (
    <ListItemContainer>
      <Logo src={logo}></Logo>
      <Name>{`${name} ${code ? "(" + code + ")" : ""}`}</Name>
      <Value>{kwh}</Value>
      <Value>{countryCo2}</Value>
    </ListItemContainer>
  );
};

const CryptoList = () => {
  let cryptoData = getDataAndSort("crypto", "asc");
  let countriesData = getDataAndSort("countries");

  return (
    <ListContainer>
      {cryptoData.map((crypto) => {
        return (
          <ListItem
            code={crypto.code}
            name={crypto.name}
            kwh={crypto.displayValue}
            logo={crypto.logo}
            countryCo2={formatData(
              "CO2",
              (crypto.value / 1000) * countriesData["France"].C02_per_kWh
            )}
          />
        );
      })}
    </ListContainer>
  );
};

export default CryptoList;
