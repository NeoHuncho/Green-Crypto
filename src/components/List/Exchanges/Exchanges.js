import React from "react";
import { Link, LinkContainer } from "./Exchanges_styles";

import binance from "assets/affiliate_links/binance.jpg";
import coinbase from "assets/affiliate_links/coinbase.jpg";
import cryptocom from "assets/affiliate_links/cryptocom.jpg";
import binanceBW from "assets/affiliate_links/binance.jpg";
import coinbaseBW from "assets/affiliate_links/links_BW/coinbase.jpg";
import cryptocomBW from "assets/affiliate_links/links_BW/cryptocom.jpg";
import logEventAnalytics from "constants/analytics";
export default function Exchanges({ links, name }) {
  return (
    <LinkContainer>
      {links.binance ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={links.binance}
          onClick={() =>
            logEventAnalytics("exchangeClick", {
              exchange: "binance",
              name: name,
            })
          }
        >
          <Link src={binance} />
        </a>
      ) : (
        <>
          <Link src={binanceBW} />
        </>
      )}
      {links.cryptocom ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={links.cryptocom}
          onClick={() =>
            logEventAnalytics("exchangeClick", {
              exchange: "cryptocom",
              name: name,
            })
          }
        >
          <Link src={cryptocom} />
        </a>
      ) : (
        <>
          <Link src={cryptocomBW} />
        </>
      )}
      {/* {links.kraken ? (
        <a target="_blank" rel="noreferrer" href={links.kraken} onClick={()=> logEventAnalytics("exchangeClick",{"exchange": "kraken", name:name}, )}> 
          <Link src={kraken} />
        </a>
      ) : (
        <Link src={krakenBW} />
      )} */}
      {links.coinbase ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={links.coinbase}
          onClick={() =>
            logEventAnalytics("exchangeClick", {
              exchange: "coinbase",
              name: name,
            })
          }
        >
          <Link src={coinbase} />
        </a>
      ) : (
        <>
          <Link src={coinbaseBW} />
        </>
      )}
    </LinkContainer>
  );
}
