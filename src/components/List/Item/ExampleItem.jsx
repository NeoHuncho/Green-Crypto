import React from "react";
import {
  NameContainer,
  TitleContainer,
  ExampleListItemContainer,
  Logo,
  ExampleTitle,
  Value,
} from "./Item_Styles";

const ExampleItem = ({ logo, name, Wh, gCO2 }) => {
  return (
    <ExampleListItemContainer>
      <TitleContainer>
        <Logo src={logo}></Logo>
        <NameContainer>
          <ExampleTitle>{name}</ExampleTitle>
        </NameContainer>
      </TitleContainer>

      <Value>{Wh}</Value>
      <Value>{gCO2}</Value>
    </ExampleListItemContainer>
  );
};

export { ExampleItem };
