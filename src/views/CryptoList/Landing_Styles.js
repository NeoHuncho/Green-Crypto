import { white } from "../../colors/colors";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
`;

export const Title = styled.text`
  font-size: 5vw;
  text-align: center;
  color: ${white};
  font-family: "Roboto";
  font-weight: bolder;
`;
export const SubTitle = styled.text`
  font-size: 2.5vw;
  text-align: center;
  color: ${white};
  margin-top: 20px;
  font-family: "Roboto";
  font-weight: 100;
`;
