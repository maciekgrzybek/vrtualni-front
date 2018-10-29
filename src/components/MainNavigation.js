import React from 'react';
import { styled, List, Box } from 'reakit';

import NavLink from './NavLink'
import HamburgerIcon from "./HamburgerIcon";

const NavigationList = styled(List)`
  display: flex;
  flex-direction: column;
  text-align: right;
  list-style: none;
`;
const NavigationWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 1;
  padding-right: 2rem;
  transform: translate3d(-100%,0,0);
`;

const MainNavigation = ({ navigation }) => (
  <>
    <NavigationWrapper>
        <NavigationList>
        { Object.keys(navigation).map(navItem => {
          let navItemData = navigation[navItem];
          return <NavLink data={navItemData} key={navItemData.slug} />
        })}
      </NavigationList>
    </NavigationWrapper>
    <HamburgerIcon />
  </>
);

export default MainNavigation;
