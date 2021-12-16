import { white } from "../../colors/colors";
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
  grid-template-columns: 5% 25% 30% 40%;
  grid-template-rows: 100%;
  gap: 0px 0px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 1%;
  @media ${mediaQueries.mobile} {
    margin-bottom: 2vh;
    grid-template-columns: 15% 25% 20% 40%;
  }
`;
export const Name = styled.text`
  font-size: 2vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 300;

  @media ${mediaQueries.mobile} {
    font-size: 3vw;
    text-align: center;
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
  height: 55px;
  width: 55px;
  @media ${mediaQueries.mobile} {
    height: 40px;
    width: 40px;
  }
`;
