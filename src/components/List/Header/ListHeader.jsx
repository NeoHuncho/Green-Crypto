import React from "react";
import headers_title from "constants/listHeaders";

import {
  Container,
  HeaderSubTitle,
  HeaderTitle,
  TitleContainer,
} from "./ListHeader_styles";
const ListHeader = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default ListHeader;
