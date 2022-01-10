import styled from "styled-components";
import mediaQueries from "constants/mediaQueries";
import { ListItemContainer, Title } from "../Item/Item_Styles";
export const Container = styled(ListItemContainer)`
  grid-template-columns: 20% 18% 18% 18% 18%;
  padding: 0%;
  padding-top: 1%;
  @media ${mediaQueries.mobile} {
    grid-template-columns: 20% 15% 15% 24% 25%;
    height: 18px;
  }
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
