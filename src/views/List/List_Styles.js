import { white } from "../../colors/colors.js";
import styled from "styled-components";
import mediaQueries from "../../constants/mediaQueries";
export const ListContainer = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  @media ${mediaQueries.mobile} {
    margin-top: 2vh;
  }
`;
export const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 5% 22% 40% 20% 5% 5%;
  grid-template-rows: 100%;
  grid-template-areas: ". name . . .";
  gap: 0px 0px;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  padding: 1%;
  @media ${mediaQueries.mobile} {
    margin-bottom: 2vh;
    grid-template-columns: 13% 22% 20% 20% 20%;
  }
`;

export const NameContainer = styled.div`
  grid-area: name;
`;

export const Name = styled.text`
  font-size: 2vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 300;

  @media ${mediaQueries.mobile} {
    font-size: 3vw;
  }
`;
export const Value = styled.text`
  font-size: 2vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 300;
  text-align: center;
  @media ${mediaQueries.mobile} {
    font-size: 3vw;
  }
`;
export const Logo = styled.img`
  height: 45px;
  width: 45px;
  @media ${mediaQueries.mobile} {
    height: 30px;
    width: 30px;
    margin-left: 4px;
  }
`;

export const Link = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 8px;
  @media ${mediaQueries.mobile} {
    height: 30px;
    width: 30px;
    margin-left: 4px;
  }
`;
