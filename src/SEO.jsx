import React from "react";
import Helmet from "react-helmet";
import { black } from "./colors/colors";

export default function SEO() {
  return (
    <Helmet>
      <title>Green Crypto Ranking</title>
      <meta
        name="description"
        content="Which cryptos are the most sustainable/polluting? 1st: IOTA(.01Wh), 2nd: HBAR(.02Wh), 3rd: ETH2.0(.09Wh) 4th: NANO(.11Wh) 5th: ALGO(.17Wh) 6th: XLM(.22Wh) 7th XTZ(0.36Wh) "
      />
      <meta name="author" content="NeoHuncho" />
      <meta name="theme-color" content={black} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}
