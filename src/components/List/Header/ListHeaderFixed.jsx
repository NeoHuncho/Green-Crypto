import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import headers_title from "constants/listHeaders";

import {
  Container,
  HeaderSubTitle,
  HeaderTitle,
  TitleContainer,
} from "./ListHeader_styles";
const ListHeader = () => {
  const 
  return (
    <VisibilitySensor
      onChange={(isVisible) => {
        this.setState({ visibility: isVisible });
      }}
    >
      <Container>
        {headers_title.map((title) => {
          if (title.includes("per transaction"))
            return (
              <TitleContainer>
                <HeaderTitle>
                  {title.replace(" per transaction", "")}
                </HeaderTitle>
                <HeaderSubTitle>per transaction</HeaderSubTitle>
              </TitleContainer>
            );
          return <HeaderTitle>{title}</HeaderTitle>;
        })}
      </Container>
    </VisibilitySensor>
  );
};

export default ListHeader;
