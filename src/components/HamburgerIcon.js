import React from 'react';
import { styled, Box } from 'reakit'
import PropTypes from 'prop-types';

const HamburgerWrapper = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 60px;
`;
const HamburgerBar = styled(Box)`
  background: red;
  width: 100%;
  height: 3px;
`;

const HamburgerIcon = props => {
  return (
    <HamburgerWrapper>
      <HamburgerBar />
      <HamburgerBar />
      <HamburgerBar />
    </HamburgerWrapper>
  );
};

HamburgerIcon.propTypes = {

};

export default HamburgerIcon;
