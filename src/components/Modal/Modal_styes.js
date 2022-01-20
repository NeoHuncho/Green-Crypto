import { white, black } from "colors/colors.js";
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
  background-color: ${black};
  @media ${mediaQueries.mobile} {
    max-width: 320px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  padding-left: 10px;
  height: 35px;
  width: 35px;
`;
export const Name = styled.h1`
  color: ${white};
  font-family: "Roboto";
  font-weight: 500;
`;

export const SourcesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-evenly;
`;

export const SectionTitle = styled.h2`
  color: ${white};
  font-family: "Roboto";
  font-weight: 500;
  text-align: center;
  margin-bottom: 5px;
`;

export const TextLink = styled.h4`
  color: ${white};
  font-family: "Roboto";
  font-weight: 500;
  text-align: center;
  padding: 10px;
  border: 1px solid white;
  border-radius: 15px;
  @media ${mediaQueries.mobile} {
    font-size: 3.5vw;
  }
`;
