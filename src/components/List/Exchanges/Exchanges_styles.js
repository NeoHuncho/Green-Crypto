import { white } from "colors/colors.js";
import styled from "styled-components";
import mediaQueries from "constants/mediaQueries";
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  @media ${mediaQueries.mobile} {
  }
`;

export const Link = styled.img`
  height: auto;
  width: 3.5vw;
  border-radius: 8px;
  margin-left: 3px;
  margin-right: 3px;
  @media ${mediaQueries.mobile} {
    border-radius: 4px;
    height: 22px;
    width: 22px;
    margin-left: 1.5px;
    margin-right: 1.5px;
  }
`;
