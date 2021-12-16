import { MainContainer } from "./App_Styles.js";
import CryptoList from "./views/CryptoList/CryptoList.jsx";
import Landing from "./views/Landing/Landing.jsx";

function App() {
  return (
    <MainContainer>
      <Landing />
      <CryptoList/>
    </MainContainer>
  );
}

export default App;
