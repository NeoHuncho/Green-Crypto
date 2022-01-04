import { useEffect, useState } from "react";
import { MainContainer } from "./App_Styles.js";
import { fetchData } from "./data/data.js";
import List from "./views/List/List.jsx";
import Landing from "./views/Landing/Landing.jsx";

const App = () => {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    const getData = async () => {
      const res = await fetchData();
      console.log(11, res);
      setData(res);
    };
    getData();
  }, []);
  return (
    <MainContainer>
      <Landing />
      {data && <List />}
    </MainContainer>
  );
};

export default App;
