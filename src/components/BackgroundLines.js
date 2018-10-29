import React from 'react'
import {styled, Box} from 'reakit'

import {media} from '../constants/breakpoints'
import {colours} from "../constants/colours";

const LinesContainer = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: grid;
  z-index: -1;
  grid-template-columns: .5fr 1fr .5fr 0 0 0;
  
  ${media.md`background-color: red;`}
`;
const LineBox = styled(Box)`
  :not(:last-child):not(:nth-last-child(2)):not(:nth-last-child(3)):not(:nth-last-child(4))
  {
    border-right: 1px solid ${colours.lightGray};
  };
`;

const BackgroundLines = () => {
  return (
    <LinesContainer>
      <LineBox />
      <LineBox />
      <LineBox />
      <LineBox />
      <LineBox />
      <LineBox />
    </LinesContainer>
  )
}

export default BackgroundLines;
