import React from "react";
import headers_title from "constants/listHeaders";

import {
  FixedContainer,
  HeaderSubTitle,
  HeaderTitle,
  TitleContainer,
} from "./ListHeader_styles";
export default function ListHeaderFixed() {
  return (
    <FixedContainer>
      {headers_title.map((title) => {
        if (title.includes("per transaction"))
          return (
            <TitleContainer>
              <HeaderTitle>{title.replace(" per transaction", "")}</HeaderTitle>
              <HeaderSubTitle>per transaction</HeaderSubTitle>
            </TitleContainer>
          );
        return <HeaderTitle>{title}</HeaderTitle>;
      })}
    </FixedContainer>
  );
}
