import React from 'react'
import {styled, Box} from 'reakit'

import {media} from '../constants/breakpoints'

const LinesContainer = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  display: grid;
  z-index: -1;
  grid-template-columns: .5fr 1fr 1fr 1fr 1fr .5fr;
  
  ${media.md`background-color: green;`}
`;
const LineBox = styled(Box)`
  :not(:last-of-type) {
    border-right: 1px solid #f3f3ea;
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
