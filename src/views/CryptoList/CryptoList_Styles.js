import { white } from "../../colors/colors";
import styled from "styled-components";

export const ListContainer = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
`;
export const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 25% 30% 40%;
  grid-template-rows: 100%;
  gap: 0px 0px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1%;
`;
export const Name = styled.text`
  font-size: 2vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 300;
`;
export const Value = styled.text`
  font-size: 2vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 300;
  text-align: center;
`;
export const Logo = styled.img`
  height: 55px;
  width: 55px;
`;
