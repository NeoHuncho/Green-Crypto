import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import disableScroll from "disable-scroll";
import VisibilitySensor from "react-visibility-sensor";

import { CryptoItem } from "components/List/Item/CryptoItem";
import { ExampleItem } from "components/List/Item/ExampleItem";

import { ListContainer } from "./List_styles";
import ListHeader from "components/List/Header/ListHeader";
import { updateCO2Data } from "data/store/slices/list_slice";
import sortDataAsc from "utils/sort/sortDataAsc";
import { PlaceHolderContainer } from "App_Styles";
import ListHeaderFixed from "components/List/Header/ListHeaderFixed";
import logEventAnalytics from "constants/analytics";

const List = () => {
  const dispatch = useDispatch();
  const [country] = useState("France");
  const [headerIsVisible, setHeaderIsVisible] = useState(false);
  const [initialUpdate, setInitialUpdate] = useState(false);

  const list_data = Object.values(useSelector((state) => state.list.data));
  const country_data = useSelector((state) => state.country.data);

  useEffect(() => {
    logEventAnalytics("page_after_load_view");
  }, []);
  useEffect(() => {
    dispatch(updateCO2Data(country_data[country].gCO2_per_Wh));
    setInitialUpdate(true);
    disableScroll.off();
  }, [country, country_data, dispatch]);

  //use effect to be implemented

  return (
    <ListContainer>
      {initialUpdate && (
        <>
          <VisibilitySensor
            onChange={(isVisible) => setHeaderIsVisible(isVisible)}
            scrollDelay={0}
          >
            <ListHeader />
          </VisibilitySensor>
          {!headerIsVisible && <ListHeaderFixed />}
        </>
      )}

      {initialUpdate ? (
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
                more_info={list_item.more_info}
              />
            );
          else
            return (
              <ExampleItem
                name={list_item.name}
                Wh={list_item.Wh_display_value}
                logo={list_item.logo}
                gCO2={list_item.gCO2_display_value}
                more_info={list_item.more_info}
              />
            );
        })
      ) : (
        <PlaceHolderContainer />
      )}
    </ListContainer>
  );
};

export default List;
