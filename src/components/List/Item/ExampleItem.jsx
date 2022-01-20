import { useState } from "react";
import Modal from "@mui/material/Modal";

import moreInfoIcon from "assets/info.png";
import InfoModal from "components/Modal/InfoModal";

import {
  NameContainer,
  TitleContainer,
  ListItemContainer,
  Logo,
  ExampleTitle,
  Value,
  MoreInfoContainer,
  MoreInfo,
} from "./Item_Styles";

const ExampleItem = ({ logo, name, Wh, gCO2, more_info }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <ListItemContainer>
      <TitleContainer>
        <Logo src={logo}></Logo>
        <NameContainer>
          <ExampleTitle>{name}</ExampleTitle>
        </NameContainer>
      </TitleContainer>

      <Value>{Wh}</Value>
      <Value>{gCO2}</Value>
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

export { ExampleItem };
