import { useState } from "react";
import Modal from "@mui/material/Modal";
import moreInfoIcon from "assets/info.png";

import PriceVariation from "components/PriceVariation/PriceVariation";
import InfoModal from "components/Modal/InfoModal";

import {
  Value,
  Name,
  ListItemContainer,
  Logo,
  Link,
  NameContainer,
  Title,
  LinkContainer,
  TitleContainer,
  PriceVariationContainer,
  MoreInfoContainer,
  MoreInfo,
} from "./Item_Styles";
import Exchanges from "../Exchanges/Exchanges";
const CryptoItem = ({
  logo,
  code,
  name,
  Wh,
  gCO2,
  market_data,
  links,
  more_info,
}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <ListItemContainer>
      <TitleContainer>
        <Logo src={logo}></Logo>

        <NameContainer>
          <Title>{code}</Title>
          <Name>{name}</Name>
        </NameContainer>
      </TitleContainer>
      <Value>{Wh}</Value>
      <Value>{gCO2}</Value>
      <PriceVariationContainer>
        <PriceVariation market_data={market_data} />
      </PriceVariationContainer>
      <Exchanges links={links} name={name} />
      <MoreInfoContainer onClick={() => setModalShow(true)}>
        {more_info.sources && <MoreInfo src={moreInfoIcon} />}
      </MoreInfoContainer>
      <Modal
        open={modalShow}
        onClose={() => setModalShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <InfoModal moreInfo={more_info} name={name} logo={logo} />
      </Modal>
    </ListItemContainer>
  );
};

export { CryptoItem };
