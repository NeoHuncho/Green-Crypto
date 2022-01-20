import { white } from "colors/colors.js";
import styled from "styled-components";
import mediaQueries from "constants/mediaQueries";

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: 24px;
  background-color: black;
}
`;

export const SourcesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
`;

export const SectionTitle = styled.h2`
  font-size: 2vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 500;
  text-align: center;
  @media ${mediaQueries.mobile} {
    font-size: 2vw;
  }
`;

export const TextLink = styled.h4`
  color: ${white};
  font-family: "Roboto";
  font-weight: 500;
  text-align: center;

  @media ${mediaQueries.mobile} {
    font-size: 2vw;
  }
`;
