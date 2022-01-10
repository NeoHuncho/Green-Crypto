import {} from "colors/colors.js";
import styled from "styled-components";
import mediaQueries from "constants/mediaQueries";
export const ListContainer = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  display: flex;
  @media ${mediaQueries.mobile} {
    margin-top: 2vh;
  }
`;
