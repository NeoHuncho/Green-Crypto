import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CryptoItem } from "components/List/Item/CryptoItem";
import { ExampleItem } from "components/List/Item/ExampleItem";

import { ListContainer } from "./List_styles";
import ListHeader from "components/List/Header/ListHeader";
import { updateCO2Data } from "data/store/slices/list_slice";
import sortDataAsc from "utils/sort/sortDataAsc";
const List = () => {
  const dispatch = useDispatch();
  const [country] = useState("France");
  const [initialUpdate, setInitialUpdate] = useState(false);
  const list_data = Object.values(useSelector((state) => state.list.data));
  const country_data = useSelector((state) => state.country.data);

  useEffect(() => {
    dispatch(updateCO2Data(country_data[country].gCO2_per_Wh));
    setInitialUpdate(true);
  }, []);

  //use effect to be implemented
  console.log(list_data);
  return (
    <ListContainer>
      <ListHeader />
      {initialUpdate &&
        list_data.sort(sortDataAsc).map((list_item) => {
          if (list_item.links)
            return (
              <CryptoItem
                code={list_item.code}
                name={list_item.name}
                Wh={list_item.Wh_display_value}
                logo={list_item.logo}
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
