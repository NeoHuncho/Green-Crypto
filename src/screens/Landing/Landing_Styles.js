import { white } from "colors/colors.js";
import styled from "styled-components";
import mediaQueries from "constants/mediaQueries";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  @media ${mediaQueries.mobile} {
    padding-top: 3vh;
  }
`;

export const Title = styled.text`
  font-size: 5vw;
  text-align: center;
  color: ${white};
  font-family: "Roboto";
  font-weight: bolder;
  @media ${mediaQueries.mobile} {
    font-size: 6vw;
  }
`;
export const SubTitle = styled.text`
  font-size: 2.5vw;
  text-align: center;
  color: ${white};
  margin-top: 20px;
  font-family: "Roboto";
  font-weight: 100;
  @media ${mediaQueries.mobile} {
    font-size: 3.5vw;
  }
`;
