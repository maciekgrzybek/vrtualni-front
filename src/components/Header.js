import React from 'react'
import { styled, Box } from 'reakit'

import GetNavigation from '../containers/GetNavigation'

const HeaderContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <Box>
     Logo
    </Box>
    <Box>
      <GetNavigation menu="header" />
    </Box>
  </HeaderContainer>
);

export default Header
