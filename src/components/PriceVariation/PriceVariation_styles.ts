import { white } from "colors/colors.js";
import styled from "styled-components";
import mediaQueries from "constants/mediaQueries";

import Slider from "@mui/material/Slider";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 130px;
  justify-content: center;
  width: 100%;
  @media ${mediaQueries.mobile} {
    max-width: 70px;
  }
`;
export const Value = styled.div.attrs((props: { color: string }) => props)`
  text-align: center;
  font-size: 1.5vw;
  margin-bottom: 2px;
  color: ${white};
  font-family: "Roboto";
  font-weight: 500;
 color: ${(props) => props.color};
 @media ${mediaQueries.mobile} {
  font-size:2.5vw;
margin-bottom: -10px;
  
  }
`;

export const TimeSlider = styled(Slider)(({ theme }) => ({
  
 
  "&.MuiSlider-root":{
marginBottom:0,
  },
  "& .MuiSlider-markLabel": {
    color: "white",
    fontSize: 9,
    fontWeight: 500,
    marginTop: -5,
    '@media (max-width: 420px)':{
      fontSize:5.5,
    }
  },
  '& .MuiSlider-thumb': {
    '&.Mui-active': {
      boxShadow: '0 0 0 10px rgb(25 118 210 / 16%)',
      '@media (max-width: 420px)':{
        boxShadow: '0 0 0 5px rgb(25 118 210 / 16%)'
      }
    }},
  "& .MuiSlider-valueLabel": {
    display: "none",
   
  },
}));
