import { useEffect, useState } from "react";
import disableScroll from "disable-scroll";
import { MainContainer, PlaceHolderContainer } from "App_styles";
import { fetchData } from "data/data.js";
import List from "screens/List/List.jsx";
import Landing from "screens/Landing/Landing.jsx";

const App = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const getData = async () => {
      disableScroll.on();
      const res = await fetchData();
      setData(res);
      disableScroll.off();
    };

    getData();
  }, []);
  return (
    <MainContainer>
      <Landing />
      {data ? <List /> : <PlaceHolderContainer />}
    </MainContainer>
  );
};

export default App;
