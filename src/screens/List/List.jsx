import React, { useState } from "react";
import { updateData } from "data/data";

import { CryptoItem } from "components/List/Item/CryptoItem";
import { ExampleItem } from "components/List/Item/ExampleItem";

import { ListContainer } from "./List_styles";
import ListHeader from "components/List/Header/ListHeader";

const List = () => {
  const [country] = useState("France");
  //use effect to be implemented

  updateData("country", country);
  const list_data = updateData("sort_asc");

  return (
    <ListContainer>
      <ListHeader />
      {list_data != null &&
        list_data.map((list_item) => {
          if (list_item.links)
            return (
              <CryptoItem
                code={list_item.code}
                name={list_item.name}
                Wh={list_item.Wh_display_value}
                logo={list_item.logo}
                market_value={list_item.market_value}
                gCO2={list_item.gCO2_display_value}
                market_data={list_item.market_data}
                links={list_item.links}
              />
            );
          else
            return (
              <ExampleItem
                name={list_item.name}
                Wh={list_item.Wh_display_value}
                logo={list_item.logo}
                gCO2={list_item.gCO2_display_value}
              />
            );
        })}
    </ListContainer>
  );
};

export default List;
