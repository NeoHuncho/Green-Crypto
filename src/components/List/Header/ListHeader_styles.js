import styled from "styled-components";
import mediaQueries from "constants/mediaQueries";
import { ListItemContainer, Title } from "../Item/Item_Styles";
import { black } from "colors/colors.js";
export const Container = styled(ListItemContainer)`
  padding: 0%;
  padding-top: 1%;
  @media ${mediaQueries.mobile} {
    height: 18px;
    grid-template-columns: 18% 15% 15% 22% 18% 12%;
  }
`;
export const FixedContainer = styled(Container)`
  position: fixed;
  top: 0px;
  background-color: ${black};
  z-index: 100;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled(Title)`
  font-size: 1.5vw;
  text-align: center;
  @media ${mediaQueries.mobile} {
    font-size: 2vw;
  }
`;
export const HeaderSubTitle = styled(HeaderTitle)`
  font-size: 1vw;
  text-align: center;
  @media ${mediaQueries.mobile} {
    font-size: 1.5vw;
  }
`;
