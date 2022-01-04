import React, { useState, useEffect } from "react";
import binance from "../../assets/affiliate_links/binance.png";
import coinbase from "../../assets/affiliate_links/coinbase.jpg";
import { updateData } from "../../data/data";

import {
  Value,
  Name,
  ListContainer,
  ListItemContainer,
  Logo,
  Link,
  NameContainer,
} from "./List_Styles";

const ListItem = ({ logo, code, name, kwh, gCO2 }) => {
  return (
    <ListItemContainer>
      <Logo src={logo}></Logo>
      <NameContainer>
        <Name>{`${name} ${code ? "(" + code + ")" : ""}`}</Name>
      </NameContainer>

      <Value>{kwh}</Value>
      <Value>{gCO2}</Value>
      <Link src={binance} />
      <Link src={coinbase} />
    </ListItemContainer>
  );
};

const List = () => {
  const [country, setCountry] = useState("France");
  //use effect to be implemented

  updateData("country", country);

  const list_data = updateData("sort_asc");

  return (
    <ListContainer>
      {list_data != null &&
        list_data.map((list_item) => {
          console.log(list_item);
          return (
            <ListItem
              code={list_item.code}
              name={list_item.name}
              kwh={list_item.Wh_display_value}
              logo={list_item.logo}
              market_value={list_item.market_value}
              gCO2={list_item.gCO2_display_value}
            />
          );
        })}
    </ListContainer>
  );
};

export default List;
