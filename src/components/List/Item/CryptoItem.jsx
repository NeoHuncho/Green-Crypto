import { useState } from "react";
import Modal from "@mui/material/Modal";

import binance from "assets/affiliate_links/binance.jpg";
import coinbase from "assets/affiliate_links/coinbase.jpg";
import cryptocom from "assets/affiliate_links/cryptocom.jpg";
import binanceBW from "assets/affiliate_links/binance.jpg";
import coinbaseBW from "assets/affiliate_links/links_BW/coinbase.jpg";
import cryptocomBW from "assets/affiliate_links/links_BW/cryptocom.jpg";

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

      <LinkContainer>
        {links.binance ? (
          <a target="_blank" rel="noreferrer" href={links.binance}>
            <Link src={binance} />
          </a>
        ) : (
          <>
            <Link src={binanceBW} />
          </>
        )}
        {links.cryptocom ? (
          <a target="_blank" rel="noreferrer" href={links.cryptocom}>
            <Link src={cryptocom} />
          </a>
        ) : (
          <>
            <Link src={cryptocomBW} />
          </>
        )}
        {/* {links.kraken ? (
          <a target="_blank" rel="noreferrer" href={links.kraken}>
            <Link src={kraken} />
          </a>
        ) : (
          <Link src={krakenBW} />
        )} */}
        {links.coinbase ? (
          <a target="_blank" rel="noreferrer" href={links.coinbase}>
            <Link src={coinbase} />
          </a>
        ) : (
          <>
            <Link src={coinbaseBW} />
          </>
        )}
      </LinkContainer>
      <MoreInfoContainer onClick={() => setModalShow(true)}>
        {more_info.sources && <MoreInfo src={moreInfoIcon} />}
      </MoreInfoContainer>
      <Modal
        open={modalShow}
        onClose={() => setModalShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <InfoModal moreInfo={more_info} />
      </Modal>
    </ListItemContainer>
  );
};

export { CryptoItem };
