import React from "react";
import binance from "assets/affiliate_links/binance.jpg";
import coinbase from "assets/affiliate_links/coinbase.jpg";
// import kraken from "assets/affiliate_links/kraken.jpg";
import cryptocom from "assets/affiliate_links/cryptocom.jpg";
import binanceBW from "assets/affiliate_links/binance.jpg";
import coinbaseBW from "assets/affiliate_links/links_BW/coinbase.jpg";
// import krakenBW from "assets/affiliate_links/links_BW/kraken.jpg";
import cryptocomBW from "assets/affiliate_links/links_BW/cryptocom.jpg";
import PriceVariation from "components/PriceVariation/PriceVariation";

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
} from "./Item_Styles";
const CryptoItem = ({ logo, code, name, Wh, gCO2, market_data, links }) => {
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
          <a href={links.binance}>
            <Link src={binance} />
          </a>
        ) : (
          <>
            <Link src={binanceBW} />
          </>
        )}
        {links.cryptocom ? (
          <a href={links.cryptocom}>
            <Link src={cryptocom} />
          </a>
        ) : (
          <>
            <Link src={cryptocomBW} />
          </>
        )}
        {/* {links.kraken ? (
          <a href={links.kraken}>
            <Link src={kraken} />
          </a>
        ) : (
          <Link src={krakenBW} />
        )} */}
        {links.coinbase ? (
          <a href={links.coinbase}>
            <Link src={coinbase} />
          </a>
        ) : (
          <>
            <Link src={coinbaseBW} />
          </>
        )}
      </LinkContainer>
    </ListItemContainer>
  );
};

export { CryptoItem };
