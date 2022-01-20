import { white } from "colors/colors.js";
import styled from "styled-components";
import mediaQueries from "constants/mediaQueries";

export const ListItemContainer = styled.div`
  display: grid;
  grid-template-columns: 18% 18% 18% 18% 18% 8%;
  grid-template-areas: ". . . . . more_info";
  grid-template-rows: 100%;
  gap: 0px 0px;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  padding: 3vh;
  @media ${mediaQueries.mobile} {
    grid-template-columns: 18% 15% 15% 22% 22% 8%;
    padding: 1vh;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1vw;
  justify-content: center;
  @media ${mediaQueries.mobile} {
    padding-left: 1.5vw;
  }
`;

export const Logo = styled.img`
  height: 45px;
  width: 45px;
  @media ${mediaQueries.mobile} {
    height: 23px;
    width: 23px;
    margin-left: 5px;
  }
`;

export const Title = styled.text`
  font-size: 2vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 500;
  @media ${mediaQueries.mobile} {
    font-size: 3vw;
  }
`;
export const ExampleTitle = styled(Title)`
  font-size: 1.3vw;
  @media ${mediaQueries.mobile} {
    font-size: 1.8vw;
  }
`;

export const Name = styled.text`
  font-size: 1vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 300;

  @media ${mediaQueries.mobile} {
    font-size: 1.8vw;
  }
`;

export const Value = styled.text`
  font-size: 2vw;
  color: ${white};
  font-family: "Roboto";
  font-weight: 300;
  text-align: center;
  @media ${mediaQueries.mobile} {
    font-size: 2.7vw;
  }
`;

export const ExampleValue = styled(Value)`
  font-size: 1.5vw;
`;

export const PriceVariationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
`;

export const MoreInfoContainer = styled.div`
  grid-area: more_info;
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

export const MoreInfo = styled.img`
  height: auto;
  width: 2.5vw;
  border-radius: 8px;
  margin-left: 3px;
  margin-right: 3px;
  cursor: pointer;
  @media ${mediaQueries.mobile} {
    border-radius: 4px;
    height: 20px;
    width: 20px;
    margin-left: 1.5px;
    margin-right: 1.5px;
    padding-bottom: 5px;
  }
`;

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
