import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import disableScroll from "disable-scroll";

import { MainContainer, PlaceHolderContainer } from "./App_Styles.js";
import fetchData from "data/fetch_data/fetch_db_data";
import List from "screens/List/List.jsx";
import Landing from "screens/Landing/Landing.jsx";
import { initListData } from "data/store/slices/list_slice.js";
import { initCountryData } from "data/store/slices/country_slice.js";

const App = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(undefined);
  const [dispatched, setDispatched] = useState(false);

  useEffect(() => {
    const getData = async () => {
      disableScroll.on();
      const res = await fetchData();

      setData(res);
      disableScroll.off();
    };
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(
        initListData(Object.assign(data.crypto_data, data.CO2_example_data))
      );
      dispatch(initCountryData(data.country_data));
      setDispatched(true);
    }
  }, [data]);

  return (
    <MainContainer>
      <Landing />
      {dispatched ? <List /> : <PlaceHolderContainer />}
    </MainContainer>
  );
};

export default App;
